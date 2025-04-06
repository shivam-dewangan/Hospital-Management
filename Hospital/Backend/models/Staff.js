import mongoose from 'mongoose';

const staffSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  gender: { type: String, required: true },
  dob: { type: Date, required: true },
  phone: { type: String, required: true },
  altPhone: { type: String },

  email: { type: String, required: true },

  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  pincode: { type: String, required: true },

  joiningDate: { type: Date, required: true },
  department: { type: String, required: true },
  role: { type: String, required: true },
  qualification: { type: String, required: true },
  experience: { type: String },

  emergencyName: { type: String, required: true },
  emergencyRelation: { type: String, required: true },
  emergencyPhone: { type: String, required: true },

  aadhar: { type: String },
  pan: { type: String },
  bankName: { type: String },
  accountNumber: { type: String },
  ifsc: { type: String }
}, { timestamps: true });

const Staff = mongoose.model('Staff', staffSchema);
export default Staff;
