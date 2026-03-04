// "next" parameter=> 3rd parameter of call back fn of app.use:
// It use to call next callback fn

// Create server using express
const express = require('express');
const app = express();

// Guess the output:
app.use('/user',(req,res,next)=>{
    console.log('first');
    next();
}, (req,res,next)=>{
    console.log('second');
    res.send("I'm second");
    next();
})
// O/P=> "first", "second", "I'm second"

// Listen at a port no.
app.listen(4000,()=>{
    console.log("Listening at a port no. 4000");
})    