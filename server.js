const express = require('express');
const app = express();
const path = require('path');

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/index.html'));
});

app.listen(3001);
console.log("server is running at 3000 port");