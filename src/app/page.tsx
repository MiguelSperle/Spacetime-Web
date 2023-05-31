import EditContent from '@/components/EditContent'
import EmptyMemories from '@/components/EmptyMemories'
import { api } from '@/lib/api'
import dayjs from 'dayjs'
import ptBr from 'dayjs/locale/pt-br'
import { cookies } from 'next/headers'
import Image from 'next/image'
dayjs.locale(ptBr)

interface Memory {
  id: string
  coverUrl: string
  excerpt: string
  createdAt: string
}

export default async function Home(props: any) {
  const isAuthenticaded = cookies().has('token') // esse has verifica se existi dentro do cookies um token. se tiver ele estará autenticado, se não ele não está
  if (!isAuthenticaded) {
    // se não tiver autenticado vai mostrar esse componente
    return <EmptyMemories />
  }

  const token = cookies().get('token')?.value
  const response = await api.get('/memories', {
    headers: {
      // passando a autorização do usuario
      Authorization: `Bearer ${token}`,
    },
  })

  const memories: Memory[] = response.data

  if (memories.length === 0) {
    // se eu não tiver nenhuma memoria eu também vou retornar esse componente
    return <EmptyMemories />
  }

  // se eu tiver
  return (
    <div className="flex flex-col gap-10 p-8">
      {memories.map((memory) => {
        return (
          <div key={memory.id} className="space-y-4">
            <time className="-ml-8 flex items-center gap-2 p-5 text-sm text-gray-100 max-[767px]:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg">
              {dayjs(memory.createdAt).format('D[ de ]MMMM[, ]YYYY')}
            </time>
            <Image
              className="aspect-video w-full rounded-lg object-cover"
              src={memory.coverUrl}
              width={592}
              height={280}
              alt=""
            />
            {/* <p className="2xl: text-lg leading-relaxed text-gray-100">
              {memory.excerpt}
            </p> */}
            <EditContent
              coverUrlMemory={memory.coverUrl}
              idMemory={memory.id}
              memory={memory.excerpt}
            />
          </div>
        )
      })}
    </div>
  )
}
