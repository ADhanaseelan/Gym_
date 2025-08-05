import React from 'react';
import {  FaPlus, FaChartLine } from 'react-icons/fa';
import { FiHome } from "react-icons/fi";
import { TbUsers } from "react-icons/tb";
import { FiLogOut } from "react-icons/fi";
import { CgGym } from "react-icons/cg";


import { Link } from 'react-router-dom';

import '../styles/sidebar.css';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="profile-pic"></div>
        <div className="profile-name">Name</div>
      </div>
      <nav className="nav-section">
        <Link to="/" className="nav-item">
          <FiHome className="icon" /> Dashboard
        </Link>
        <Link to="/" className="nav-item">
          <FaPlus className="icon" /> New User
        </Link>
        <Link to="/" className="nav-item">
          <TbUsers className="icon" /> Member List
        </Link>
        <Link to="/" className="nav-item">
          <CgGym className="icon" /> Progress
        </Link>
        <Link to="/" className="nav-item">
          <FaChartLine className="icon" /> Diet Chart
        </Link>
        <Link to="/" className="nav-item">
          <FiLogOut className="icon" /> Log Out
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
