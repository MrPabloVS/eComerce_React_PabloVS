import mongoose from "mongoose";

const cartsSchema = new mongoose.Schema({
    code: {type: String, require: true},
    products: {type: Object, require: true}
})

export default cartsSchema