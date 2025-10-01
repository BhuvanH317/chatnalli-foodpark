import express from 'express';
import { registerUser, loginUser, verifyEmail, getUserProfile } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/verify/:token', verifyEmail);
router.get('/profile', protect, getUserProfile);

export default router;