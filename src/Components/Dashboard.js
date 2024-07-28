import React from 'react';
import './Dashboard.css';
import Header from '../Layouts/Header';
import Sidebar from '../Layouts/Sidebar';
import MainContent from '../Layouts/MainContent';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Header />
      <div className="dashboard-body">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
};

export default Dashboard;
