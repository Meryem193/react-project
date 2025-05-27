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
        <div className="error-section">
          <div className="error-icon">⚠️</div>
          <h1>Aucune donnée disponible</h1>
          <p>Il semble qu'il y ait eu un problème avec votre inscription.</p>
          <button onClick={() => navigate("/accueil")} className="btn-home">
            Retour à l'accueil
          </button>
        </div>
      </div>
    );
  }

  const handleDownload = () => {
    window.print();
  };

  const formatDate = (dateString) => {
    if (!dateString) return "Non spécifiée";
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR');
  };

  const getCurrentDate = () => {
    return new Date().toLocaleDateString('fr-FR');
  };

  return (
    <>
      <style jsx>{`
        @media print {
          * {
            margin: 0 !important;
            padding: 0 !important;
            box-sizing: border-box !important;
          }
          
          body {
            font-size: 11px !important;
            line-height: 1.2 !important;
            color: #000 !important;
            background: white !important;
          }
          
          .confirmation-container {
            width: 100% !important;
            max-width: none !important;
            margin: 0 !important;
            padding: 15px !important;
            page-break-after: avoid !important;
            transform: scale(0.85) !important;
            transform-origin: top left !important;
          }
          
          .header-section {
            display: flex !important;
            justify-content: space-between !important;
            align-items: center !important;
            margin-bottom: 10px !important;
            padding-bottom: 8px !important;
            border-bottom: 2px solid #000 !important;
          }
          
          .fsac-info h2 {
            font-size: 18px !important;
            margin: 0 !important;
            font-weight: bold !important;
          }
          
          .fsac-info p {
            font-size: 10px !important;
            margin: 2px 0 !important;
          }
          
          .confirmation-badge {
            display: flex !important;
            align-items: center !important;
            gap: 5px !important;
            background: #e8f5e8 !important;
            padding: 4px 8px !important;
            border-radius: 4px !important;
            border: 1px solid #4CAF50 !important;
          }
          
          .success-icon {
            font-size: 14px !important;
            color: #4CAF50 !important;
          }
          
          .confirmation-badge span {
            font-size: 10px !important;
            font-weight: bold !important;
            color: #4CAF50 !important;
          }
          
          .main-content h1 {
            font-size: 16px !important;
            margin: 8px 0 4px 0 !important;
            text-align: center !important;
          }
          
          .subtitle {
            font-size: 10px !important;
            text-align: center !important;
            margin-bottom: 10px !important;
            color: #4CAF50 !important;
            font-weight: bold !important;
          }
          
          .recap-card {
            margin-bottom: 10px !important;
            border: 1px solid #ddd !important;
            border-radius: 4px !important;
            overflow: hidden !important;
            page-break-inside: avoid !important;
          }
          
          .section-title {
            background: #f8f8f8 !important;
            padding: 6px 10px !important;
            border-bottom: 1px solid #ddd !important;
          }
          
          .section-title h3 {
            font-size: 12px !important;
            margin: 0 !important;
            font-weight: bold !important;
          }
          
          .info-grid {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 6px !important;
            padding: 8px !important;
          }
          
          .info-item {
            display: flex !important;
            gap: 5px !important;
            align-items: flex-start !important;
          }
          
          .info-item.full-width {
            grid-column: 1 / -1 !important;
          }
          
          .label {
            font-weight: bold !important;
            font-size: 9px !important;
            color: #555 !important;
            min-width: 70px !important;
            flex-shrink: 0 !important;
          }
          
          .value {
            font-size: 9px !important;
            word-break: break-word !important;
          }
          
          .highlighted {
            background: #fff3cd !important;
            padding: 2px 4px !important;
            border-radius: 2px !important;
            font-weight: bold !important;
          }
          
          .photo-section {
            padding: 8px !important;
            text-align: center !important;
          }
          
          .photo-container {
            display: inline-block !important;
          }
          
          .photo-preview {
            max-width: 60px !important;
            max-height: 80px !important;
            border: 1px solid #ddd !important;
            border-radius: 4px !important;
          }
          
          .photo-label {
            display: block !important;
            font-size: 8px !important;
            margin-top: 4px !important;
            color: #666 !important;
          }
          
          .important-notice {
            background: #f0f8ff !important;
            border: 1px solid #0066cc !important;
            border-radius: 4px !important;
            padding: 8px !important;
            margin: 10px 0 !important;
            display: flex !important;
            gap: 6px !important;
          }
          
          .notice-icon {
            font-size: 12px !important;
            color: #0066cc !important;
            flex-shrink: 0 !important;
          }
          
          .notice-content h4 {
            font-size: 10px !important;
            margin: 0 0 4px 0 !important;
            color: #0066cc !important;
          }
          
          .notice-content ul {
            margin: 0 !important;
            padding-left: 12px !important;
          }
          
          .notice-content li {
            font-size: 8px !important;
            margin-bottom: 2px !important;
            line-height: 1.3 !important;
          }
          
          .actions-section {
            display: none !important;
          }
          
          .footer-info {
            margin-top: 8px !important;
            padding-top: 6px !important;
            border-top: 1px solid #ddd !important;
            text-align: center !important;
          }
          
          .footer-info p {
            font-size: 8px !important;
            color: #666 !important;
            margin: 0 !important;
          }
          
          .footer-info a {
            color: #0066cc !important;
            text-decoration: none !important;
          }
        }
      `}</style>
      
      <div className="confirmation-container">
        <div className="header-section">
          <div className="fsac-info">
            <h2>FSAC</h2>
            <p>Faculté des Sciences Aïn-Chock Casablanca</p>
          </div>
          <div className="confirmation-badge">
            <div className="success-icon">✓</div>
            <span>Inscription Confirmée</span>
          </div>
        </div>

        <div className="main-content">
          <h1>Récapitulatif de votre inscription</h1>
          <p className="subtitle success-message">
            Votre demande d'inscription a été soumise avec succès le {getCurrentDate()}
          </p>

          <div className="recap-card">
            <div className="section-title">
              <h3>Informations Personnelles</h3>
            </div>
            <div className="info-grid">
              <div className="info-item">
                <span className="label">Nom :</span>
                <span className="value">{formData.nom}</span>
              </div>
              <div className="info-item">
                <span className="label">Prénom :</span>
                <span className="value">{formData.prenom}</span>
              </div>
              <div className="info-item">
                <span className="label">Email :</span>
                <span className="value">{formData.email}</span>
              </div>
              <div className="info-item">
                <span className="label">Téléphone :</span>
                <span className="value">{formData.telephone || "Non spécifié"}</span>
              </div>
              <div className="info-item">
                <span className="label">Date de Naissance :</span>
                <span className="value">{formatDate(formData.dateNaissance)}</span>
              </div>
              <div className="info-item">
                <span className="label">Ville :</span>
                <span className="value">{formData.ville || "Non spécifiée"}</span>
              </div>
              <div className="info-item full-width">
                <span className="label">Adresse :</span>
                <span className="value">{formData.adresse || "Non spécifiée"}</span>
              </div>
            </div>
          </div>

          <div className="recap-card">
            <div className="section-title">
              <h3>Parcours Académique</h3>
            </div>
            <div className="info-grid">
              <div className="info-item">
                <span className="label">Filière choisie :</span>
                <span className="value highlighted">{formData.filièrechoisie || "Non spécifiée"}</span>
              </div>
              <div className="info-item">
                <span className="label">Cycle :</span>
                <span className="value highlighted">{formData.cycle || "Non spécifié"}</span>
              </div>
              {formData.niveau && (
                <div className="info-item">
                  <span className="label">Niveau :</span>
                  <span className="value">{formData.niveau}</span>
                </div>
              )}
              {formData.anneeBac && (
                <div className="info-item">
                  <span className="label">Année du Bac :</span>
                  <span className="value">{formData.anneeBac}</span>
                </div>
              )}
            </div>
          </div>

          {formData.photoUrl && (
            <div className="recap-card">
              <div className="section-title">
                <h3>Documents</h3>
              </div>
              <div className="photo-section">
                <div className="photo-container">
                  <img src={formData.photoUrl} alt="Photo d'identité" className="photo-preview" />
                  <span className="photo-label">Photo d'identité</span>
                </div>
              </div>
            </div>
          )}

          <div className="important-notice">
            <div className="notice-icon">ℹ️</div>
            <div className="notice-content">
              <h4>Prochaines étapes :</h4>
              <ul>
                <li>Vous recevrez un email de confirmation dans les 24 heures</li>
                <li>Les résultats de sélection seront communiqués sous 2 semaines</li>
                <li>Conservez ce récapitulatif pour vos dossiers</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="actions-section">
          <button onClick={handleDownload} className="btn-download">
            <svg className="download-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
            </svg>
            Imprimer le récapitulatif
          </button>
          
          <button onClick={() => navigate("/accueil")} className="btn-home">
            <svg className="home-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
            </svg>
            Retour à l'accueil
          </button>
        </div>

        <div className="footer-info">
          <p>
            Pour toute question, contactez-nous : 
            <a href="mailto:contact@fsac.ma"> contact@fsac.ma</a> | 
            <a href="tel:+212123456789"> +212 1 23 45 67 89</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Confirmation;
