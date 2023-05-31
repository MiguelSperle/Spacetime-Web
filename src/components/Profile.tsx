import { getUsers } from '@/lib/auth'
import Image from 'next/image'

export default function Profile() {
  const { name, avatarUrl } = getUsers() // importando o componente e dentro dele vou pegar o name e o avatarUrl do usuario

  return (
    <div className="flex items-center gap-3 max-sm:w-[450px]  max-[469px]:w-[400px] max-[408px]:w-[320px] max-[391px]:w-[320px]  max-[322px]:ml-[30px] sm:w-[440px] md:w-[340px] lg:w-[400px] xl:w-[440px] 2xl:w-[420px]">
      <Image
        src={avatarUrl}
        width={40}
        height={40}
        alt=""
        className=" h-10 w-10 rounded-full max-[767px]:h-12 max-[767px]:w-12 md:h-12 md:w-12 lg:h-12 lg:w-12 xl:h-12 xl:w-12 2xl:h-12 2xl:w-12"
      />
      <p className=" max-w-[140px] flex-col text-sm leading-snug max-[767px]:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg">
        {name}
        <a
          href="/api/auth/logout" // estou redirencionando para rota de logout na api
          className="block text-red-400 hover:text-red-300  max-[767px]:text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-sm"
        >
          Quero sair
        </a>
      </p>
    </div>
  )
}
