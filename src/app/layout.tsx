import '../styles/globals.css'
import { Crimson_Pro, Lato } from 'next/font/google'

const crimson = Crimson_Pro({
  variable: '--font-crimson',
  subsets: ['latin'],
  display: 'swap'
})

const lato = Lato({
  variable: '--font-lato',
  subsets: ['latin'],
  display: 'swap',
  weight: '300'
})

export const metadata = {
  title: 'Card produto',
  generator: 'Next.js',
  applicationName: 'Product Card',
  keywords: ['Next.js', 'React', 'JavaScript', 'boraCodar', 'Rockeseat']
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className={`${crimson.variable} ${lato.variable}`}>
      <body className="bg-rose-100 text-rose-900">{children}</body>
    </html>
  )
}
