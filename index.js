const express=require('express');
var bodyParser = require('body-parser')
const app=express();

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
const route=require('./route/router');
app.use('/api',route)
app.listen(8000,()=>{
    console.log("server connected....")
})