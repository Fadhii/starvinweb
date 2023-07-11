const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://31860noor:eU81HqfZen1bGmiR@cluster0.xnesu50.mongodb.net/")//!insert your username
    .then(() => { console.log("MongoDB connected successfully") })//*success message
    .catch((err) => { console.log("Error connecting to MongoDB " + err) });//*fail message

const newSchema = mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    password:{
        type:String,
        required: true
    },
    name:{
        type:String,
        required: true
    }
}
)

const collection = mongoose.model("collection", newSchema);

module.exports=collection;