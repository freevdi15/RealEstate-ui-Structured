import React, { useState } from 'react';

interface Props {
  onSubmit: (name: string, email: string, password: string) => Promise<void>;
  loading?: boolean;
}

const RegisterForm: React.FC<Props> = ({ onSubmit, loading }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(name, email, password).catch(() => {});
      }}
      className="modal-content"
    >
      <div className="modal-header">
        <h2>Create account</h2>
      </div>

      <div className="form-group">
        <label>Name</label>
        <input className="form-input" value={name} onChange={(e) => setName(e.target.value)} required />
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
        {loading ? 'Creating…' : 'Create account'}
      </button>
    </form>
  );
};

export default RegisterForm;
