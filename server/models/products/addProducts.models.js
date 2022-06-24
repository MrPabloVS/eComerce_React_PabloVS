import { db } from '../../configs/index.js'
import { productsSchema } from './index'

export const addProductDb = async ({name, description, code, stock, price, thumbnail}) => {
  try {
    const res =  productsSchema(name, description, code, stock, price, thumbnail)
    return res
  } catch(error) {
    return error
  }
}
/* export const addProductDb = async ({ name, description, code, stock, price, thumbnail }) => {
  try {
    const res = await db('products').insert({
      name,
      description,
      code,
      stock,
      price,
      thumbnail
    })
    return res[0]
  } catch (error) {
    return error
  }
}
 */