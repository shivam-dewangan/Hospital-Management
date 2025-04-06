import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AllPatient.css';

const PatientList = () => {
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5001/api/patients/all')
      .then(res => setPatients(res.data))
      .catch(err => console.error('Error fetching patients:', err));
  }, []);

  return (
    <div className="patient-list-container">
      <h2 className="page-title">Patient Records</h2>

      <div className="card-grid">
        {patients.map(patient => (
          <div className="patient-card" key={patient._id}>
            <div className="card-header">
              <img src="https://t3.ftcdn.net/jpg/04/97/68/08/360_F_497680856_nWYZ4OrUdRPAhcPYgaYDxKGV1jHqLjZL.jpg" alt="profile" className="profile-icon" />
              <div className="header-text">
                <h3>{patient.fullName}</h3>
                <p><strong>Condition:</strong> {patient.conditions || 'N/A'}</p>
                <p><strong>Department:</strong> {patient.department}</p>
              </div>
            </div>
            <button className="read-more-btn" onClick={() => setSelectedPatient(patient)}>Read More</button>
          </div>
        ))}
      </div>

      {selectedPatient && (
        <div className="modal-overlay" onClick={() => setSelectedPatient(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedPatient.fullName}</h2>
            <div className="modal-details">
              <div className="detail-col">
                <p><strong>Gender:</strong> {selectedPatient.gender}</p>
                <p><strong>DOB:</strong> {new Date(selectedPatient.dob).toLocaleDateString()}</p>
                <p><strong>Email:</strong> {selectedPatient.email}</p>
                <p><strong>Phone:</strong> {selectedPatient.phone}</p>
                <p><strong>Alt Phone:</strong> {selectedPatient.altPhone || 'N/A'}</p>
                <p><strong>Address:</strong> {selectedPatient.address}, {selectedPatient.city}, {selectedPatient.state} - {selectedPatient.pincode}</p>
              </div>
              <div className="detail-col">
                <p><strong>Emergency Contact:</strong> {selectedPatient.emergencyName} ({selectedPatient.emergencyRelation}) - {selectedPatient.emergencyPhone}</p>
                <p><strong>Conditions:</strong> {selectedPatient.conditions || 'N/A'}</p>
                <p><strong>Allergies:</strong> {selectedPatient.allergies || 'N/A'}</p>
                <p><strong>Medications:</strong> {selectedPatient.medications || 'N/A'}</p>
                <p><strong>Surgeries:</strong> {selectedPatient.surgeries || 'N/A'}</p>
                <p><strong>Department:</strong> {selectedPatient.department}</p>
                <p><strong>Doctor:</strong> {selectedPatient.doctor || 'N/A'}</p>
                <p><strong>Visit Reason:</strong> {selectedPatient.visitReason}</p>
                <p><strong>Insurance Provider:</strong> {selectedPatient.insuranceProvider || 'N/A'}</p>
                <p><strong>Policy Number:</strong> {selectedPatient.policyNumber || 'N/A'}</p>
                <p><strong>Insurance Validity:</strong> {selectedPatient.insuranceValidity ? new Date(selectedPatient.insuranceValidity).toLocaleDateString() : 'N/A'}</p>
              </div>
            </div>
            <button className="close-btn" onClick={() => setSelectedPatient(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PatientList;
