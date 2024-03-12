import './globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from "@/widgets/header/ui/header";
import Footer from "@/widgets/footer/ui/footer";
import layoutStyle from "@/app/layout.module.scss"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Doctors web app',
  description: 'Information, self-testing, registration for an appointment and more other',
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className={layoutStyle.mainContainer}>
          <Header/>
          <main className={layoutStyle.mainContent}>
              {children}
          </main>
          <Footer/>
      </div>
      </body>
    </html>
  )
}
