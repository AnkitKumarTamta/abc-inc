import React from 'react'
import Footer from './components/Footer';
import Header from './components/Header';
import MainCard from './components/MainCard';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegisterForm from './components/RegisterForm';
import Dev from './components/Dev';
import Contact from './components/Contact';
import PortFolio from './components/PortFolio';


function App() {
  return (
    
    <Router>
    <Header />
    
  <Routes>
 < Route path='/' element={<MainCard />} />
  < Route path='/register' element={<RegisterForm /> } />
  < Route path='/dev' element={<Dev /> } />
  <Route path='/contact' element={<Contact />}  />
  <Route path='/portfolio' element={<PortFolio />}  />
    
  </Routes>
    
    <Footer />
    </Router>
    
  );
}

export default App;
