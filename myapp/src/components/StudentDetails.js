import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/studentDetails.css';

// Exemple de données locales (à remplacer par un fetch API si besoin)
const etudiants = [
  {
    id: 'FSAC2025001',
    nom: 'Ahmed Bennani',
    cne: 'D138256794',
    email: 'ahmed.bennani@etudiant.fsac.ac.ma',
    statut: 'En attente',
    dateInscription: '22/05/2025',
    photoIdentite: '/photos/ahmed.jpg',
    autresInfos: {
      adresse: '123 Rue A, Casablanca',
      telephone: '0612345678',
    },
  },
  {
    id: 'FSAC2025003',
    nom: 'Karim Benjelloun',
    cne: 'G139468235',
    email: 'karim.benjelloun@etudiant.fsac.ac.ma',
    statut: 'En attente',
    dateInscription: '18/05/2025',
    photoIdentite: '/photos/karim.jpg',
    autresInfos: {
      adresse: '456 Avenue B, Rabat',
      telephone: '0698765432',
    },
  },
  // ... autres étudiants
];

const StudentDetails = ({ updateStatut }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [etudiant, setEtudiant] = useState(null);

  useEffect(() => {
    // Cherche l'étudiant par id dans le tableau
    const found = etudiants.find((e) => e.id === id);
    setEtudiant(found);
  }, [id]);

  if (!etudiant) {
    return (
      <div className="student-details-container">
        <h2>Aucun étudiant trouvé avec l'ID "{id}".</h2>
        <button className="btn-retour" onClick={() => navigate(-1)}>
          ← Retour
        </button>
      </div>
    );
  }

  const handleValider = () => {
    if (updateStatut) updateStatut(etudiant.id, 'Inscription validée');
    navigate('/valides'); // redirige vers tableau validés
  };

  const handleRejeter = () => {
    if (updateStatut) updateStatut(etudiant.id, 'Rejeté');
    navigate('/rejetes'); // redirige vers tableau rejetés
  };

  return (
    <div className="student-details-container">
      <h1>Détails de l'étudiant</h1>
      <div className="info-section">
        <img
          src={etudiant.photoIdentite || '/default-photo.png'}
          alt={`Photo de ${etudiant.nom}`}
          className="photo-identite"
        />
        <div className="infos">
          <p><strong>ID :</strong> {etudiant.id}</p>
          <p><strong>Nom complet :</strong> {etudiant.nom}</p>
          <p><strong>Date de naissance:</strong> {etudiant.datedenaissance || 'Non renseignée'}</p>
          <p><strong>CNE :</strong> {etudiant.cne}</p>
          <p><strong>Email :</strong> {etudiant.email}</p>
          <p><strong>Date d'inscription :</strong> {etudiant.dateInscription}</p>
          <p><strong>Statut :</strong> {etudiant.statut}</p>
          <p><strong>Type Baccalauréat :</strong> {etudiant.typeBaccalaureat || 'Non renseigné'}</p>
          <p><strong>Année d'obtention :</strong> {etudiant.annéeDobtion || 'Non renseignée'}</p>
          <p><strong>Spécialité :</strong> {etudiant.spécialitée || 'Non renseignée'}</p>
          <p><strong>Moyenne :</strong> {etudiant.moyenne || 'Non renseignée'}</p>
          {etudiant.autresInfos && (
            <>
              <p><strong>Adresse :</strong> {etudiant.autresInfos.adresse}</p>
              <p><strong>Téléphone :</strong> {etudiant.autresInfos.telephone}</p>
            </>
          )}
        </div>
      </div>

      <div className="actions-buttons">
        <button className="btn-valider" onClick={handleValider}>
          Valider
        </button>
        <button className="btn-rejeter" onClick={handleRejeter}>
          Rejeter
        </button>
      </div>

      <button className="btn-retour" onClick={() => navigate(-1)}>
        ← Retour
      </button>
    </div>
  );
};

export default StudentDetails;
