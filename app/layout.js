import { Outfit } from 'next/font/google'
import './globals.css'
// compoenents
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata = {
  title: 'Pratik Gondaliya - Software Developer',
  description: 'Personal Freelancer Portfolio',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute='class' defaultTheme='light'>
          {/* header */}
          <Header />
          {/* content */}
          {children}
          {/* footer */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
