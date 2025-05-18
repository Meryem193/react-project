import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Connexion.css';
import logoFsac from '../assets/logooo.png';

function Connexion() {
  const [role, setRole] = useState('ETUDIANT');
  const [emailOrId, setEmailOrId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ role, emailOrId, password });

    // Redirection selon le rôle
    if (role === 'ADMINISTRATEUR') {
      navigate('/dashbord');
    } else {
      navigate('/accueil');
    }
  };

  return (
    <div className="app-container">
      <img
        src={logoFsac}
        alt="Logo FSAC"
        className="logo"
      />
      <h2 className="page-title">INSCRIPTION FSAC</h2>

      <div className="form-container">
        <div className="role-tabs">
          <span
            className={`role-text ${role === 'ADMINISTRATEUR' ? 'active' : ''}`}
            onClick={() => setRole('ADMINISTRATEUR')}
          >
            ADMINISTRATEUR
          </span>
          <span
            className={`role-text ${role === 'ETUDIANT' ? 'active' : ''}`}
            onClick={() => setRole('ETUDIANT')}
          >
            ÉTUDIANT
          </span>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="emailOrId">
              {role === 'ADMINISTRATEUR' ? 'IDENTIFIANT' : 'E-MAIL'}
            </label>
            <input
              type={role === 'ADMINISTRATEUR' ? 'text' : 'email'}
              id="emailOrId"
              value={emailOrId}
              onChange={(e) => setEmailOrId(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">MOT DE PASSE</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-btn">
            SE CONNECTER
          </button>
        </form>
      </div>
    </div>
  );
}

export default Connexion;
