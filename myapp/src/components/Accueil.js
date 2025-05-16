import React from 'react';
import '../styles/Accueil.css';
import { useNavigate } from 'react-router-dom';

function Accueil() {
  const navigate = useNavigate();

  const goToInscription = () => {
    navigate('/page1');
  };

  return (
    <div className="App">
      <header>
        <img src="/api/placeholder/200/200" alt="Logo FSAC" className="logo" />
        <h1>Faculté des Sciences Ain Chock</h1>
        <p>Université Hassan II de Casablanca</p>
      </header>

      <div className="container">
        <div className="alert">
          <strong>Important :</strong> La période d'inscription pour l'année académique 2025-2026 est actuellement ouverte. Veuillez respecter les délais indiqués ci-dessous.
        </div>

        <div className="main-content">
          <div className="info-card">
            <h2>À propos de la FSAC</h2>
            <p>La Faculté des Sciences Ain Chock (FSAC) est une institution d'enseignement supérieur renommée au Maroc, faisant partie de l'Université Hassan II de Casablanca. Fondée en 1981, elle est dédiée à l'excellence académique dans les domaines des sciences fondamentales et appliquées.</p>
            <p>Notre faculté offre des formations de qualité en:</p>
            <ul>
              <li>Mathématiques et Informatique</li>
              <li>Physique</li>
              <li>Chimie</li>
              <li>Biologie</li>
              <li>Géologie</li>
            </ul>
            <p>Avec plus de 8000 étudiants et 300 professeurs-chercheurs, la FSAC est un environnement idéal pour développer vos compétences scientifiques et préparer votre avenir professionnel.</p>
          </div>

          <div className="info-card dates-card">
            <h2>Calendrier d'inscription</h2>
            <p><strong>Période d'inscription en ligne:</strong> 15 mai - 30 juin 2025</p>
            <p><strong>Dépôt des dossiers physiques:</strong> 1 juillet - 15 juillet 2025</p>
            <p><strong>Entretiens (pour certaines filières):</strong> 20 juillet - 30 juillet 2025</p>
            <p><strong>Annonce des résultats:</strong> 10 août 2025</p>
            <p><strong>Inscription définitive:</strong> 15 août - 30 août 2025</p>
            <p><strong>Documents requis:</strong></p>
            <ul>
              <li>Copie de la CIN/Passeport</li>
              <li>Baccalauréat original et photocopie</li>
              <li>4 photos d'identité récentes</li>
              <li>Relevés de notes</li>
              <li>Formulaire d'inscription (à télécharger après inscription en ligne)</li>
            </ul>
          </div>
        </div>

        <div className="button-container">
          <button className="inscription-btn" onClick={goToInscription}>
            S'INSCRIRE MAINTENANT
          </button>
        </div>

        <div className="info-card">
          <h2>Procédure d'inscription</h2>
          <ol>
            <li>Créez votre compte en cliquant sur le bouton "S'INSCRIRE MAINTENANT"</li>
            <li>Remplissez le formulaire en ligne avec vos informations personnelles et académiques</li>
            <li>Téléchargez les documents demandés au format PDF</li>
            <li>Soumettez votre candidature et conservez votre numéro de dossier</li>
            <li>Imprimez le récépissé d'inscription</li>
            <li>Déposez votre dossier physique au bureau des inscriptions de la FSAC durant la période indiquée</li>
          </ol>
          <p>Pour toute assistance, contactez le service des inscriptions:</p>
          <p>📧 inscriptions@fsac.ac.ma | 📞 +212 522 230 680</p>
        </div>
      </div>

      <footer>
        <p>Faculté des Sciences Ain Chock - BP 5366 Maarif - Casablanca</p>
        <p>© 2025 FSAC - Tous droits réservés</p>
      </footer>
    </div>
  );
}

export default Accueil;
