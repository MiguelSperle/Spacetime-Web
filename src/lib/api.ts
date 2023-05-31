import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3333',
  headers: {
    'X-Request-Origin': 'web', // passando o conteúdo do (X-Request-Origin) = web, para fazer a verificação lá no backend
  },
})
