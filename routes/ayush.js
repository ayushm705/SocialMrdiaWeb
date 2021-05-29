
const express=require('express');
const router=express.Router();

const ayushController=require('../controllers/ayush_controller');
router.get('/ayush',ayushController.ayush);
module.exports=router;