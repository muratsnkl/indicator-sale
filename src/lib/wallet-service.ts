import { BrowserProvider, JsonRpcSigner, formatUnits, parseUnits } from "ethers"

export async function connectWallet(): Promise<JsonRpcSigner | null> {
  try {
    if (typeof window.ethereum === "undefined") {
      throw new Error("MetaMask is not installed")
    }

    const provider = new BrowserProvider(window.ethereum)
    const signer = await provider.getSigner()
    return signer
  } catch {
    return null
  }
}

export async function getWalletAddress(): Promise<string | null> {
  try {
    const signer = await connectWallet()
    if (!signer) return null
    return await signer.getAddress()
  } catch {
    return null
  }
}

export async function getWalletBalance(): Promise<string | null> {
  try {
    const signer = await connectWallet()
    if (!signer) return null
    const balance = await signer.provider.getBalance(await signer.getAddress())
    return formatUnits(balance, 18)
  } catch {
    return null
  }
}

export async function sendTransaction(
  to: string,
  amount: string
): Promise<string | null> {
  try {
    const signer = await connectWallet()
    if (!signer) return null

    const tx = await signer.sendTransaction({
      to,
      value: parseUnits(amount, 18),
    })

    return tx.hash
  } catch {
    return null
  }
}

export class WalletService {
  private provider: BrowserProvider | null = null
  
  async connect(): Promise<string> {
    if (typeof window === 'undefined' || !window.ethereum) {
      throw new Error('MetaMask yüklü değil')
    }
    
    this.provider = new BrowserProvider(window.ethereum)
    
    try {
      // Kullanıcıdan cüzdan bağlantısı için izin iste
      const accounts = await this.provider.send('eth_requestAccounts', [])
      return accounts[0]
    } catch (error) {
      throw new Error('Cüzdan bağlantısı reddedildi')
    }
  }
  
  async verifyTransaction(txHash: string): Promise<boolean> {
    if (!this.provider) {
      throw new Error('Önce cüzdanı bağlayın')
    }
    
    try {
      const tx = await this.provider.getTransaction(txHash)
      if (!tx) {
        throw new Error('İşlem bulunamadı')
      }
      
      // İşlemin onaylanmasını bekle
      const receipt = await tx.wait()
      return receipt.status === 1 // 1: başarılı, 0: başarısız
    } catch (error) {
      throw new Error('İşlem doğrulanamadı')
    }
  }
  
  async getBalance(address: string): Promise<string> {
    if (!this.provider) {
      throw new Error('Önce cüzdanı bağlayın')
    }
    
    try {
      const balance = await this.provider.getBalance(address)
      return formatUnits(balance, 18)
    } catch (error) {
      throw new Error('Bakiye alınamadı')
    }
  }
  
  async signMessage(message: string): Promise<string> {
    if (!this.provider) {
      throw new Error('Önce cüzdanı bağlayın')
    }
    
    try {
      const signer = this.provider.getSigner()
      return await signer.signMessage(message)
    } catch (error) {
      throw new Error('Mesaj imzalanamadı')
    }
  }
  
  disconnect(): void {
    this.provider = null
  }
}

export const walletService = new WalletService() 