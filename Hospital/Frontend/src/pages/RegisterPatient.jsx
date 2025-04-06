import React, { useState } from 'react';
import './RegisterPatient.css';

const RegisterPatient = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    gender: '',
    dob: '',
    bloodGroup: '',
    maritalStatus: '',
    phone: '',
    altPhone: '',
    email: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    emergencyName: '',
    emergencyRelation: '',
    emergencyPhone: '',
    conditions: '',
    allergies: '',
    medications: '',
    surgeries: '',
    insuranceProvider: '',
    policyNumber: '',
    insuranceValidity: '',
    department: '',
    doctor: '',
    visitReason: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5001/api/patients/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        alert('Patient Registered Successfully!');
        console.log(result);
      } else {
        alert('Failed to register patient.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong.');
    }
  };

  return (
    <div className="register-form-container">
      <h2>📝 Patient Registration Form</h2>
      <form onSubmit={handleSubmit} className="register-form">
        {/* 1. Personal Info */}
        <fieldset>
          <legend>Personal Information</legend>
          <input type="text" name="fullName" placeholder="Full Name" onChange={handleChange} required />
          <select name="gender" onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
          <input type="date" name="dob" onChange={handleChange} required />
          <select name="bloodGroup" onChange={handleChange} required>
            <option value="">Blood Group</option>
            <option>A+</option><option>A-</option>
            <option>B+</option><option>B-</option>
            <option>AB+</option><option>AB-</option>
            <option>O+</option><option>O-</option>
          </select>
          <select name="maritalStatus" onChange={handleChange}>
            <option value="">Marital Status</option>
            <option>Single</option>
            <option>Married</option>
            <option>Other</option>
          </select>
        </fieldset>

        {/* 2. Contact Info */}
        <fieldset>
          <legend>Contact Information</legend>
          <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} required />
          <input type="tel" name="altPhone" placeholder="Alternate Phone Number" onChange={handleChange} />
          <input type="email" name="email" placeholder="Email Address" onChange={handleChange} required />
          <textarea name="address" placeholder="Full Address" rows="2" onChange={handleChange} required />
          <input type="text" name="city" placeholder="City" onChange={handleChange} required />
          <input type="text" name="state" placeholder="State" onChange={handleChange} required />
          <input type="text" name="pincode" placeholder="Pincode" onChange={handleChange} required />
        </fieldset>

        {/* 3. Emergency Contact */}
        <fieldset>
          <legend>Emergency Contact</legend>
          <input type="text" name="emergencyName" placeholder="Contact Name" onChange={handleChange} required />
          <input type="text" name="emergencyRelation" placeholder="Relationship" onChange={handleChange} required />
          <input type="tel" name="emergencyPhone" placeholder="Phone Number" onChange={handleChange} required />
        </fieldset>

        {/* 4. Medical Info */}
        <fieldset>
          <legend>Medical Information</legend>
          <textarea name="conditions" placeholder="Existing Conditions (e.g. Diabetes)" rows="2" onChange={handleChange} />
          <textarea name="allergies" placeholder="Allergies (e.g. Penicillin)" rows="2" onChange={handleChange} />
          <textarea name="medications" placeholder="Current Medications" rows="2" onChange={handleChange} />
          <textarea name="surgeries" placeholder="Past Surgeries" rows="2" onChange={handleChange} />
        </fieldset>

        {/* 5. Insurance */}
        <fieldset>
          <legend>Insurance Details (if any)</legend>
          <input type="text" name="insuranceProvider" placeholder="Insurance Provider" onChange={handleChange} />
          <input type="text" name="policyNumber" placeholder="Policy Number" onChange={handleChange} />
          <input type="date" name="insuranceValidity" onChange={handleChange} />
        </fieldset>

        {/* 6. Visit Info */}
        <fieldset>
          <legend>Visit Information</legend>
          <select name="department" onChange={handleChange} required>
            <option value="">Consulting Department</option>
            <option>Cardiology</option>
            <option>General</option>
            <option>ENT</option>
            <option>Neurology</option>
            <option>Orthopedics</option>
          </select>
          <input type="text" name="doctor" placeholder="Preferred Doctor" onChange={handleChange} />
          <textarea name="visitReason" placeholder="Reason for Visit" rows="2" onChange={handleChange} required />
        </fieldset>

        <button type="submit">Register Patient ✅</button>
      </form>
    </div>
  );
};

export default RegisterPatient;
