import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/page2.css";

function Page2() {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    // Données du formulaire précédent
    ...location.state?.formData || {},
    // Nouvelles données de formation académique
    niveauEtude: "",
    etablissement: "",
    ville: "",
    filiere: "",
    anneeObtention: "",
    mention: "",
    moyenne: "",
    specialisation: "",
    cycle: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = (e) => {
    e.preventDefault();
    navigate("/page3", { state: { formData } });
  };

  const handlePrevious = () => {
    navigate("/", { state: { formData } });
  };

  useEffect(() => {
    if (!location.state?.formData) {
      navigate("/");
    }
  }, [location.state, navigate]);

  return (
    <div className="page-container">
      <div className="decoration-circle top-left"></div>
      <div className="decoration-circle bottom-right"></div>

      <div className="form-header">
        <h1 className="main-title">Formulaire d'inscription</h1>
        <p className="subtitle">
          Veuillez compléter vos informations académiques pour finaliser votre
          candidature
        </p>
      </div>

      <div className="progress-container">
        <div className="progress-step">
          <div className="step-number completed">1</div>
          <span className="step-title completed">Informations personnelles</span>
        </div>
        <div className="progress-line completed"></div>
        <div className="progress-step">
          <div className="step-number active">2</div>
          <span className="step-title active">Formation académique</span>
        </div>
        <div className="progress-line"></div>
        <div className="progress-step">
          <div className="step-number">3</div>
          <span className="step-title">Documents requis</span>
        </div>
      </div>

      <div className="form-container">
        <div className="form-section-header">
          <h2 className="form-title">Formation académique</h2>
          <p className="form-description">
            Les champs marqués d'un <span className="required-mark">*</span> sont
            obligatoires
          </p>
        </div>

        <form className="form-grid" onSubmit={handleNext}>
          {/* Formation principale */}
          <div className="form-section">
            <h3 className="section-title">Diplôme principal</h3>

            <div className="form-group">
              <label>
                Niveau d'étude <span className="required-mark">*</span>
              </label>
              <select
                name="niveauEtude"
                value={formData.niveauEtude}
                onChange={handleChange}
                required
              >
                <option value="">Sélectionnez votre niveau</option>
                <option value="bac">Baccalauréat</option>
              </select>
            </div>

            {/* Établissement + Ville */}
            <div className="form-row">
              <div className="form-group">
                <label>
                  Établissement <span className="required-mark">*</span>
                </label>
                <input
                  type="text"
                  name="etablissement"
                  value={formData.etablissement}
                  onChange={handleChange}
                  placeholder="Nom de l'établissement"
                  required
                />
              </div>

              <div className="form-group">
                <label>
                  Ville <span className="required-mark">*</span>
                </label>
                <input
                  type="text"
                  name="ville"
                  value={formData.ville}
                  onChange={handleChange}
                  placeholder="Ville de l'établissement"
                  required
                />
              </div>
            </div>

            {/* Année d'obtention + Mention */}
            <div className="form-row">
              <div className="form-group">
                <label>
                  Année d'obtention <span className="required-mark">*</span>
                </label>
                <input
                  type="number"
                  name="anneeObtention"
                  value={formData.anneeObtention}
                  onChange={handleChange}
                  placeholder="AAAA"
                  min="1950"
                  max="2030"
                  required
                />
              </div>

              <div className="form-group">
                <label>Mention</label>
                <select
                  name="mention"
                  value={formData.mention}
                  onChange={handleChange}
                >
                  <option value="">Sélectionnez</option>
                  <option value="Passable">Passable</option>
                  <option value="Assez bien">Assez bien</option>
                  <option value="Bien">Bien</option>
                  <option value="Très bien">Très bien</option>
                  <option value="Excellent">Excellent</option>
                </select>
              </div>
            </div>

            {/* Moyenne + Spécialisation */}
            <div className="form-row">
              <div className="form-group">
                <label>Moyenne générale</label>
                <input
                  type="number"
                  name="moyenne"
                  value={formData.moyenne}
                  onChange={handleChange}
                  placeholder="Ex: 14.75"
                  step="0.01"
                  min="0"
                  max="20"
                />
              </div>

              <div className="form-group">
                <label>Spécialisation</label>
                <input
                  type="text"
                  name="specialisation"
                  value={formData.specialisation}
                  onChange={handleChange}
                  placeholder="Votre spécialisation"
                />
              </div>
            </div>
          </div>

          {/* Nouvelle section Filière choisie */}
          <div className="form-section">
            <h3 className="section-title">Filière choisie</h3>

            <div className="form-group">
              <label>
                Filière choisie <span className="required-mark">*</span>
              </label>
              <input
                type="text"
                name="filiere"
                value={formData.filiere}
                onChange={handleChange}
                placeholder="Nom de la filière choisie"
                required
              />
            </div>

            <div className="form-group">
              <label>
                Cycle <span className="required-mark">*</span>
              </label>
              <select
                name="cycle"
                value={formData.cycle}
                onChange={handleChange}
                required
              >
                <option value="">Sélectionnez un cycle</option>
                <option value="licence">Licence</option>
                <option value="master">Master</option>
                <option value="doctorat">Doctorat</option>
              </select>
            </div>
          </div>

          {/* Navigation boutons */}
          <div className="form-navigation">
            <button
              type="button"
              className="btn-previous"
              onClick={handlePrevious}
            >
              <span className="btn-icon">←</span> PRÉCÉDENT
            </button>
            <button type="submit" className="btn-next">
              SUIVANT <span className="btn-icon">→</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Page2;
