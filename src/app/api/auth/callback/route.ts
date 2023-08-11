// pegando o token e guardando no cookies
import { api } from '@/lib/api'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url) // acesso a parametros que esta vindo na url
  const code = searchParams.get('code') // quero pegar dentro do searchParams o (code)
  console.log(code)

  const redirectTo = request.cookies.get('redirect')?.value
  console.log(redirectTo)

  const routeRegister = '/register'

  const registerResponse = await api.post(`${routeRegister}`, {
    code,
  })

  const { token } = registerResponse.data

  const redirectURL = redirectTo ?? new URL('/', request.url) // pra onde eu vou redicionar  o usuario apos fazer login
  // nesse caso se existir no cookies a informação redirectTo ele vai pra essa pagina , se não vai pro home

  const cookiesExpiresInSeconds = 60 * 60 * 24 * 30
  /* 60 x 60 = 1 Hora, * 24 = 1 dia, * 30 = 30 dias (falando que o token vai expirar daqui
  a 30 dias) */

  return NextResponse.redirect(redirectURL, {
    headers: {
      // Set-Cookie, estou salvando o token no cookies
      'Set-Cookie': `token=${token}; path=/; max-age=${cookiesExpiresInSeconds}`,
    },
  })
}
