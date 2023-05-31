import Link from 'next/link'

export default function Copyright() {
  return (
    <div className="text-sm  leading-relaxed text-gray-200 max-sm:w-[445px] max-sm:text-lg max-[469px]:w-[385px] max-[408px]:w-[340px]  max-[408px]:text-[20px]  max-[391px]:w-[320px] max-[391px]:text-[18px] max-[322px]:ml-[30px]   sm:w-[440px] sm:text-lg  md:w-[330px] md:text-[20px] lg:w-[400px]  lg:border-cyan-300 lg:text-lg xl:w-[450px]  xl:text-lg 2xl:w-[400px] 2xl:text-lg ">
      Feito com 💜 no NLW da{' '}
      <Link
        href="#"
        target="_blank"
        rel="noreferrer"
        className="underline hover:text-gray-100 "
      >
        Rocketseat
      </Link>
    </div>
  )
}
