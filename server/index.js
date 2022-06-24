import 'dotenv/config'
import express from 'express'
import { productRouter, cartRouter, userRouter } from './routes/index.js'
import { getError } from './helpers/index.js'
import http from 'http'
import twilio from 'twilio'

const accountSid = process.env.TWILIOSID
const authToken = process.env.TWILIOTOKEN

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
