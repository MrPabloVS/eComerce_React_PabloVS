import 'dotenv/config'
import express from 'express'
import { productRouter, cartRouter, userRouter } from './routes/index.js'
import { getError } from './helpers/index.js'
import http from 'http'
import twilio from 'twilio'

const accountSid = "AC833e61516e2e20e676dac947e78b8ff0"
const authToken = "7d7a8bee6db840aa9a89e3d040980281"

const client = twilio(accountSid, authToken)

try {
  const message = await client.messages.create({
    body: "Hola, funciona?",
    from: "+14155238886",
    to:"+5471665003"
  })
} catch (error) {
  console.log(error)
};

const app = express()
const server = http.createServer(app)
const PORT = process.env.PORT || 8000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', productRouter)
app.use('/api', cartRouter)
app.use('/api', userRouter)

app.use(function (err, req, res, next) {
  const error = getError(err.code, err.message)
  console.log(err)
  res.status(error.status).send(error)
})

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} 🔥🔥🔥`)
})
