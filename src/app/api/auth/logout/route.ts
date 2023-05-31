// deslogando
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const redirectURL = new URL('/', request.url) // redirenciar o usuario para rota raiz(/) da url da minha aplicação

  return NextResponse.redirect(redirectURL, {
    headers: {
      // Set-Cookie, estou salvando o token no cookies
      'Set-Cookie': `token=; path=/; max-age=0`, // max-age=0 para apagar o cookie e dentro do token faço token=; para não passar nenhum valor
    },
  })
}
