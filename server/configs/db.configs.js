import 'dotenv/config'
import mongoose from 'mongoose';
//import knex from 'knex'


dotenv.config()

mongoose.connect(process.env.MONGO_URI, (err) => {
    if (err) {
        console.log('Error al Conectarse a MongoDB');
    } else {
        console.log('Conectados a MongoDB')
    }});

export default mongoose;






/* export const db = knex({
  client: process.env.DB_CLIENT,
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  }
}) */
