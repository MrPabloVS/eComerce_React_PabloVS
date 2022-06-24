//import { db } from '../../configs/index.js'
import {cartsSchema} from './index'



export const createCartDb = async () => {
  try {
    const res = cartsSchema({products:{}}) 
    res.save()
    return res
  } catch(error) {
    return error
  }
}



/* export const createCartDb = async () => {
  try {
    const res = await db('carts').insert({})
    await db('cart_items').insert({ cart_id: res[0] })
    return res[0]
  } catch (error) {
    return error
  }
}
 */