import express from 'express';
import { register, login, resetPassword, returnAllUsers, getUsername } from '../controllers/authController.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/reset-password', resetPassword);
router.get('/getAllUsers', returnAllUsers);
router.get('/username', getUsername)

export default router;
