import React from 'react';
import './pages/style.css';

function Nav({ currentPage, handlePageChange }) {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#home" onClick={() => handlePageChange('Home')}
                                className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#moods" onClick={() => handlePageChange('Moods')}
                                className={currentPage === 'Moods' ? 'nav-link active' : 'nav-link'}>Mood Boards</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#materials" onClick={() => handlePageChange('Materials')}
                                className={currentPage === 'Materials' ? 'nav-link active' : 'nav-link'}>Materials & Furnishings</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#spaceplans" onClick={() => handlePageChange('SpacePlans')}
                                className={currentPage === 'SpacePlans' ? 'nav-link active' : 'nav-link'}>Space Plans</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#renderings" onClick={() => handlePageChange('Renderings')}
                                className={currentPage === 'Renderings' ? 'nav-link active' : 'nav-link'}>Renderings</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#cadworks" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                CAD Works
                            </a>
                            <ul class="dropdown-menu">
                                <li>
                                    <a class="dropdown-item" href="#cadhomeoffice" onClick={() => handlePageChange('CADHomeOffice')}
                                        className={currentPage === 'CADHomeOffice' ? 'nav-link active' : 'nav-link'}>CAD Home Office</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#cadmgroffice" onClick={() => handlePageChange('CADMgrOffice')}
                                        className={currentPage === 'CADMgrOffice' ? 'nav-link active' : 'nav-link'}>CAD Manager Office</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#georgianhome" onClick={() => handlePageChange('GeorgianHome')}
                                        className={currentPage === 'GeorgianHome' ? 'nav-link active' : 'nav-link'}>Georgian Home</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#librarywall" onClick={() => handlePageChange('LibraryWall')}
                                        className={currentPage === 'LibraryWall' ? 'nav-link active' : 'nav-link'}>Library Wall</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#residentialhome" onClick={() => handlePageChange('ResidentialHome')}
                                        className={currentPage === 'ResidentialHome' ? 'nav-link active' : 'nav-link'}>Residential Home</a>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#projects" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Projects
                            </a>
                            <ul class="dropdown-menu">
                                <li>
                                    <a class="dropdown-item" href="#alysbeachadacloset" onClick={() => handlePageChange('AlysBeachADACloset')}
                                        className={currentPage === 'AlysBeachADACloset' ? 'nav-link active' : 'nav-link'}>Alys Beach ADA Closet</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#alysbeachfireplace" onClick={() => handlePageChange('AlysBeachFireplace')}
                                        className={currentPage === 'AlysBeachFireplace' ? 'nav-link active' : 'nav-link'}>Alys Beach Fireplace</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#alysbeachlibrarywall" onClick={() => handlePageChange('AlysBeachLibraryWall')}
                                        className={currentPage === 'AlysBeachLibraryWall' ? 'nav-link active' : 'nav-link'}>Alys Beach Library Wall</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#homeoffice" onClick={() => handlePageChange('HomeOffice')}
                                        className={currentPage === 'HomeOffice' ? 'nav-link active' : 'nav-link'}>Home Office</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#manageroffice" onClick={() => handlePageChange('ManagerOffice')}
                                        className={currentPage === 'ManagerOffice' ? 'nav-link active' : 'nav-link'}>Manager Office</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#publiclibrary" onClick={() => handlePageChange('PublicLibrary')}
                                        className={currentPage === 'PublicLibrary' ? 'nav-link active' : 'nav-link'}>Public Library</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#santaanaprimary" onClick={() => handlePageChange('SantaAnaPrimary')}
                                        className={currentPage === 'SantaAnaPrimary' ? 'nav-link active' : 'nav-link'}>Santa Ana Primary</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#vignette" onClick={() => handlePageChange('Vignette')}
                                        className={currentPage === 'Vignette' ? 'nav-link active' : 'nav-link'}>Vignette</a>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#about" onClick={() => handlePageChange('About')}
                                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#concepts" onClick={() => handlePageChange('Concepts')}
                                className={currentPage === 'Concepts' ? 'nav-link active' : 'nav-link'}>Concepts</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}


export default Nav;