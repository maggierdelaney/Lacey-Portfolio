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
//CADWorks dropdown items
import CADHomeOffice from './pages/CADWorks/CADHomeOffice';
import CADMgrOffice from './pages/CADWorks/CADMgrOffice';
import GeorgianHome from './pages/CADWorks/GeorgianHome';
import LibraryWall from './pages/CADWorks/LibraryWall';
import ResidentialHome from './pages/CADWorks/ResidentialHome';
//Projects dropdown components
import AlysBeachADACloset from './pages/Projects/AlysBeachADACloset';
import AlysBeachFireplace from './pages/Projects/AlysBeachFireplace';
import AlysBeachLibraryWall from './pages/Projects/AlysBeachLibraryWall';
import HomeOffice from './pages/Projects/HomeOffice';
import ManagerOffice from './pages/Projects/ManagerOffice';
import PublicLibrary from './pages/Projects/PublicLibrary';
import SantaAnaPrimary from './pages/Projects/SantaAnaPrimary';
import Vignette from './pages/Projects/Vignette';

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
      if (currentPage === 'CADHomeOffice') {
        return <CADHomeOffice />;
      }
      if (currentPage === 'CADMgrOffice') {
        return <CADMgrOffice />;
      }
      if (currentPage === 'GeorgianHome') {
        return <GeorgianHome />;
      }
      if (currentPage === 'LibraryWall') {
        return <LibraryWall />;
      }
      if (currentPage === 'ResidentialHome') {
        return <ResidentialHome />;
      }
      if (currentPage === 'AlysBeachADACloset') {
        return <AlysBeachADACloset />;
      }
      if (currentPage === 'AlysBeachFireplace') {
        return <AlysBeachFireplace />;
      }
      if (currentPage === 'AlysBeachLibraryWall') {
        return <AlysBeachLibraryWall />;
      }
      if (currentPage === 'HomeOffice') {
        return <HomeOffice />;
      }
      if (currentPage === 'ManagerOffice') {
        return <ManagerOffice />;
      }
      if (currentPage === 'PublicLibrary') {
        return <PublicLibrary />;
      }
      if (currentPage === 'SantaAnaPrimary') {
        return <SantaAnaPrimary />;
      }
      if (currentPage === 'Vignette') {
        return <Vignette />;
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
