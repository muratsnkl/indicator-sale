import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

const navigation = {
  main: [
    { name: "Ana Sayfa", href: "/" },
    { name: "İndikatörler", href: "/indicators" },
    { name: "Blog", href: "/blog" },
    { name: "Hakkımızda", href: "/about" },
  ],
  support: [
    { name: "SSS", href: "#" },
    { name: "Destek", href: "#" },
    { name: "İletişim", href: "#" },
  ],
  legal: [
    { name: "Gizlilik Politikası", href: "#" },
    { name: "Kullanım Koşulları", href: "#" },
    { name: "KVKK", href: "#" },
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: Facebook,
    },
    {
      name: "Instagram",
      href: "#",
      icon: Instagram,
    },
    {
      name: "Twitter",
      href: "#",
      icon: Twitter,
    },
  ],
}

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-sm font-semibold">Navigasyon</h3>
            <ul role="list" className="mt-4 space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Destek</h3>
            <ul role="list" className="mt-4 space-y-2">
              {navigation.support.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Yasal</h3>
            <ul role="list" className="mt-4 space-y-2">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Sosyal Medya</h3>
            <ul role="list" className="mt-4 space-y-2">
              {navigation.social.map((item) => {
                const Icon = item.icon
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center space-x-2"
                    >
                      <Icon className="h-4 w-4" />
                      <span>{item.name}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8">
          <p className="text-center text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} İndikatör Satış. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  )
} 