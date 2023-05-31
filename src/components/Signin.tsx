import { User } from 'lucide-react'
import Link from 'next/link'

export default function SignIn() {
  return (
    <Link
      href={`https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`}
      /* Eu estou solicitando que o github autentique o usuário pelo meu app, por isso estou usando o id(id da minha aplicação),  
      ele vai fazer seu próprio fluxo de autenticação e retornar um code na url, onde vou enviar para o back */
      className="flex items-center gap-3 text-left transition-colors hover:text-gray-50  max-sm:w-[450px] max-[469px]:w-[400px]  max-[408px]:w-[365px]  max-[391px]:w-[330px]  max-[322px]:ml-[30px] sm:w-[440px] md:w-[340px] lg:w-[400px] xl:w-[440px] 2xl:w-[420px]"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 ">
        <User className="h-5 w-5 text-gray-500 md:w-10" />
      </div>
      <p className="max-w-[170px] text-sm leading-snug md:w-40">
        <span className="underline ">Crie sua conta</span> e salve suas memórias
      </p>
    </Link>
  )
}
