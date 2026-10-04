const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
const PORT = 3000;


app.get("/" , function(req, res){
    res.send("EXCEPTIONAL IS RUNNING ON BACKEND");
});

app.post("/contact", function(req, res){

    const {name, email, message} = req.body;
    if (!name || !email || !message) {
        return res.status(400).json({
            message: "please fill the blank space"
        });
    };

    console.log(req.body);

    setTimeout(function(){

        res.json({
        message:"Your messaged has been succesfully recieved.. The Admin will get back to you shortly"
    })

    },2000);

    
})

app.listen(PORT , function(){
    console.log(`Server running on http://localhost:${PORT}`)
})