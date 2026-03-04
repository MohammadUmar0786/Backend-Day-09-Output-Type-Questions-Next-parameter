// Create server using express
const express = require('express');
const app = express();

// Guess the output
app.use('/user',(req,res)=>{
    console.log('first');

    // 2nd callback fn
}, (req,res)=>{
    console.log("Second");
}) // O/P=> "first", next fn will not be executed here Need "next" parameter)

// Listen at a port no.
app.listen(3000,(req,res)=>{
    console.log("Listening at a port no. 3000");
})