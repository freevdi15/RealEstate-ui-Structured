import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { usePropertyContext } from '../contexts/PropertyContext';
import PropertyList from '../components/property/PropertyList';

const DashboardPage: React.FC = () => {
  const { properties } = usePropertyContext();

  return (
    <>
      <Header />
      <div className="navbar" style={{ marginBottom: 16 }}>
        <div className="navbar-container container">
          <div className="navbar-brand">
            <img src="/assets/images/logo.png" className="navbar-logo" alt="logo" />
            <div className="navbar-title">Dashboard</div>
          </div>
          <div>Overview</div>
        </div>
      </div>

      <div className="main-container">
        <aside className="sidebar">
          <ul className="nav-menu">
            <li className="nav-item active"><div className="nav-icon">🏠</div><div className="nav-text">Listings</div></li>
            <li className="nav-item"><div className="nav-icon">📊</div><div className="nav-text">Reports</div></li>
          </ul>
        </aside>

        <div className="content">
          <div className="container">
            <h2 className="section-title">Your Listings</h2>
            <PropertyList properties={properties} />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DashboardPage;
