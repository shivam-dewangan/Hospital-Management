import Patient from '../models/Patient.js'; // ✅ Ensure this path is correct

// POST: Register a new patient
export const registerPatient = async (req, res) => {
  try {
    const newPatient = new Patient(req.body);
    await newPatient.save();
    res.status(201).json({ message: 'Patient registered successfully', patient: newPatient });
  } catch (error) {
    console.error('Error registering patient:', error);
    res.status(500).json({ message: 'Error registering patient', error: error.message });
  }
};

// GET: Get all patients
export const getAllPatients = async (req, res) => {
  try {
    const patients = await Patient.find();
    res.status(200).json(patients);
  } catch (error) {
    console.error('Error fetching patients:', error);
    res.status(500).json({ message: 'Error fetching patients', error: error.message });
  }
};
