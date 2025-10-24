import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import RegisterForm from '../components/auth/RegisterForm';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const RegisterPage: React.FC = () => {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const handleRegister = async (name: string, email: string, password: string) => {
    setLoading(true);
    setErr(null);
    try {
      await register(name, email, password);
      navigate('/dashboard');
    } catch (e: any) {
      setErr(e?.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className="container" style={{ padding: 32 }}>
        <div style={{ maxWidth: 420, margin: '0 auto' }}>
          <RegisterForm onSubmit={handleRegister} loading={loading} />
          {err && <div style={{ color: '#f77', marginTop: 12 }}>{err}</div>}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RegisterPage;
