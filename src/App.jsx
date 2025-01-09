import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles/styles.scss"; // Import your global Sass

// Import pages
import Login from "./pages/Login";
import Home from "./pages/index";

// Import components (example: Navbar)
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          {/* Future routes: Dashboard, Backup Management, etc. */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
