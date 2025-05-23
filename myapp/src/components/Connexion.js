import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Connexion.css";

const logo = "/api/placeholder/150/150";

const Connexion = () => {
  const [userType, setUserType] = useState("etudiant");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleTabClick = (type) => {
    setUserType(type);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simuler une requête réseau ou validation
    setTimeout(() => {
      setIsSubmitting(false);
      if (userType === "etudiant") {
        navigate("/accueil");
      } else {
        navigate("/dashbord");
      }
    }, 1500);
  };

  // Générer particules
  const particles = [...Array(40)].map((_, i) => {
    const size = Math.random() * 8 + 4;
    const opacity = Math.random() * 0.4 + 0.1;
    const duration = Math.random() * 30 + 20;
    const delay = Math.random() * -15;
    const top = Math.random() * 100;
    const left = Math.random() * 100;

    return (
      <div
        key={i}
        className="particle"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          top: `${top}%`,
          left: `${left}%`,
          backgroundColor: `rgba(255, 255, 255, ${opacity})`,
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
          transform: "translateY(0)",
        }}
      />
    );
  });

  return (
    <div className="connexion-container">
      <div className="particles-container">{particles}</div>

      <div className="wave-svg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-full"
        >
          <path
            fill="#ffffff"
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="card-wrapper">
        <div className="glow-effect" />
        <div className="card">
          <header className="card-header">
            <div className="logo-wrapper">
              <div className="logo-inner">
                <img src={logo} alt="Logo FSAC" />
              </div>
            </div>
            <h2>Portail de Connexion</h2>
            <p>Faculté des Sciences Ain Chock</p>
          </header>

          <nav className="tab-bar">
            <button
              className={`tab-button ${userType === "etudiant" ? "active" : ""}`}
              onClick={() => handleTabClick("etudiant")}
              type="button"
            >
              <svg
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                fill="currentColor"
              >
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.51a.25.25 0 01.25.25v6.99a.75.75 0 001.5 0v-4.69a.25.25 0 01.25-.25h2a.25.25 0 01.25.25v4.69a.75.75 0 001.5 0v-6.99a.25.25 0 01.25-.25l2.644-.59a1 1 0 000-1.84l-7-3z" />
              </svg>
              Étudiant
            </button>

            <button
              className={`tab-button ${userType === "admin" ? "active" : ""}`}
              onClick={() => handleTabClick("admin")}
              type="button"
            >
              <svg
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 2.05a7 7 0 119.9 9.9 7 7 0 01-9.9-9.9zm5.46 8.55a1 1 0 10-1.414-1.414 2 2 0 01-2.828 0 1 1 0 00-1.414 1.415 4 4 0 005.656 0z"
                  clipRule="evenodd"
                />
              </svg>
              Administration
            </button>
          </nav>

          <form onSubmit={handleSubmit} className="form">
            <div>
              <label htmlFor="email">
                {userType === "admin" ? "Identifiant" : "Adresse e-mail"}
              </label>
              <input
                type={userType === "admin" ? "text" : "email"}
                id="email"
                name="email"
                placeholder={userType === "admin" ? "Identifiant" : "exemple@fsac.ma"}
                required
                autoComplete={userType === "admin" ? "username" : "email"}
              />
            </div>

            <div>
              <label htmlFor="password">Mot de passe</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="••••••••"
                required
                autoComplete="current-password"
              />
            </div>

            <button type="submit" disabled={isSubmitting} className="submit-btn">
              {isSubmitting ? "Connexion en cours..." : "Se connecter"}
            </button>
          </form>

          <footer className="footer">&copy; {new Date().getFullYear()} FSAC - Tous droits réservés</footer>
        </div>
      </div>
    </div>
  );
};

export default Connexion;
