import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/page1.css";

function Page1() {
  const navigate = useNavigate();

  return (
    <div className="page1-container">
      <div className="page1-title">PAGE 1 : Informations personnelles</div>

      <div className="form-wrapper">
        <form className="form-grid">
          <div className="form-group">
            <label>Nom</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Prénom</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>CIN</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>CNE</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Date de naissance</label>
            <input type="date" />
          </div>
          <div className="form-group">
            <label>Lieu de naissance</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Nationalité</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Adresse</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Téléphone</label>
            <input type="tel" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" />
          </div>
        </form>

        <div className="button-container">
          <button onClick={() => navigate("/page2")} className="btn">
            SUIVANT
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page1;



