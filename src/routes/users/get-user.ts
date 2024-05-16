import { FastifyInstance } from 'fastify'

export const getUsers = async (app: FastifyInstance) => {
  app.get('/users', async (request, replay) => {
    return replay.status(200).send([
      { id: 1, name: 'Bola' },
      { id: 2, name: 'Caneta' },
      { id: 3, name: 'Caderno' },
    ])
  })
}
