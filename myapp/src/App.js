
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Accueil from './components/Accueil';
import Page1 from "./components/page1";
import Page2 from "./components/page2";
import Page3 from "./components/page3";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Accueil</Link> |{" "}
        <Link to="/page1">Page1</Link> |{" "}
        <Link to="/page2">Page2</Link> |{" "}
        <Link to="/page3">Page3</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
      </Routes>
    </Router>
  );
}

export default App;








