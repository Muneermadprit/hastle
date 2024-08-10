import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import About from './aboutpage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/hastle/" element={<Homepage />} />
        <Route path="/hastle/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;