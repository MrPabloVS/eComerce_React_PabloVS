import express from 'express'
import {
  genAdminToken,
  verifyToken
} from '../controllers/index.js'

export const userRouter = express.Router()

userRouter.get('/user', genAdminToken)
userRouter.post('/user', verifyToken)
