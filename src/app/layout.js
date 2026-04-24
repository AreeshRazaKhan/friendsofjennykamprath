import { Montserrat } from 'next/font/google'

import './globals.css'

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
      className={`${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body text-navy-800">
        {children}
      </body>
    </html>
  )
}
