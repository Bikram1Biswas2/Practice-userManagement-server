const express = require('express');
const cors = require('cors');
const app = express()
const port = process.env.PORT || 7000 

app.get('/',(req,res)=>{
    res.send('Port is running')
})

app.listen(port,()=>{
    console.log(`port is running on ${port}`);
})