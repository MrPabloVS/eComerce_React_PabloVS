import mongoose from "mongoose";


const productosSchema = new mongoose.Schema({
    code: {type: String, require: true},
    name: {type: String, require: true},
    description: {type: String, require: true},
    thumbnail: {type: String, require: true},
    price: {type: Number, require: true},
    stock: {type: Number, require: true}
})


export default productosSchema