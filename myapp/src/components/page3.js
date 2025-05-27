
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/page3.css";

function Page3() {
  const navigate = useNavigate();
  const location = useLocation();

  const initialData = location.state?.formData || {};
  const [photoIdentite, setPhotoIdentite] = useState(null);
  const [uploadStatus, setUploadStatus] = useState(false);

  const formData = { ...initialData, photoIdentite };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhotoIdentite(file);
      setUploadStatus(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Candidature soumise. Cliquez sur 'Voir le récapitulatif' pour consulter vos informations.");
  };

  const handlePrevious = () => {
    navigate("/page2", { state: { formData } });
  };

  const handleRecap = () => {
    if (!photoIdentite) {
      alert("Veuillez télécharger une photo d'identité avant de voir le récapitulatif.");
      return;
    }

    const photoUrl = URL.createObjectURL(photoIdentite);
    const completeFormData = { ...formData, photoUrl };

    console.log("FormData envoyé à Confirmation :", completeFormData);

    navigate("/Confirmation", { state: completeFormData });
  };

  useEffect(() => {
    if (!location.state?.formData) {
      navigate("/");
    }
  }, [location.state, navigate]);

  const formatFileName = (file) => {
    if (!file) return "";
    return file.name.length > 25 ? file.name.substring(0, 25) + "..." : file.name;
  };

  return (
    <div className="page-container">
      <div className="decoration-circle top-left"></div>
      <div className="decoration-circle bottom-right"></div>

      <div className="form-header">
        <h1 className="main-title">Photo d'identité</h1>
        <p className="subtitle">
          Veuillez télécharger la photo d'identité pour compléter votre candidature
        </p>
      </div>

      <div className="progress-container">
        <div className="progress-step">
          <div className="step-number completed">1</div>
          <span className="step-title completed">Informations personnelles</span>
        </div>
        <div className="progress-line completed"></div>
        <div className="progress-step">
          <div className="step-number completed">2</div>
          <span className="step-title completed">Formation académique</span>
        </div>
        <div className="progress-line completed"></div>
        <div className="progress-step">
          <div className="step-number active">3</div>
          <span className="step-title active">Photo d'identité</span>
        </div>
      </div>

      <div className="form-container">
        <form className="form-grid" onSubmit={handleSubmit}>
          <div className="form-section full-width">
            <p className="form-description">
              Formats acceptés: JPG, PNG. Taille maximale: 5 MB.
            </p>
            <p className="form-description">
              Les champs marqués d'un <span className="required-mark">*</span> sont obligatoires
            </p>

            <div className="document-upload-card">
              <div className="document-label">
                <label htmlFor="photoIdentite">
                  Photo d'identité <span className="required-mark">*</span>
                </label>
              </div>
              <div className={`upload-zone ${uploadStatus ? "uploaded" : ""}`}>
                <input
                  type="file"
                  name="photoIdentite"
                  id="photoIdentite"
                  onChange={handleFileChange}
                  accept=".jpg,.jpeg,.png"
                  required
                  className="file-input"
                />
                <label htmlFor="photoIdentite" className="upload-label">
                  {uploadStatus ? (
                    <>
                      <span className="file-name">{formatFileName(photoIdentite)}</span>
                      <span className="file-status">Téléchargé ✓</span>
                    </>
                  ) : (
                    <>
                      <span className="upload-icon">+</span>
                      <span className="upload-text">Télécharger votre photo</span>
                    </>
                  )}
                </label>
              </div>
            </div>
          </div>

          <div className="form-navigation">
            <button type="button" className="btn-previous" onClick={handlePrevious}>
              <span className="btn-icon">←</span>
              PRÉCÉDENT
            </button>
            <button type="submit" className="btn-submit">
              SOUMETTRE LA CANDIDATURE
            </button>
            <button type="button" className="btn-recap green" onClick={handleRecap}>
              VOIR LE RÉCAPITULATIF
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Page3;


