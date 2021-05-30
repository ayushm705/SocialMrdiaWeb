const express=require('express');
const router =express.Router();
const homeController=require('../controllers/home_controllers');
const { route } = require('./users');
console.log("Router is called");

router.get('/',homeController.home); 

router.use('/users',require('./users'));

module.exports=router;