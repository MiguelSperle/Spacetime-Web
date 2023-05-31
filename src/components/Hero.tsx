import Link from 'next/link'
import Image from 'next/image'
import nlwLogo from '../assets/nlw-spacetime-logo.svg'

export default function Hero() {
  return (
    <div className=" space-y-5  max-[469px]:w-[400px]   max-[408px]:w-[350px]  max-[391px]:w-[320px]">
      <Image
        src={nlwLogo}
        alt="NLW Spacetime"
        className="max-[322px]:ml-[10px]"
      />

      <div className="space-y-4 ">
        <h1
          className="
        mt-5 font-sans text-4xl font-bold leading-tight text-gray-50 max-[767px]:w-[450px]  max-[767px]:text-[40px] max-[451px]:text-[34px] max-[408px]:text-[28px]
        max-[391px]:text-[25px] max-[322px]:ml-[10px] md:w-[340px] md:text-[32px] lg:w-[400px] lg:text-[35px] xl:w-[450px]  xl:text-[40px] 2xl:w-[420px]  2xl:text-[40px]
        "
        >
          Sua cápsula do tempo
        </h1>
        <p className="text-justify text-lg leading-relaxed  max-[767px]:w-[350px] max-[408px]:w-[340px] max-[391px]:w-[300px] max-[391px]:text-[20px] max-[322px]:ml-[10px]  max-[322px]:w-[280px] md:w-[300px] md:text-[20px] lg:w-[320px] xl:w-[380px] 2xl:w-[350px]">
          Colecione momentos marcantes da sua jornada e compartilhe se quiser
          com o mundo!
        </p>
      </div>
      <Link
        className=" 
        inline-block rounded-full bg-green-500 px-5 py-3 text-center font-alt text-sm uppercase leading-none  text-black hover:bg-green-600 max-[322px]:ml-[10px] md:text-[16px] lg:w-60
        lg:text-sm 
        "
        href="/memories/new"
      >
        CADASTRAR LEMBRANÇA
      </Link>
    </div>
  )
}
