const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const verifyToken = require('./verifyToken');
const { registerValidation, loginValidation } = require('../validation');


// Login
router.post('/login', async (req, res) => {
    const { password, email } = req.body;

    // Validation error
    const { error } = loginValidation(req.body);
    if(error){
        return res.status(400).json({status:'400',message: error.details[0].message,formateError:true});
    }

    const user = await User.findOne({email});
    if(!user){
        return res.status(400).json({status:'400',message: 'Email is not found',emailError: true});
    }

    const validPassword = await bcrypt.compare(password,user.password);
    
    if(!validPassword){
        return res.status(400).json({status:'400',message: 'Invalid password',passwordError: true});
    }

    const token = jwt.sign({_id: user.id}, process.env.TOKEN_SECRET);
    res.header('auth-token',token).status(200).json({'auth-token':token,message:'Login successfully'});
});

//  Submit all user data
router.post('/register', async (req, res) => {
    const { name, password, email } = req.body;

    // Validation error
    const { error } = registerValidation(req.body);
    if(error){
        return res.status(400).json({status:'400',message: error.details[0].message,formateError:true});
    }
    
    // An exist email handle
    const existedUser = await User.findOne({email});
    if(existedUser){
        return res.status(400).json({status:'400',message:'Email already existed',mailExist:true});
    }

    // Hashed password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);


    // Create a new user
    const user = new User({
        name, password:hashedPassword, email
    });

    try{
        const savedUser = await user.save();
        res.json({uniqueId:savedUser._id,successMessage:'Registered Successfully'});
    }catch(err){
        res.status(400).json({message: err})
    }

});

// Get all user list
router.get('/', verifyToken,  async (req, res) => {
    
    try{
        const userList = await User.find({});
        res.json(userList);
    }catch(err){
        res.status(400).json({message: err})
    }

});

//  Get specific user data
router.get('/:userId', verifyToken, async (req, res) => {
    const { userId } = req.params;

    try{
        const specificUser = await User.findById(userId);
        res.json(specificUser);
    }catch(err){
        res.status(400).json({message: err})
    }

});

//  Update specific user data
router.patch('/:userId', verifyToken, async (req, res) => {
    const { userId } = req.params;
    const { name } = req.body;

    try{
        const updatedUser = await User.updateOne(
           {_id: userId}, 
           {$set: {name}}
        );
        res.json(updatedUser);
    }catch(err){
        res.status(400).json({message: err})
    }

});
//  Delete specific user data
router.delete('/:userId', async (req, res) => {
    const { userId } = req.params;

    try{
        const removedUserList = await User.deleteOne({_id:userId});
        res.json(removedUserList);
    }catch(err){
        res.status(400).json({message: err})
    }

});

module.exports = router;