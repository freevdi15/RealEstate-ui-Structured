import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const Header: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="landing-header">
      <div className="container">
        <div className="logo-section">
          <img className="logo-image" src="/assets/images/logo.png" alt="logo" />
          <div className="brand-name">BeRealEstateAi</div>
        </div>

        <div className="auth-buttons">
          <Link to="/" className="btn btn-outline-small">Home</Link>
          {!user ? (
            <>
              <Link to="/login" className="btn btn-outline-small">Login</Link>
              <Link to="/register" className="btn btn-outline">Sign up</Link>
            </>
          ) : (
            <>
              <span className="user-greeting">Hi, {user.name}</span>
              <button
                className="btn btn-outline-small"
                onClick={() => {
                  logout();
                  navigate('/');
                }}
              >
                Logout
              </button>
              <Link to="/dashboard" className="btn btn-primary">Dashboard</Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
