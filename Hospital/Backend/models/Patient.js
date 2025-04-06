import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  gender: { type: String, required: true },
  dob: { type: Date, required: true },

  bloodGroup: { type: String },
  maritalStatus: { type: String },
  phone: { type: String, required: true },
  altPhone: { type: String },
  email: { type: String, required: true },

  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  pincode: { type: String, required: true },

  emergencyName: { type: String, required: true },
  emergencyRelation: { type: String, required: true },
  emergencyPhone: { type: String, required: true },

  conditions: { type: String },
  allergies: { type: String },
  medications: { type: String },
  surgeries: { type: String },

  insuranceProvider: { type: String },
  policyNumber: { type: String },
  insuranceValidity: { type: Date },

  department: { type: String, required: true },
  doctor: { type: String },
  visitReason: { type: String, required: true }
}, { timestamps: true });

const Patient = mongoose.model('Patient', patientSchema);
export default Patient;
