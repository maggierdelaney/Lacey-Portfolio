import React, { useState } from 'react';
import Nav from './Nav';
import Home from './pages/Home';
import Concepts from './pages/Concepts';
import Moods from './pages/Moods';
import Materials from './pages/Materials';
import SpacePlans from './pages/SpacePlans';
import Renderings from './pages/Renderings';
import CadWorks from './pages/CadWorks';
import Projects from './pages/Projects';
import About from './pages/About';
import './pages/style.css';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Concepts') {
      return <Concepts />;
    }
    if (currentPage === 'Moods') {
      return <Moods />;
    }
    if (currentPage === 'Materials') {
        return <Materials />;
      }
      if (currentPage === 'SpacePlans') {
        return <SpacePlans />;
      }
      if (currentPage === 'Renderings') {
        return <Renderings />;
      }
      if (currentPage === 'CadWorks') {
        return <CadWorks />;
      }
      if (currentPage === 'Projects') {
        return <Projects />;
      }
    return <About />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
