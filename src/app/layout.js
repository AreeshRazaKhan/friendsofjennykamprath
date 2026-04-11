import { Playfair_Display, Montserrat } from 'next/font/google'

import './globals.css'

const playfair = Playfair_Display({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
})

const montserrat = Montserrat({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
})

export const metadata = {
  title: 'Jenny Kamprath for County Chair',
  description:
    'Jenny Kamprath — a no-nonsense leader focused on fiscal responsibility,'
    + ' safe neighborhoods, and common-sense government.',
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body text-navy-800">
        {children}
      </body>
    </html>
  )
}
