import React from 'react';
import '../styles/header.css';

const Header: React.FC = () => {
  return (
    <div className="header">
      <h1 className="system-title">Candidate Management System</h1>
      <div className="user-profile">
        <div className="user-circle"></div>
        <div className="user-info">
          <span className="user-role">Admin</span>
          <span className="user-name">User Name</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
