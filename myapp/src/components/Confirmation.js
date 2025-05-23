import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/Confirmation.css";

function Confirmation() {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state;

  if (!formData) {
    return (
      <div className="confirmation-container">
        <h1>Aucune donnée disponible</h1>
        <button onClick={() => navigate("/")}>Retour à l'accueil</button>
      </div>
    );
  }

  return (
    <div className="confirmation-container">
      <h1>Récapitulatif de votre inscription</h1>

      <div className="recap-section">
        <p><strong>Nom :</strong> {formData.nom}</p>
        <p><strong>Prénom :</strong> {formData.prenom}</p>
        <p><strong>Email :</strong> {formData.email}</p>
        <p><strong>Téléphone :</strong> {formData.telephone || "Non spécifié"}</p>
        <p><strong>Ville :</strong> {formData.ville || "Non spécifié"}</p>
        <p><strong>Adresse :</strong> {formData.adresse || "Non spécifié"}</p>
        <p><strong>Code Postal :</strong> {formData.codePostal || "Non spécifié"}</p>
        <p><strong>Pays :</strong> {formData.pays || "Non spécifié"}</p>
        <p><strong>Date de Naissance :</strong> {formData.dateNaissance || "Non spécifiée"}</p>
        <p><strong>Formation :</strong> {formData.formation || "Non spécifiée"}</p>
        <p><strong>Diplôme :</strong> {formData.diplome || "Non spécifié"}</p>

      // Au lieu de formData.photoIdentite, utilise formData.photoUrl

{formData.photoUrl && (
  <div>
    <strong>Photo d'identité :</strong><br />
    <img
      src={formData.photoUrl}
      alt="Photo d'identité"
      className="photo-preview"
    />
  </div>
)}

        
      </div>

      <div className="button-section">
        <button onClick={() => navigate("/")} className="btn-home">
          Retour à l'accueil
        </button>
      </div>
    </div>
  );
}

export default Confirmation;
