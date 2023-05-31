'use client'
import { Camera } from 'lucide-react'
import MediaPicker from './MediaPicker'
import { FormEvent } from 'react'
import { api } from '@/lib/api'
import Cookie from 'js-cookie'
import { useRouter } from 'next/navigation'

export default function NewMemoryForm() {
  const router = useRouter()

  async function handleCreateMemory(event: FormEvent<HTMLFormElement>) {
    // enviando dados do formulario
    event.preventDefault() // parando o comportamento padrão do HTML

    const formData = new FormData(event.currentTarget)

    const fileToUpload = formData.get('coverURL') // pegando o item que tem name de coverURL e guardando dentro filteToUpload

    let coverUrl = ''

    if (fileToUpload) {
      // se tiver um imagem ele vai fazer isso tudo dentro do if
      const uploadFormData = new FormData() // pegando a imagem nesse formato pq lá no backend não suporta json e sim esse formato
      uploadFormData.set('file', fileToUpload)

      const uploadResponse = await api.post('/upload', uploadFormData)
      coverUrl = uploadResponse.data.fileUrl
    }

    const token = Cookie.get('token') // pegando o token

    await api.post(
      '/memories',
      {
        coverUrl,
        content: formData.get('content'),
        isPublic: formData.get('isPublic'),
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )
    router.push('/')
  }

  return (
    <form onSubmit={handleCreateMemory} className="flex flex-1 flex-col gap-2">
      <div className=" itens-center flex gap-4  max-[600px]:flex-col  md:w-[280px] md:flex-col lg:w-[420px] 2xl:w-[490px] 2xl:flex-row">
        <label
          htmlFor="midia"
          className="flex cursor-pointer items-center gap-1.5  text-sm text-gray-200 hover:text-gray-100 max-[767px]:text-lg max-[408px]:text-[21px] max-[330px]:text-[16px] md:text-[22px] lg:text-[20px] xl:text-[20px] 2xl:text-lg"
        >
          <Camera />
          Anexa mídia
        </label>
        <label
          htmlFor="isPublic"
          className="flex cursor-pointer items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100 max-[767px]:text-lg max-[408px]:text-[21px] max-[330px]:text-[16px] md:text-[22px] lg:text-[20px] xl:text-lg 2xl:text-lg"
        >
          <input
            type="checkbox"
            name="isPublic"
            id="isPublic"
            value="true"
            className="h-4 w-4 rounded border-gray-400 bg-gray-700 text-purple-500"
          />
          Tornar memoria publica
        </label>
      </div>
      <MediaPicker /* input */ />
      <textarea
        name="content"
        spellCheck={false}
        className="w-full flex-1 resize-none rounded border-0 bg-transparent p-0 text-justify text-lg leading-relaxed text-gray-100 placeholder:text-gray-400 focus:ring-0"
        placeholder="Fique livre para adicionar fotos e relatos sobre essa experiencia que você quer lembrar daqui para sempre"
      />
      <button
        className="inline-block self-end rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-600 max-[320px]:mt-[30px]"
        type="submit"
      >
        Enviar
      </button>
    </form>
  )
}
