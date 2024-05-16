import { app } from '../../server'
import { getUsers } from './get-user'

export const UsersRoutes = async () => {
  app.register(getUsers)
}
