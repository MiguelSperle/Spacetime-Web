import { ReactNode } from 'react'
import './globals.css'
import { Roboto_Flex as Roboto, Bai_Jamjuree as Bai } from 'next/font/google'
import Hero from '@/components/Hero'
import Profile from '@/components/Profile'
import SignIn from '@/components/Signin'
import Copyright from '@/components/Copyright'
import { cookies } from 'next/headers'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const jamjuree = Bai({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-jamjuree',
})

export const metadata = {
  title: 'NLW Spacetime',
  description:
    'Uma cápsula do tempo feita com React, Next.js, TailwindCSS e TypeScript',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const isAuthenticaded = cookies().has('token') // esse has verifica se existi dentro do cookies um token. se tiver ele estará autenticado, se não ele não está

  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${jamjuree.variable} bg-gray-900 font-sans text-gray-100`}
      >
        <main className="grid min-h-screen grid-cols-2 max-[768px]:flex-col max-[767px]:flex ">
          <div className="relative flex  flex-col items-center justify-center gap-9  overflow-hidden bg-[url(../assets/bg-stars.svg)] py-[80px]">
            <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full"></div>
            <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />
            {isAuthenticaded ? <Profile /> : <SignIn />}{' '}
            {/* se o usuario estiver autenticado mostra <Profile/>, se não tiver mostra o <SignIn/> */}
            <Hero />
            <Copyright />
          </div>

          <div className="flex  flex-col  bg-[url(../assets/bg-stars.svg)] bg-cover">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
