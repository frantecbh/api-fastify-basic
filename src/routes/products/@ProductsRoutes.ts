import { app } from '../../server'
import { getProducts } from './get-products'

export const ProductsRoutes = async () => {
  app.register(getProducts)
}
