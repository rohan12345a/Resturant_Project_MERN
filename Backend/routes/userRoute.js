// routes/userRoute.js

import express from 'express';
import { signup, login } from '../controller/user.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);

export default router;
