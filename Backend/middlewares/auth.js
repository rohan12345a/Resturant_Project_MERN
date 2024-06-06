// middlewares/auth.js

import jwt from 'jsonwebtoken';
import User from '../models/userSchema.js';
import ErrorHandler from './error.js';

export const protectRoute = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    // Getting token from Authorization header
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return next(new ErrorHandler('Not authorized to access this route', 401));
  }

  try {
    // Verifying token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Checking if user still exists
    const user = await User.findById(decoded.userId);
    if (!user) {
      return next(new ErrorHandler('User not found', 404));
    }

    req.user = user;
    next();
  } catch (error) {
    return next(new ErrorHandler('Not authorized to access this route', 401));
  }
};
