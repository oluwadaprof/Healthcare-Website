import './App.css';
import React from 'react';

import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import OurServices from './components/OurServices';
import LeadingHealth from './components/LeadingHealth';
import DownloadSection from './components/DownloadSection';
import CustomerCard from './components/CustomerCard';
import Article from './components/Article';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <OurServices />
      <LeadingHealth />
      <DownloadSection />
      <CustomerCard />
      <Article />
    </div>
  );
}

export default App;
