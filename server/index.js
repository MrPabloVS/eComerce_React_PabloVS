//import 'dotenv/config'
import express from 'express'
import { userRouter } from './routes/index.js'  //productRouter, cartRouter, 
import { getError } from './helpers/index.js'
import http from 'http'
import twilio from 'twilio'
import path from 'path'
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

//////const client = twilio(accountSid, authToken)
//! descomentar para funcionar
//const accountSid = 'AC833e61516e2e20e676dac947e78b8ff0'; 
//const authToken = "d70bd2920c69bcea56c98bf7a1aedded"; 
const client = twilio(accountSid, authToken); 
 
client.messages 
      .create({ 
         body: 'uuuu',  
         messagingServiceSid: 'MGcd3cba078729fa16a1c43ac65ccfc4dd',      
         to: '+5491171665003' 
       }) 
      .then(message => console.log(message.sid)) 
      .done();

// try {
//   const message = await client.messages.create({
//     body: "Hola, funciona?",
//     from: "+13512137898",
//     to:"+5471665003"
//   })
// } catch (error) {
//   console.log(error)
// };

const app = express()
const server = http.createServer(app)
const PORT = process.env.PORT || 8000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));


//app.use('/api', productRouter)
//app.use('/api', cartRouter)
app.use('/api', userRouter)

app.use(function (err, req, res, next) {
  const error = getError(err.code, err.message)
  console.log(err)
  res.status(error.status).send(error)
})

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} 🔥🔥🔥`)
})
