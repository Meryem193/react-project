

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Accueil from './components/Accueil';
import Inscriptions from './components/Insciptions';
import Connexion from './components/Connexion';
import Dashbord from './components/dashbord';
import Page1 from './components/page1';
import Page2 from './components/page2';
import Page3 from './components/page3';

function App() {
  return (
    <Router>
      <nav style={{ padding: '10px', background: '#eee' }}>
        <Link to="/">Connexion</Link> |{" "}
        <Link to="/accueil">Accueil</Link> |{" "}
        <Link to="/inscriptions">Inscriptions</Link> |{" "}
        <Link to="/dashbord">Dashbord</Link> |{" "}
        <Link to="/page1">Page1</Link> |{" "}
        <Link to="/page2">Page2</Link> |{" "}
        <Link to="/page3">Page3</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Connexion />} />
        <Route path="/accueil" element={<Accueil />} />
        <Route path="/inscriptions" element={<Inscriptions />} />
        <Route path="/dashbord" element={<Dashbord />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
      </Routes>
    </Router>
  );
}

export default App;








