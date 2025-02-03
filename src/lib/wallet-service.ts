import { BrowserProvider, JsonRpcSigner, formatEther } from "ethers"

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
    } catch {
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
      return receipt?.status === 1 // 1: başarılı, 0: başarısız
    } catch {
      throw new Error('İşlem doğrulanamadı')
    }
  }
  
  async getBalance(address: string): Promise<string> {
    if (!this.provider) {
      throw new Error('Önce cüzdanı bağlayın')
    }
    
    try {
      const balance = await this.provider.getBalance(address)
      return formatEther(balance)
    } catch {
      throw new Error('Bakiye alınamadı')
    }
  }
  
  async signMessage(message: string): Promise<string> {
    if (!this.provider) {
      throw new Error('Önce cüzdanı bağlayın')
    }
    
    try {
      const signer = await this.provider.getSigner() as JsonRpcSigner
      return await signer.signMessage(message)
    } catch {
      throw new Error('Mesaj imzalanamadı')
    }
  }
  
  disconnect(): void {
    this.provider = null
  }
}

export const walletService = new WalletService() 