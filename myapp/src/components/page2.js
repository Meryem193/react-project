
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/page2.css';

function Page2() {
  const navigate = useNavigate();

  return (
    <div className="page2">
      <div className="header">
        <h2>PAGE 2 : Cursus et diplômes</h2>
      </div>

      <div className="form-container">
        <form className="form-grid">
          <label>Série du Bac<input type="text" /></label>
          <label>Année du Bac<input type="text" /></label>
          <label>Mension du Bac<input type="text" /></label>
          <label>Établissement<input type="text" /></label>
          <label>Moyenne du Bac<input type="text" /></label>
          <label>Ville<input type="text" /></label>
        </form>

        <div className="button-container">
          <button className="btn" onClick={() => navigate('/page1')}>Précédent</button>
          <button className="btn" onClick={() => navigate('/page3')}>Suivant</button>
        </div>
      </div>
    </div>
  );
}

export default Page2;


