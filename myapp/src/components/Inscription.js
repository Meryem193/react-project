import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/dashbord.css';

const Inscriptions = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filtreStatut, setFiltreStatut] = useState('');

  // Exemple de données d'étudiants avec statuts variés
  const etudiants = [
    {
      id: 'FSAC2025001',
      nom: 'Ahmed Bennani',
      cne: 'D138256794',
      email: 'ahmed.bennani@etudiant.fsac.ac.ma',
      statut: 'En attente',
      dateInscription: '22/05/2025',
    },
    {
      id: 'FSAC2025003',
      nom: 'Karim Benjelloun',
      cne: 'G139468235',
      email: 'karim.benjelloun@etudiant.fsac.ac.ma',
      statut: 'Inscription validée',
      dateInscription: '18/05/2025',
    },
    {
      id: 'FSAC2025005',
      nom: 'Youness Tazi',
      cne: 'M130457821',
      email: 'youness.tazi@etudiant.fsac.ac.ma',
      statut: 'Rejeté',
      dateInscription: '18/05/2025',
    },
  ];

  // Filtrage des étudiants selon recherche et filtre statut
  const filteredEtudiants = etudiants.filter((e) => {
    const matchSearch =
      e.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
      e.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      e.cne.toLowerCase().includes(searchTerm.toLowerCase()) ||
      e.email.toLowerCase().includes(searchTerm.toLowerCase());

    const matchStatut = filtreStatut
      ? e.statut.toLowerCase() === filtreStatut.toLowerCase()
      : true;

    return matchSearch && matchStatut;
  });

  // Fonction pour réinitialiser les filtres
  const resetFilters = () => {
    setSearchTerm('');
    setFiltreStatut('');
  };

  return (
    <>
      <div className="header-container">
        <h1>Inscriptions des Étudiants</h1>
      </div>

      <div className="search-filters">
        <input
          type="text"
          className="search-input"
          placeholder="Rechercher par nom, ID, CNE, email..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          className="filter-select"
          value={filtreStatut}
          onChange={(e) => setFiltreStatut(e.target.value)}
        >
          <option value="">Statut (Tous)</option>
          <option value="En attente">En attente</option>
          <option value="Inscription validée">Inscription validée</option>
          <option value="Rejeté">Rejeté</option>
        </select>

        <button className="btn-reset-filters" onClick={resetFilters}>
          Réinitialiser filtres
        </button>
      </div>

      <div className="data-card">
        <div className="card-header">
          <div className="card-title">Liste des étudiants inscrits</div>
        </div>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nom complet</th>
              <th>CNE</th>
              <th>E-mail</th>
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
                  <td>{e.dateInscription}</td>
                  <td>
                    <div className="status-cell">
                      <div
                        className="status-indicator indicator-pending"
                        title="En attente"
                      ></div>
                      <span>En attente</span>
                    </div>
                  </td>
                  <td>
                    <button
                      className="btn-voir"
                      onClick={() => navigate(`/student-details/${e.id}`)}
                    >
                      Voir
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" style={{ textAlign: 'center' }}>
                  Aucun étudiant trouvé.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="bouton-retour-container">
        <button className="btn btn-retour" onClick={() => navigate('/dashbord')}>
          ← Retour
        </button>
      </div>
    </>
  );
};

export default Inscriptions;
