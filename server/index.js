//import 'dotenv/config'
import express from 'express'
import { userRouter } from './routes/index.js'  //productRouter, cartRouter, 
import { getError } from './helpers/index.js'
import http from 'http'
import twilio from 'twilio'
import path from 'path'
import {fileURLToPath} from 'url';
import { Server}  from "socket.io"
import { graphqlHTTP } from 'express-graphql'
import { buildSchema } from 'graphql'
import { getUser, getUsers, createUser } from './Controllers/graphql.controllers.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

//////const client = twilio(accountSid, authToken)
//* TWilio 
//! OJO LAS CLAVES
// const accountSid = 'AC833e61516e2e20e676dac947e78b8ff0'; 
// const authToken = "d70bd2920c69bcea56c98bf7a1aedded"; 
// const client = twilio(accountSid, authToken); 
 
// client.messages 
//       .create({ 
//          body: 'su pedido a sido recibido y se encuentra en camino',  
//          messagingServiceSid: 'MGcd3cba078729fa16a1c43ac65ccfc4dd',      
//          to: '+5491171665003' 
//        }) 
//       .then(message => console.log(message.sid)) 
//       .done();

// try {
//   const message = await client.messages.create({
//     body: "Hola, funciona?",
//     from: "+13512137898",
//     to:"+5471665003"
//   })
// } catch (error) {
//   console.log(error)
// };

const schema = buildSchema(`
     type User {
        username: String
        email: String
        password: String
 }
    input UserINput {
        username: String!
        email: String!
        password: String!
    }

    type Query {
       userGet(email: String!): User
    }

    type Mutation {
        createUser(usuario: UsuarioInput): User
        updateUser(email: String!, usuario: UsuarioUpdateInput): User
        deleteUser(email: String!): String
    }
`)

const app = express()
const server = http.createServer(app)
const PORT = process.env.PORT || 8000


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

const httpServer = http.createServer(app)
const io = new Server(httpServer)


//app.use('/api', productRouter)
//app.use('/api', cartRouter)
app.use('/api', userRouter)
app.use("/graphql", graphqlHTTP({
  schema: schema,
  rootValue: {
    getUsers,
    getUser,
    createUser
  }
}))

io.on("connection", socket => {
  // console.log("SocketIO Connected!");
  // const messages = JSON.parse(fs.readFileSync("mensajes.json", utf));
  // mensajesDB = messages;
  // socket.emit("initial", messages);
  // socket.on("sendMessage", (data) => {
  //     data.timestamp = (new Date).toLocaleString();
  //     mensajesDB.push(data);
  //     io.sockets.emit("shareMessages", mensajesDB);
  //     fs.writeFileSync("mensajes.json", JSON.stringify(mensajesDB), utf);
  // });
})

app.use(function (err, req, res, next) {
  const error = getError(err.code, err.message)
  console.log(err)
  res.status(error.status).send(error)
})

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} 🔥🔥🔥`)
})
