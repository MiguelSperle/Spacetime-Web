'use client'

import { ChangeEvent, useState } from 'react'
import Image from 'next/image'

export default function MediaPicker() {
  const [preview, setPreview] = useState<string | null>(null)

  function onFileSelected(event: ChangeEvent<HTMLInputElement>) {
    const files = event.target.files

    if (!files) {
      return
    }

    const previewURL = URL.createObjectURL(files[0])

    setPreview(previewURL)
  }

  return (
    <>
      <input
        onChange={onFileSelected}
        type="file"
        id="midia"
        name="coverURL"
        accept="images/*" // vai aceitar apenas imagens
        className="invisible h-0 w-0"
      />
      {preview && (
        <Image
          src={preview}
          alt=""
          width={40}
          height={40}
          className="aspect-video w-full rounded-lg object-cover"
        />
      )}
    </>
  )
}
