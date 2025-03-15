import express from 'express';
import { register, login, resetPassword, returnAllUsers, getUserInfo} from '../controllers/authController.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/reset-password', resetPassword);
router.get('/getAllUsers', returnAllUsers);
router.get('/info', getUserInfo)

export default router;
