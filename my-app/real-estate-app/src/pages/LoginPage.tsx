import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import LoginForm from '../components/auth/LoginForm';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (e: any) {
      setError(e?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className="container" style={{ padding: 32 }}>
        <div style={{ maxWidth: 420, margin: '0 auto' }}>
          <LoginForm onSubmit={handleLogin} loading={loading} />
          {error && <div style={{ color: '#f77', marginTop: 12 }}>{error}</div>}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
