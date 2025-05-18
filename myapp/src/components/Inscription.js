import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/dashbord.css';

const Inscriptions = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filtreFiliere, setFiltreFiliere] = useState('');
  const [filtreAnnee, setFiltreAnnee] = useState('');
  const [filtreStatut, setFiltreStatut] = useState(''); // <-- vide par défaut
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
    // Ajoute les autres ici...
  ];

  const filteredEtudiants = etudiants.filter((e) => {
    const matchSearch =
      e.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
      e.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      e.cne.toLowerCase().includes(searchTerm.toLowerCase()) ||
      e.email.toLowerCase().includes(searchTerm.toLowerCase());

    const matchFiliere = filtreFiliere ? e.filiere.toLowerCase() === filtreFiliere.toLowerCase() : true;
    const matchAnnee = filtreAnnee ? e.annee === filtreAnnee : true;

    // Correction ici : comparer en minuscules les deux côtés
    const matchStatut = filtreStatut ? e.statut.toLowerCase().includes(filtreStatut.toLowerCase()) : true;

    return matchSearch && matchFiliere && matchAnnee && matchStatut;
  });

  return (
    <>
      <h1>Inscriptions des Étudiants</h1>

      <div className="stats-container">
        {/* Les cartes statistiques ici */}
        <div className="stat-card">
          <div className="stat-title">Total des inscriptions</div>
          <div className="stat-value">1,248</div>
          <div className="stat-footer">
            <div className="stat-change positive">+12.5%</div>
            <div className="stat-period">depuis l'année dernière</div>
          </div>
        </div>
        {/* ... autres stats */}
      </div>

      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Rechercher par nom, ID, CNE, email..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="search-btn" onClick={() => { /* Recherche si besoin */ }}>
          Rechercher
        </button>
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
      <button
  onClick={() => navigate('/dashbord')}
  style={{
    backgroundColor: '#2563eb', // bleu
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '8px',
    marginBottom: '20px',
    cursor: 'pointer',
  }}
>
   Retour
</button>
    </>
 
  );
};

export default Inscriptions;
