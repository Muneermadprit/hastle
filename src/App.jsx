import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import About from './aboutpage';
import Servicespage from './servicespage';
import Careerspage from './careerspage';
import Dashbord from './dashbord';
import Blog from './blog'
import ContactSection from './components/Navbar/contact';
import ContactUs from './contactus';

function App() {
  return (
    <>

    <Router>
      <Routes>
        <Route path="/hastle/" element={<Homepage />} />
        <Route path="/hastle/about" element={<About />} />
        <Route path="/hastle/service1" element={<Servicespage />} />
        <Route path="/hastle/careers" element={<Careerspage />} />
        <Route path="/hastle/dasbord" element={<Dashbord />} />
        <Route path="/hastle/blog" element={<Blog />} />
        <Route path="/hastle/contact" element={<ContactUs />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;