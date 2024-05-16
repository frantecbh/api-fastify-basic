import { FastifyInstance } from 'fastify'

export const getProducts = async (app: FastifyInstance) => {
  app.get('/products', async (request, replay) => {
    return replay.status(200).send([
      { id: 1, name: 'Bola' },
      { id: 2, name: 'Caneta' },
      { id: 3, name: 'Caderno' },
    ])
  })
}
