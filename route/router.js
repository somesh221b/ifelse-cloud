const express=require('express');
const router=express.Router();

const {communicationFun}=require('../controller/communication')

router.post('/earth-mars-comm/:message',communicationFun);

module.exports=router;