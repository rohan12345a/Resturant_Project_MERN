// controller/user.js

import bcrypt from 'bcryptjs'; // Add this line to import bcrypt
import User from '../models/userSchema.js';
import ErrorHandler from '../middlewares/error.js';
import jwt from 'jsonwebtoken';


export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return next(new ErrorHandler('Email is already registered', 400));
    }

    const newUser = new User({ username, email, password });
    await newUser.save();

    res.status(201).json({
      success: true,
      message: 'User registered successfully',
    });
  } catch (error) {
    next(error);
  }
};



export const login = async (req, res, next) => {
    const { email, password } = req.body;
    
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return next(new ErrorHandler('Invalid email or password', 401));
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return next(new ErrorHandler('Invalid email or password', 401));
      }
  
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: '1h', // Token expires in 1 hour
      });
  
      res.status(200).json({
        success: true,
        token,
      });
    } catch (error) {
      next(error);
    }
  };


  