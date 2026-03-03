// Guess the output:

// import express:
const express = require('express');

// create server:
const app = express();

// Guess the output:
// Route handler
app.use('/user', (req,res)=>{
    console.log("First");
    res.send("Hello Ji");
    console.log("Second");
    res.send("Mein mst hun"); // Internally error:- Cannot set headers after send to client
    // Means, cannot use res.send 2 times, but sometime we don't get error message.
})

// listen at a port no.:
app.listen(3000,()=>{
    console.log("Listening at a port no. 3000")
})

