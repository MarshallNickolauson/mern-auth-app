import express from 'express';
const router = express.Router();
import { protect } from '../middleware/authMiddleware.js';
import { authUser, getUserProfile, logoutUser, registerUser, updateUserProfile } from '../controllers/userController.js';

router.post('/auth', authUser);
router.post('/', registerUser);
router.post('/logout', logoutUser);
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);

export default router;