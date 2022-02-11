import express from 'express';
const router =  express.Router();
import {signupValid, valid} from '../validation';
import {authController} from '../controller';

/**
 * 
 */
router.post('/signup', signupValid.signupValidation(), valid.validate, authController.addUser);
/**
 * 
 */
router.post('/login', authController.userLogin)

module.exports = router