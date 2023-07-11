const express = require('express');
const app = express();
const collection = require('./mongo');
const cors = require('cors');
const PORT = 4578
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

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

