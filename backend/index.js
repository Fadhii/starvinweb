const express = require('express');
const mongoose = require('mongoose');
const app = express();
const collection = require('./mongo');
const Reservation = require('./reserve');
const cors = require('cors');
const PORT = 4578
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

mongoose.connect("mongodb+srv://31860noor:eU81HqfZen1bGmiR@cluster0.xnesu50.mongodb.net/")//!insert your username
    .then(() => { console.log("MongoDB connected successfully") })//*success message
    .catch((err) => { console.log("Error connecting to MongoDB " + err) });//*fail message
  

app.get("/",cors(),(req,res)=>{

})

app.listen(PORT, function(){
    console.log(`Server running on port ${PORT}`);
});


app.post("/login", async(req,res) =>{
    const{email,password} = req.body;

    try {
        const check = await collection.findOne({email:email});
   
        if(check){
            
            res.json("exist");
        }
        else{
            res.json("notexist");
        }
    } catch (error) {
        res.json("notexist");
    }
})

app.post("/signup", async(req,res) =>{
    const{email,password,userName} = req.body;

    const data = {
        email:email,
        password:password,
        name: userName
    }
    try {
        const check = await collection.findOne({email:email});

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist");
            await collection.insertMany([data]);
        }
    } catch (error) {
        res.json("notexist");
    }
})

app.post('/reservations', async (req, res) => {
    const { name, email, phone, date, time, guests } = req.body;
  
    try {
      const reservation = new Reservation({
        name,
        email,
        phone,
        date,
        time,
        guests
      });
  
      await reservation.save();
      res.json('Reservation created successfully');
    } catch (error) {
      console.log(error);
      res.status(500).json('Error creating reservation');
    }
  });