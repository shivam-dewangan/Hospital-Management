import Staff from '../models/Staff.js'; // ✅ Make sure path and filename are correct

// POST: Register new staff
export const registerStaff = async (req, res) => {
  try {
    const newStaff = new Staff(req.body);
    await newStaff.save();
    res.status(201).json({ message: 'Staff registered successfully', staff: newStaff });
  } catch (error) {
    console.error('Error registering staff:', error);
    res.status(500).json({ message: 'Error registering staff', error: error.message });
  }
};

// GET: Get all staff
export const getAllStaff = async (req, res) => {
  try {
    const staffList = await Staff.find();
    res.status(200).json(staffList);
  } catch (error) {
    console.error('Error fetching staff:', error);
    res.status(500).json({ message: 'Error fetching staff', error: error.message });
  }
};
