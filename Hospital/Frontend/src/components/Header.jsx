import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenMenu(prev => (prev === menu ? null : menu));
  };

  return (
    <header className="header">
      <div className="logo">🏥 Hospital Management System</div>

      <nav className="nav-links">
        {/* Patient Dashboard */}
        <div className="dropdown">
          <button
            className="dropdown-toggle"
            onClick={() => toggleDropdown('patient')}
          >
            Patient Dashboard ▾
          </button>
          {openMenu === 'patient' && (
            <div className="dropdown-menu">
              <Link to="/" onClick={() => setOpenMenu(null)}>All Patients</Link>
              <Link to="/register-patient" onClick={() => setOpenMenu(null)}>Register Patient</Link>
            </div>
          )}
        </div>

        {/* Staff Dashboard */}
        <div className="dropdown">
          <button
            className="dropdown-toggle"
            onClick={() => toggleDropdown('staff')}
          >
            Staff Dashboard ▾
          </button>
          {openMenu === 'staff' && (
            <div className="dropdown-menu">
              <Link to="/all-staff" onClick={() => setOpenMenu(null)}>All Staff</Link>
              <Link to="/register-staff" onClick={() => setOpenMenu(null)}>Register Staff</Link>
            </div>
          )}
        </div>

        {/* Financial Dashboard */}
        <div className="dropdown">
          <button
            className="dropdown-toggle"
            onClick={() => toggleDropdown('financial')}
          >
            Financial Dashboard ▾
          </button>
          {openMenu === 'financial' && (
            <div className="dropdown-menu">
              <Link to="/financial" onClick={() => setOpenMenu(null)}>Overview</Link>
              
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
