import React, { useState } from 'react';
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import '../styles/dashbord.css';
import logo from '../assets/logooo.png';

// Composant Sidebar
const Sidebar = () => {
  const location = useLocation();
  const menuItems = [
    { name: 'Tableau de bord', dashbord: '/' },
    { name: 'Inscriptions', dashbord: '/inscriptions' },
    { name: 'Étudiants', dashbord: '/etudiants' },
    { name: 'Professeurs', dashbord: '/professeurs' },
    { name: 'Départements', dashbord: '/departements' },
    { name: 'Cours', dashbord: '/cours' },
    { name: 'Emplois du temps', dashbord: '/emplois' },
    { name: 'Examens', dashbord: '/examens' },
    { name: 'Rapports', dashbord: '/rapports' },
    { name: 'Paramètres', dashbord: '/parametres' },
  ];

  return (
    <div className="sidebar">
      <ul className="sidebar-menu">
        {menuItems.map((item) => (
          <li
            key={item.name}
            className={`menu-item${location.pathname === item.dashbord ? ' active' : ''}`}
          >
            <Link to={item.dashbord}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Composant Inscriptions
const Inscriptions = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filtreFiliere, setFiltreFiliere] = useState('');
  const [filtreAnnee, setFiltreAnnee] = useState('');
  const [filtreStatut, setFiltreStatut] = useState('');
  const navigate = useNavigate();

  const etudiants = [
    {
      id: 'FSAC2025001',
      nom: 'Ahmed Bennani',
      cne: 'D138256794',
      email: 'ahmed.bennani@etudiant.fsac.ac.ma',
      filiere: 'Informatique',
      annee: '1ère année',
      dateInscription: '22/05/2025',
      statut: 'Inscription complète',
      statutClass: 'indicator-active',
    },
    {
      id: 'FSAC2025003',
      nom: 'Karim Benjelloun',
      cne: 'G139468235',
      email: 'karim.benjelloun@etudiant.fsac.ac.ma',
      filiere: 'Informatique',
      annee: '1ère année',
      dateInscription: '18/05/2025',
      statut: 'Inscription complète',
      statutClass: 'indicator-active',
    },
    {
      id: 'FSAC2025005',
      nom: 'Youness Tazi',
      cne: 'M130457821',
      email: 'youness.tazi@etudiant.fsac.ac.ma',
      filiere: 'Informatique',
      annee: '1ère année',
      dateInscription: '18/05/2025',
      statut: 'Inscription complète',
      statutClass: 'indicator-active',
    },
    {
      id: 'FSAC2025004',
      nom: 'Fatima Zahra El Mansouri',
      cne: 'K127842156',
      email: 'fatima.elmansouri@etudiant.fsac.ac.ma',
      filiere: 'Informatique',
      annee: '1ère année',
      dateInscription: '22/05/2025',
      statut: 'Inscription complète',
      statutClass: 'indicator-active',
    },
    {
      id: 'FSAC2025002',
      nom: 'Salma Alaoui',
      cne: 'P124579358',
      email: 'salma.alaoui@etudiant.fsac.ac.ma',
      filiere: 'Informatique',
      annee: '1ère année',
      dateInscription: '20/05/2025',
      statut: 'Inscription complète',
      statutClass: 'indicator-active',
    },
  ];

  const filteredEtudiants = etudiants.filter((e) => {
    const matchSearch =
      e.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
      e.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      e.cne.toLowerCase().includes(searchTerm.toLowerCase()) ||
      e.email.toLowerCase().includes(searchTerm.toLowerCase());

    const matchFiliere = filtreFiliere ? e.filiere.toLowerCase() === filtreFiliere.toLowerCase() : true;
    const matchAnnee = filtreAnnee ? e.annee === filtreAnnee : true;
    const matchStatut = filtreStatut ? e.statut.toLowerCase().includes(filtreStatut.toLowerCase()) : true;

    return matchSearch && matchFiliere && matchAnnee && matchStatut;
  });

  return (
    <>
      <h1>Inscriptions des Étudiants</h1>

      <div className="stats-container">
        <div className="stat-card">
          <div className="stat-title">Total des inscriptions</div>
          <div className="stat-value">1,248</div>
          <div className="stat-footer">
            <div className="stat-change positive">+12.5%</div>
            <div className="stat-period">depuis l'année dernière</div>
          </div>
        </div>
      </div>

      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Rechercher par nom, ID, CNE, email..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="search-btn">Rechercher</button>
      </div>

      <div className="filters">
        <select
          className="filter-select"
          value={filtreFiliere}
          onChange={(e) => setFiltreFiliere(e.target.value)}
        >
          <option value="">Filière (Toutes)</option>
          <option value="Informatique">Informatique</option>
          <option value="Gestion">Gestion</option>
          <option value="Économie">Économie</option>
          <option value="Marketing">Marketing</option>
        </select>

        <select
          className="filter-select"
          value={filtreAnnee}
          onChange={(e) => setFiltreAnnee(e.target.value)}
        >
          <option value="">Année (Toutes)</option>
          <option value="1ère année">1ère année</option>
          <option value="2ème année">2ème année</option>
          <option value="3ème année">3ème année</option>
          <option value="4ème année">4ème année</option>
        </select>

        <select
          className="filter-select"
          value={filtreStatut}
          onChange={(e) => setFiltreStatut(e.target.value)}
        >
          <option value="">Statut (Tous)</option>
          <option value="inscription complète">Inscription complète</option>
          <option value="en attente">En attente</option>
          <option value="inactif">Inactif</option>
        </select>
      </div>

      <div className="data-card">
        <div className="card-header">
          <div className="card-title">Liste des étudiants inscrits</div>
          <div className="card-actions">
            <button className="btn btn-light">Exporter</button>
            <button className="btn btn-primary">+ Nouvelle inscription</button>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nom complet</th>
              <th>CNE</th>
              <th>E-mail</th>
              <th>Filière</th>
              <th>Année</th>
              <th>Date d'inscription</th>
              <th>Statut</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredEtudiants.length > 0 ? (
              filteredEtudiants.map((e) => (
                <tr key={e.id}>
                  <td>{e.id}</td>
                  <td>{e.nom}</td>
                  <td>{e.cne}</td>
                  <td>{e.email}</td>
                  <td>{e.filiere}</td>
                  <td>{e.annee}</td>
                  <td>{e.dateInscription}</td>
                  <td>
                    <div className="status-cell">
                      <div className={`status-indicator ${e.statutClass}`}></div>
                      <span>{e.statut}</span>
                    </div>
                  </td>
                  <td>
                    <button className="btn btn-primary" style={{ backgroundColor: '#10b981' }}>
                      Valider
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" style={{ textAlign: 'center' }}>
                  Aucun étudiant trouvé.
                </td>
              </tr>
            )}
          </tbody>
        </table>

        <div className="pagination">
          <div className="page-item">&lt;</div>
          <div className="page-item active">1</div>
          <div className="page-item">2</div>
          <div className="page-item">3</div>
          <div className="page-item">4</div>
          <div className="page-item">5</div>
          <div className="page-item">&gt;</div>
        </div>
      </div>
    </>
  );
};

// Composant principal Dashbord
const Dashbord = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <img src={logo} alt="Logo FSAC" className="logo-img" />
            </div>
            <div className="user-info">
              <span>Admin FSAC</span>
              <div className="user-avatar">A</div>
            </div>
          </div>
        </div>
      </header>

      <div className="container">
        <div className="dashboard">
          <Sidebar />
          <div className="content">
            <Routes>
              <Route
                path="/"
                element={
                  <div className="dashboard-welcome">
                    <h2>Tableau de bord - Bienvenue</h2>
                    <div className="cards-container">
                      <div className="card">
                        <h3>Inscriptions</h3>
                        <p>120 nouvelles</p>
                      </div>
                      <div className="card">
                        <h3>Étudiants</h3>
                        <p>3400 inscrits</p>
                      </div>
                      <div className="card">
                        <h3>Professeurs</h3>
                        <p>150 actifs</p>
                      </div>
                      <div className="card">
                        <h3>Cours</h3>
                        <p>87 disponibles</p>
                      </div>
                    </div>
                  </div>
                }
              />
              <Route path="/inscriptions" element={<Inscriptions />} />
              <Route path="/etudiants" element={<h2>Étudiants</h2>} />
              <Route path="/professeurs" element={<h2>Professeurs</h2>} />
              <Route path="/departements" element={<h2>Départements</h2>} />
              <Route path="/cours" element={<h2>Cours</h2>} />
              <Route path="/emplois" element={<h2>Emplois du temps</h2>} />
              <Route path="/examens" element={<h2>Examens</h2>} />
              <Route path="/rapports" element={<h2>Rapports</h2>} />
              <Route path="/parametres" element={<h2>Paramètres</h2>} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashbord;
