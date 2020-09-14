const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users_controller');

const paspport = require('passport');
const passport = require('passport');


router.get('/profile',passport.checkAuthentication ,usersController.profile);

router.get('/sign-up', usersController.signUp);
router.get('/sign-in', usersController.signIn);
router.get('/sign-out',usersController.destroySession);

router.post('/create', usersController.create);
//use passport as a middleware authentication
router.post('/create-session',paspport.authenticate(
    'local',{
        failureRedirect:'/users/sign-in'
    },
) ,usersController.createSession);


module.exports = router;