import React, { useState } from 'react';
import './RegisterStaff.css';

const RegisterStaff = () => {
  const [staffData, setStaffData] = useState({
    fullName: '',
    gender: '',
    dob: '',
    phone: '',
    altPhone: '',
    email: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    joiningDate: '',
    department: '',
    role: '',
    qualification: '',
    experience: '',
    emergencyName: '',
    emergencyRelation: '',
    emergencyPhone: '',
    aadhar: '',
    pan: '',
    bankName: '',
    accountNumber: '',
    ifsc: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStaffData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://hospital-management-uw61.onrender.com/api/staff/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(staffData),
      });

      if (response.ok) {
        alert('🎉 Staff Registered Successfully!');
        setStaffData({
          fullName: '',
          gender: '',
          dob: '',
          phone: '',
          altPhone: '',
          email: '',
          address: '',
          city: '',
          state: '',
          pincode: '',
          joiningDate: '',
          department: '',
          role: '',
          qualification: '',
          experience: '',
          emergencyName: '',
          emergencyRelation: '',
          emergencyPhone: '',
          aadhar: '',
          pan: '',
          bankName: '',
          accountNumber: '',
          ifsc: '',
        });
      } else {
        const err = await response.json();
        alert(`⚠️ Error: ${err.message || 'Something went wrong'}`);
      }
    } catch (error) {
      console.error('Registration Error:', error);
      alert('🚨 Server error. Please try again later.');
    }
  };

  return (
    <div className="register-staff-container">
      <h2>👨‍⚕️ Staff Registration Form</h2>
      <form onSubmit={handleSubmit} className="register-staff-form">

        {/* 1. Personal Info */}
        <fieldset>
          <legend>Personal Information</legend>
          <input type="text" name="fullName" placeholder="Full Name" value={staffData.fullName} onChange={handleChange} required />
          <select name="gender" value={staffData.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
          <input type="date" name="dob" value={staffData.dob} onChange={handleChange} required />
          <input type="tel" name="phone" placeholder="Phone Number" value={staffData.phone} onChange={handleChange} required />
          <input type="tel" name="altPhone" placeholder="Alternate Phone" value={staffData.altPhone} onChange={handleChange} />
          <input type="email" name="email" placeholder="Email Address" value={staffData.email} onChange={handleChange} required />
        </fieldset>

        {/* 2. Address Info */}
        <fieldset>
          <legend>Address</legend>
          <textarea name="address" placeholder="Full Address" rows="2" value={staffData.address} onChange={handleChange} required />
          <input type="text" name="city" placeholder="City" value={staffData.city} onChange={handleChange} required />
          <input type="text" name="state" placeholder="State" value={staffData.state} onChange={handleChange} required />
          <input type="text" name="pincode" placeholder="Pincode" value={staffData.pincode} onChange={handleChange} required />
        </fieldset>

        {/* 3. Work Info */}
        <fieldset>
          <legend>Work Information</legend>
          <input type="date" name="joiningDate" value={staffData.joiningDate} onChange={handleChange} required />
          <select name="department" value={staffData.department} onChange={handleChange} required>
            <option value="">Department</option>
            <option>Cardiology</option>
            <option>Neurology</option>
            <option>Orthopedics</option>
            <option>Pharmacy</option>
            <option>General</option>
          </select>
          <input type="text" name="role" placeholder="Role / Designation" value={staffData.role} onChange={handleChange} required />
          <input type="text" name="qualification" placeholder="Highest Qualification" value={staffData.qualification} onChange={handleChange} required />
          <input type="text" name="experience" placeholder="Years of Experience" value={staffData.experience} onChange={handleChange} />
        </fieldset>

        {/* 4. Emergency Contact */}
        <fieldset>
          <legend>Emergency Contact</legend>
          <input type="text" name="emergencyName" placeholder="Contact Name" value={staffData.emergencyName} onChange={handleChange} required />
          <input type="text" name="emergencyRelation" placeholder="Relationship" value={staffData.emergencyRelation} onChange={handleChange} required />
          <input type="tel" name="emergencyPhone" placeholder="Phone Number" value={staffData.emergencyPhone} onChange={handleChange} required />
        </fieldset>

        {/* 5. ID & Bank */}
        <fieldset>
          <legend>ID & Bank Details</legend>
          <input type="text" name="aadhar" placeholder="Aadhar Number" value={staffData.aadhar} onChange={handleChange} />
          <input type="text" name="pan" placeholder="PAN Number" value={staffData.pan} onChange={handleChange} />
          <input type="text" name="bankName" placeholder="Bank Name" value={staffData.bankName} onChange={handleChange} />
          <input type="text" name="accountNumber" placeholder="Account Number" value={staffData.accountNumber} onChange={handleChange} />
          <input type="text" name="ifsc" placeholder="IFSC Code" value={staffData.ifsc} onChange={handleChange} />
        </fieldset>

        <button type="submit">Register Staff ✅</button>
      </form>
    </div>
  );
};

export default RegisterStaff;
