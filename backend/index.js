const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.listen(3000, function(){
    console.log("Server running on port 3000");
});

mongoose.connect("mongodb+srv://31860noor:eU81HqfZen1bGmiR@cluster0.xnesu50.mongodb.net/")//!insert your username
    .then(() => { console.log("MongoDB connected successfully") })//*success message
    .catch((err) => { console.log("Error connecting to MongoDB " + err) });//*fail message