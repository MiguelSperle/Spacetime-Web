'use client'
import { api } from '@/lib/api'
import { Pen } from 'lucide-react'
import { useState } from 'react'
import Cookie from 'js-cookie' // é igual um cookie do proprio next mas esse serve pra ser utilizado em lugares que contem (use client)

export default function EditContent(props: any) {
  const [showinputedit, setShowInputEdit] = useState<boolean>(false) // monstro o input e botão de confirmar
  const [newValue, setNewValue] = useState<string>('')
  const [newcontent, setNewContent] = useState<boolean>(false)
  const [atualizar, setAtualizar] = useState<boolean>(false)

  function handleClickChangeContent() {
    setShowInputEdit(!showinputedit)
  }

  function handleOnChangeContent(e: any) {
    setNewValue(e.target.value)
  }

  const valueContent: string = props.memory // conteudo que está escrito na memoria]

  const token = Cookie.get('token') // consigo extrair o token  num arquivo que contenha use client

  const idMemory: string = props.idMemory // id de cada memoria

  async function handleClickConfirmEdit(valueContent: any) {
    setNewContent(true)
    valueContent = newValue
    await api.put(
      `/memories/${idMemory}`,
      {
        // itens que vou modificar
        content: valueContent,
        coverUrl: props.coverUrlMemory, // esse coverUrlMemory = url da imagem
      },
      {
        headers: {
          Authorization: `Bearer ${token}`, // O token é uma forma de autenticação, para manter sua aplicação segura, impedindo que qualquer um tenha acesso.
        },
      },
    )
    setAtualizar(true)
  }

  async function handleClickDeleteMemory() {
    await api.delete(`/memories/${idMemory}`, {
      headers: {
        Authorization: `Bearer ${idMemory}`,
      },
    })
    setAtualizar(true)
  }

  if (atualizar) {
    window.location.reload()
  }

  return (
    <>
      <p>{valueContent}</p>
      {showinputedit && (
        <div className="flex items-center border-b border-gray-500 py-2">
          <input
            onChange={handleOnChangeContent}
            type="text"
            className=" mr-3 h-8  appearance-none rounded-md border-none bg-transparent p-4 px-2 py-1 text-sm leading-tight outline-none placeholder:text-[15px] focus:outline-none"
            placeholder="Edite como preferir"
          />
        </div>
      )}

      {showinputedit && (
        <p className="cursor-pointer" onClick={handleClickConfirmEdit}>
          confirmar
        </p>
      )}
      <Pen className="cursor-pointer" onClick={handleClickChangeContent} />
      <button
        onClick={handleClickDeleteMemory}
        className="h-12 rounded border border-red-500  bg-transparent p-2 text-sm text-white transition duration-300 hover:border-transparent hover:bg-red-600"
      >
        Deletar minha mémoria
      </button>
    </>
  )
}
