import decode from 'jwt-decode' // essa lib entende o token e retirar todoas as informações dele
import { cookies } from 'next/headers'

interface User {
  sub: string
  name: string
  avatarUrl: string
}

export function getUsers(): User {
  const token = cookies().get('token')?.value // guardando o token dentro

  if (!token) {
    // se o token não existir retornar o erro
    throw new Error('não existi')
  }

  const user: User = decode(token) // se ele existir, eu vou usar a função decode para entender o token e retirar as informações de dentro dele para por foto e nome no componente profile

  return user
}
