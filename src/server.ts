import fastify from 'fastify'
import { routes } from './routes'

export const app = fastify()

app.register(routes)

app.listen({ port: 3333 }).then(() => {
  console.log('HTTP server running')
})
