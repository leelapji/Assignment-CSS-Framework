import React from 'react';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <MainContent className="flex-grow" />
      <Footer />
    </div>
  );
}

export default App;
