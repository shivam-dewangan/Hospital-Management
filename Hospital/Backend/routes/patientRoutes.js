import express from 'express';
import { registerPatient, getAllPatients } from '../controllers/patientController.js'; // ✅ fixed "controlllers"

const router = express.Router();

router.post('/register', registerPatient);  // POST
router.get('/all', getAllPatients);         // GET

export default router;
