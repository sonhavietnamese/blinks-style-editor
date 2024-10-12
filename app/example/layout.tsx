import WalletAdapter from '@/components/wallet-adapter'
import type { Metadata } from 'next'
import '../globals.css'

export const metadata: Metadata = {
  title: 'Example',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <WalletAdapter>{children}</WalletAdapter>
}
