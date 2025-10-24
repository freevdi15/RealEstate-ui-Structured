import React, { useState } from 'react';

interface Props {
  onSubmit: (email: string, password: string) => Promise<void>;
  loading?: boolean;
  error?: string | null;
}

const LoginForm: React.FC<Props> = ({ onSubmit, loading }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(email, password).catch(() => { /* handled by parent */ });
      }}
      className="modal-content"
    >
      <div className="modal-header">
        <h2>Login</h2>
      </div>

      <div className="form-group">
        <label>Email</label>
        <input className="form-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input className="form-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>

      <button className="btn btn-primary btn-block" type="submit" disabled={loading}>
        {loading ? 'Logging in…' : 'Login'}
      </button>
    </form>
  );
};

export default LoginForm;
