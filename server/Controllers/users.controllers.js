import jwt from 'jsonwebtoken'
import { getFirestore } from '../../sevices/getFirebase'
import firebase from 'firebase/app'
import 'firebase/firestore'

// Configurar Firebase
const dataBase = getFirestore();
const usersController = dataBase.collection("Users")


export const genAdminToken = (req, res, next) => {
  try {
    const adminToken = jwt.sign({
      id: 1,
      name: 'Admin',
      email: 'test@gmail.com',
      role: 'admin',
      timestamp: new Date().toISOString()
    }, process.env.API_SECRET, { expiresIn: '1h' })
    res.send({ adminToken })
  } catch (error) {
    error.status = 500
    next(error)
  }
}

export const verifyToken = (req, res, next) => {
  try {
    if (req.headers?.authorization?.split(' ')[0] === 'Bearer') {
      jwt.verify(req.headers.authorization.split(' ')[1], process.env.API_SECRET, function (err, decode) {
        if (err) {
          const error = new Error('Not authorized')
          error.status = 401
          throw error
        }
        req.user = decode
        res.send({ user: req.user })
      })
    } else {
      const error = new Error('Token is required')
      error.status = 401
      error.code = 'UNAUTHORIZED'
      throw error
    }
  } catch (error) {
    next(error)
  }
}



export const registerUser = async (req, res) => { 
  
  await usersController.add(req)
          .then((document)=>{
            res.send(req)
            console.log(`registrado ${document.Username} id: ${document.id}`)
          })
         .catch( err => {
            console.log(err);
          })

}

export const loginUser = (req, res) => { 

  const db = dataBase.collection('Items').where({
    MailAdress: req.mail,
    Password: req.pass})

  if (db) {
    res.send({
      boolean: true,
      user: db
    })
  } else {
    res.send({boolean: false})
  }

}