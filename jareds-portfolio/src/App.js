import React, { useState } from 'react';
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

import Navbar from './Components/Navbar';
import Porfolio from './Components/Porfolio';
import Resume from './Components/Resume';

function App() {
  const [currentPage, setCurrentPage] = useState('About');
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About handlePageChange={handlePageChange} />;
    }
    if (currentPage === 'Portfolio') {
      return <Porfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />


  };
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      <div className='gradient'>
      {renderPage()}
      <Footer />
    </div>
    </>

  );
}

export default App;
