
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/page1.css";

function Page1() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    cin: "",
    cne: "",
    dateNaissance: "",
    lieuNaissance: "",
    nationalite: "",
    adresse: "",
    telephone: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = (e) => {
    e.preventDefault();
    // Tu peux ajouter une validation supplémentaire ici si besoin
    navigate("/page2", { state: { formData } });
  };

  return (
    <div className="page-container">
      {/* Éléments décoratifs */}
      <div className="decoration-circle top-left"></div>
      <div className="decoration-circle bottom-right"></div>

      <div className="form-header">
        <h1 className="main-title">Formulaire d'inscription</h1>
        <p className="subtitle">
          Veuillez compléter vos informations personnelles avec précision pour
          finaliser votre candidature
        </p>
      </div>

      {/* Indicateur de progression */}
      <div className="progress-container">
        <div className="progress-step">
          <div className="step-number active">1</div>
          <span className="step-title active">Informations personnelles</span>
        </div>
        <div className="progress-line"></div>
        <div className="progress-step">
          <div className="step-number">2</div>
          <span className="step-title">Formation académique</span>
        </div>
        <div className="progress-line"></div>
        <div className="progress-step">
          <div className="step-number">3</div>
          <span className="step-title">Documents requis</span>
        </div>
      </div>

      <div className="form-container">
        <div className="form-section-header">
          <h2 className="form-title">Informations personnelles et coordonnées</h2>
          <p className="form-description">
            Les champs marqués d'un <span className="required-mark">*</span> sont
            obligatoires
          </p>
        </div>

        <form className="form-grid" onSubmit={handleNext}>
          {/* Section Identité */}
          <div className="form-section">
            <h3 className="section-title">Identité</h3>

            <div className="form-group">
              <label>
                Nom <span className="required-mark">*</span>
              </label>
              <input
                type="text"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                placeholder="Entrez votre nom de famille"
                required
              />
              <div className="help-tooltip">
                ?
                <div className="tooltip-content">
                  Entrez votre nom de famille tel qu'il apparaît sur vos documents
                  officiels.
                </div>
              </div>
            </div>

            <div className="form-group">
              <label>
                Prénom <span className="required-mark">*</span>
              </label>
              <input
                type="text"
                name="prenom"
                value={formData.prenom}
                onChange={handleChange}
                placeholder="Entrez votre prénom"
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>
                  CIN <span className="required-mark">*</span>
                </label>
                <input
                  type="text"
                  name="cin"
                  value={formData.cin}
                  onChange={handleChange}
                  placeholder="Ex: AB123456"
                  required
                />
                <div className="help-tooltip">
                  ?
                  <div className="tooltip-content">
                    Carte d'Identité Nationale - format standard à 8 caractères.
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label>
                  CNE <span className="required-mark">*</span>
                </label>
                <input
                  type="text"
                  name="cne"
                  value={formData.cne}
                  onChange={handleChange}
                  placeholder="Ex: D123456789"
                  required
                />
                <div className="help-tooltip">
                  ?
                  <div className="tooltip-content">
                    Code National de l'Étudiant - format à 10 caractères.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section Naissance et Nationalité */}
          <div className="form-section">
            <h3 className="section-title">Naissance et nationalité</h3>

            <div className="form-group">
              <label>
                Date de naissance <span className="required-mark">*</span>
              </label>
              <input
                type="date"
                name="dateNaissance"
                value={formData.dateNaissance}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>
                Lieu de naissance <span className="required-mark">*</span>
              </label>
              <input
                type="text"
                name="lieuNaissance"
                value={formData.lieuNaissance}
                onChange={handleChange}
                placeholder="Ville et pays de naissance"
                required
              />
            </div>

            <div className="form-group">
              <label>
                Nationalité <span className="required-mark">*</span>
              </label>
              <input
                type="text"
                name="nationalite"
                value={formData.nationalite}
                onChange={handleChange}
                placeholder="Votre nationalité"
                required
              />
            </div>
          </div>

          {/* Section Coordonnées */}
          <div className="form-section full-width">
            <h3 className="section-title">Coordonnées</h3>

            <div className="form-group">
              <label>
                Adresse <span className="required-mark">*</span>
              </label>
              <input
                type="text"
                name="adresse"
                value={formData.adresse}
                onChange={handleChange}
                placeholder="Adresse complète"
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>
                  Téléphone <span className="required-mark">*</span>
                </label>
                <input
                  type="tel"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  placeholder="Ex: +212 6XX XXXXXX"
                  required
                />
              </div>

              <div className="form-group">
                <label>
                  E-mail <span className="required-mark">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="exemple@domaine.com"
                  required
                />
              </div>
            </div>
          </div>

          <div className="form-navigation">
            <button type="submit" className="btn-next">
              SUIVANT
              <span className="btn-icon">→</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Page1;





