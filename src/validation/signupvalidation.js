import { body } from "express-validator";
import { userModel } from "../models";

export const signupValidation = () => {
    return [
        body('fullName')
        .not().notEmpty()
        .withMessage('Please enter full name')
        .isAlpha('en-US', {ignore: ' '}).withMessage('full name should be in alphabetical char'),
        body('email')
        .not().notEmpty()
        .withMessage('Please enter email')
        .isEmail().withMessage('Email should be email type')
        .custom(value => {
            return userModel.findOne({email: value}).then(data => {
                if (data) {
                    return Promise.reject({message: 'Email is already exist'});
                }
            }) 
        }),
        body('password')
        .not()
        .notEmpty()
        .withMessage("Please enter password")
        .isLength({min: 8})
        .withMessage('Password should be at least 8 char'),
    ]
}
