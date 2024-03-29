import ReduxProvider from '@/providers/redux-provider'
import ToasterProvider from '@/providers/toaster-provider'
import AuthProvider from '@/providers/auth-provider'

import Navbar from '@/components/Navbar'


import './index.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Typing Test',
  description: 'Typing Test is a web application generated by Create Next App. It provides a platform for users to test and improve their typing skills. With a user-friendly interface and interactive features, this app allows individuals to measure their words per minute (WPM) and accuracy while typing. Whether you want to assess your typing speed, practice touch typing, or enhance your overall typing abilities, the Typing Test offers an engaging and educational experience.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <AuthProvider>
        <ReduxProvider>
          <html lang="en" className='dark'>
            <body className={`layout ${inter.className}`}>
              <div>
                  <div className="gradient"/>
              </div>
              <main className='main'>
                <Navbar />
                <ToasterProvider />
                {children}
              </main>
            </body>
          </html>
        </ReduxProvider>
      </AuthProvider>
  )
}
