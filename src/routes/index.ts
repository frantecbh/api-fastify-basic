import { app } from '../server'
import { ProductsRoutes } from './products/@ProductsRoutes'
import { UsersRoutes } from './users/@UserRoutes'

export const routes = async () => {
  app.register(ProductsRoutes)
  app.register(UsersRoutes)
}
