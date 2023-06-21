const express=require('express');

const router=express.Router();

// import all the userController functions
const {handleCreateUser,handleGetUserById}=require('../controllers/userController');

// route to create a new User
router.post('/users', handleCreateUser);

// route to get a user by id
router.get('/users/:id', handleGetUserById)

module.exports=router;