const express = require('express')
const app = express()

port = 3000

app.listen(port, ()=> {
    console.log(`Running on port ${port}`)
})

app.get('/',(req,res)=>{
    console.log("request received")
    res.send("hello")
})