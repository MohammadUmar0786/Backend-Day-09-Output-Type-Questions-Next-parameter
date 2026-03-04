// Import express and create server:
const express = require('express');
const app = express();

// Guess the output:
app.use('/user',(req,res)=>{
    // No res.send
});
// O/P=> client (postman) will request continuously again & again but no res. will be there at postman.

// listen at a port no.:
app.listen(3000,()=>{
    console.log("Listening at a port no. 3000")
})
