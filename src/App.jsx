import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import About from './aboutpage';
import Servicespage from './servicespage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/hastle/" element={<Homepage />} />
        <Route path="/hastle/about" element={<About />} />
        <Route path="/hastle/service1" element={<Servicespage />} />
      </Routes>
    </Router>
  );
}

export default App;