import './App.css';
import React from 'react';

import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import OurServices from './components/OurServices';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <OurServices />
    </div>
  );
}

export default App;
