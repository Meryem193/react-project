import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import '../styles/dashbord.css';
import logo from '../assets/logooo.png';

const Sidebar = () => {
  const location = useLocation();
  const menuItems = [
    { name: 'Tableau de bord', path: '/', emoji: '📊' },
    { name: 'Inscriptions', path: '/inscriptions', emoji: '📝' },
    { name: 'Étudiants', path: '/etudiants', emoji: '🎓' },
    { name: 'Professeurs', path: '/professeurs', emoji: '👩‍🏫' },
    { name: 'Départements', path: '/departements', emoji: '🏛️' },
    { name: 'Cours', path: '/cours', emoji: '📚' },
    { name: 'Emplois du temps', path: '/emplois', emoji: '📅' },
    { name: 'Examens', path: '/examens', emoji: '🧾' },
    { name: 'Rapports', path: '/rapports', emoji: '📈' },
    { name: 'Paramètres', path: '/parametres', emoji: '⚙️' },
  ];

  return (
    <nav className="sidebar">
      <ul className="sidebar-menu">
        {menuItems.map((item) => (
          <li
            key={item.name}
            className={`menu-item${location.pathname === item.path ? ' active' : ''}`}
          >
            <Link to={item.path}>
              <span role="img" aria-label={item.name}>
                {item.emoji}
              </span>{' '}
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const Inscriptions = () => {
  return (
    <div>
      <h1>📝 Inscriptions des Étudiants</h1>
      <div className="stat-card">
        <div className="stat-title">Total des inscriptions</div>
        <div className="stat-value">1,248</div>
        <div className="stat-footer">
          <div className="stat-change positive">+12.5%</div>
          <div className="stat-period">depuis l'année dernière</div>
        </div>
      </div>
    </div>
  );
};

const Dashbord = () => {
  return (
    <>
      <header>
        <div className="container header-content">
          <div className="logo">
            <img src={logo} alt="Logo FSAC" className="logo-img" />
          </div>
          <div className="user-info">
            <span>Admin FSAC 👩‍💼</span>
            <div className="user-avatar">A</div>
          </div>
        </div>
      </header>

      <div className="container dashboard">
        <Sidebar />
        <main className="content">
          <Routes>
            <Route
              path="/"
              element={
                <div className="dashboard-welcome">
                  <h2>📊 Tableau de bord - Bienvenue</h2>
                  <div className="cards-container">
                    {[
                      { emoji: '📝', title: 'Inscriptions', value: '120 nouvelles' },
                      { emoji: '🎓', title: 'Étudiants', value: '3400 inscrits' },
                      { emoji: '👩‍🏫', title: 'Professeurs', value: '150 actifs' },
                      { emoji: '📚', title: 'Cours', value: '87 disponibles' },
                    ].map((card) => (
                      <div key={card.title} className="card">
                        <h3>{card.emoji} {card.title}</h3>
                        <p>{card.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              }
            />
            <Route path="/inscriptions" element={<Inscriptions />} />
            <Route path="/etudiants" element={<h2>🎓 Étudiants</h2>} />
            <Route path="/professeurs" element={<h2>👩‍🏫 Professeurs</h2>} />
            <Route path="/departements" element={<h2>🏛️ Départements</h2>} />
            <Route path="/cours" element={<h2>📚 Cours</h2>} />
            <Route path="/emplois" element={<h2>📅 Emplois du temps</h2>} />
            <Route path="/examens" element={<h2>🧾 Examens</h2>} />
            <Route path="/rapports" element={<h2>📈 Rapports</h2>} />
            <Route path="/parametres" element={<h2>⚙️ Paramètres</h2>} />
          </Routes>
        </main>
      </div>
    </>
  );
};

export default Dashbord;
