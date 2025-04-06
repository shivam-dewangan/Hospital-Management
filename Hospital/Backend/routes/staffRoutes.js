// routes/staffRoutes.js
import express from 'express';
import { registerStaff, getAllStaff } from '../controllers/staffController.js';

const router = express.Router();

router.post('/register', registerStaff);  // POST
router.get('/all', getAllStaff);          // GET

export default router;
