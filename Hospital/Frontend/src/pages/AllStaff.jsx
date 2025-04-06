import React, { useEffect, useState } from 'react';
import './AllStaff.css';

const StaffDashboard = () => {
  const [staffList, setStaffList] = useState([]);
  const [selectedStaff, setSelectedStaff] = useState(null);

  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/staff/all');
        const data = await response.json();
        setStaffList(data);
      } catch (error) {
        console.error('Error fetching staff:', error);
      }
    };

    fetchStaff();
  }, []);

  return (
    <div className="a4-dashboard">
      <h1>🩺 Staff Directory</h1>
      <div className="a4-card-grid">
        {staffList.map((staff, index) => (
          <div className="a4-card" key={staff._id || index}>
            <div className="staff-image">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="Profile"
              />
            </div>
            <div className="staff-info">
              <p><strong>Name:</strong> {staff.fullName}</p>
              <p><strong>Gender:</strong> {staff.gender}</p>
              <p><strong>Department:</strong> {staff.department}</p>
              <button onClick={() => setSelectedStaff(staff)}>
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedStaff && (
        <div className="modal-overlay" onClick={() => setSelectedStaff(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h2>{selectedStaff.fullName}</h2>
            <p><strong>DOB:</strong> {selectedStaff.dob?.slice(0, 10)}</p>
            <p><strong>Phone:</strong> {selectedStaff.phone}</p>
            <p><strong>Alt Phone:</strong> {selectedStaff.altPhone}</p>
            <p><strong>Email:</strong> {selectedStaff.email}</p>
            <p><strong>Address:</strong> {selectedStaff.address}, {selectedStaff.city}, {selectedStaff.state} - {selectedStaff.pincode}</p>
            <p><strong>Joining Date:</strong> {selectedStaff.joiningDate?.slice(0, 10)}</p>
            <p><strong>Role:</strong> {selectedStaff.role}</p>
            <p><strong>Qualification:</strong> {selectedStaff.qualification}</p>
            <p><strong>Experience:</strong> {selectedStaff.experience} yrs</p>
            <p><strong>Emergency Contact:</strong> {selectedStaff.emergencyName} ({selectedStaff.emergencyRelation}) - {selectedStaff.emergencyPhone}</p>
            <p><strong>Aadhar:</strong> {selectedStaff.aadhar}</p>
            <p><strong>PAN:</strong> {selectedStaff.pan}</p>
            <p><strong>Bank:</strong> {selectedStaff.bankName}, A/C: {selectedStaff.accountNumber}, IFSC: {selectedStaff.ifsc}</p>
            <button onClick={() => setSelectedStaff(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StaffDashboard;
