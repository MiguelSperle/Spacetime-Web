// interceptando o acesso de um usuario se ele não estiver logado por meio de uma MIDDLEWARE( uma
// função que desempenha um papel intermediário entre um cliente e um servidor)
import { NextResponse } from 'next/server'

const sign = `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}` // rota login

export function middleware(request: NextResponse) {
  // verficiando se o usuario está logado
  const token = request.cookies.get('token')?.value // acessando os cookies
  if (!token) {
    // se n existir o token ou seja, se ele não estiver logado
    return NextResponse.redirect(sign, {
      headers: {
        'Set-cookie': `redirect=${request.url}; path=/; HttpOnly  max-age=20`,
        // Dentro desse header vai redirecionar o usuario para a rota que ele estava tentando acessar
        // HttpOnly ele faz com que o cookie não fique a mostra para o usuario ao inspecionar o elemento
      },
    }) // redirecionando ele para rota de login
  }

  return NextResponse.next() // deixa ele continar se estiver com token já
}

export const config = {
  matcher:
    '/memories/:path*' /* quais rotas da minha aplicação eu quero obrigar para que o usuario acessar tenha que estar logado, 
  nesse caso essa função será chamada qualquer vez que usuario tentar acessar a rota(memories) */,
}
