const mongoose = require('mongoose');


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