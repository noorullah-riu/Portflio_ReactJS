import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Screens/Home";
import ProjectDetail from './Screens/ProjectDetail';

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route */}
        <Route path="/Portflio_ReactJS" element={<Home />} />
        <Route path="/ProjectDetail" element={<ProjectDetail />} />

      </Routes>
    </Router>
  );
}

export default App;
