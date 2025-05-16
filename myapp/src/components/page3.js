

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/page3.css'; // fichier CSS séparé

function Page3() {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Image soumise :", image);
    alert("Formulaire soumis !");
  };

  return (
    <div className="page3-container">
      <h2 className="page3-title">PAGE 3: Vérification et soumission</h2>

      <form className="upload-form" onSubmit={handleSubmit}>
        <label className="upload-box">
          <span className="upload-text">
            <i className="camera-icon">📷</i><br />
            Cliquez pour télécharger votre photo
          </span>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden-input"
          />
          {image && <img src={URL.createObjectURL(image)} alt="Prévisualisation" className="preview-image" />}
        </label>

        <div className="button-group">
          <button type="button" className="btn prev" onClick={() => navigate('/page2')}>
            Précédent
          </button>
          <button type="submit" className="btn submit">
            Soumission
          </button>
        </div>
      </form>
    </div>
  );
}

export default Page3;



