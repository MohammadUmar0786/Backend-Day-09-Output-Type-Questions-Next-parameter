// Create server
const express = require('express');
const app = express();

// Guess the O/P:
app.use('/user',(req,res,next)=>{
    console.log("first");
    next();
    console.log("Sixth");
},(req,res,next)=>{
    console.log("second");
    next();
    console.log("fifth");
},(req,res)=>{
    console.log("Third");
    res.send("I'm third");
    console.log("Fourth");
})

// O/P=> at terminal here:- first second Third Fourth fifth Sixth & at postman => I'm third

// listen at a port no.
app.listen(3000,()=>{
    console.log('Listening at a port no. 3000');
});    

// Explanation in Image (Can Go through from it)