import React from 'react';
import './pages/style.css';

function Nav({ currentPage, handlePageChange }) {
    return (
        <nav className="navbar navbar-expand-lg mx-auto bg-body-tertiary">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="d-flex justify-content-center">
                        <ul className="navbar-nav justify-content-between">
                            <li className="nav-item">
                                <a className="nav-link  active" aria-current="page" href="#home" onClick={() => handlePageChange('Home')}
                                    className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>HOME</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#concepts" onClick={() => handlePageChange('Concepts')}
                                    className={currentPage === 'Concepts' ? 'nav-link active' : 'nav-link'}>CONCEPTS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#moods" onClick={() => handlePageChange('Moods')}
                                    className={currentPage === 'Moods' ? 'nav-link active' : 'nav-link'}>MOOD BOARDS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#materials" onClick={() => handlePageChange('Materials')}
                                    className={currentPage === 'Materials' ? 'nav-link active' : 'nav-link'}>MATERIALS & FURNISHINGS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#spaceplans" onClick={() => handlePageChange('SpacePlans')}
                                    className={currentPage === 'SpacePlans' ? 'nav-link active' : 'nav-link'}>SPACE PLANS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#renderings" onClick={() => handlePageChange('Renderings')}
                                    className={currentPage === 'Renderings' ? 'nav-link active' : 'nav-link'}>RENDERINGS</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link  dropdown-toggle" href="#cadworks" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    CAD WORKS
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#cadhomeoffice" onClick={() => handlePageChange('CADHomeOffice')}
                                            className={currentPage === 'CADHomeOffice' ? 'nav-link active' : 'nav-link'}>HOME OFFICE</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#cadmgroffice" onClick={() => handlePageChange('CADMgrOffice')}
                                            className={currentPage === 'CADMgrOffice' ? 'nav-link active' : 'nav-link'}>MANAGER OFFICE</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#georgianhome" onClick={() => handlePageChange('GeorgianHome')}
                                            className={currentPage === 'GeorgianHome' ? 'nav-link active' : 'nav-link'}>GEORGIAN HOME</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#librarywall" onClick={() => handlePageChange('LibraryWall')}
                                            className={currentPage === 'LibraryWall' ? 'nav-link active' : 'nav-link'}>LIBRARY WALL</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#residentialhome" onClick={() => handlePageChange('ResidentialHome')}
                                            className={currentPage === 'ResidentialHome' ? 'nav-link active' : 'nav-link'}>RESIDENTIAL HOME</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link  dropdown-toggle" href="#projects" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    FULL PROJECTS
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#alysbeachadacloset" onClick={() => handlePageChange('AlysBeachADACloset')}
                                            className={currentPage === 'AlysBeachADACloset' ? 'nav-link active' : 'nav-link'}>ALYS BEACH ADA CLOSET</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#alysbeachfireplace" onClick={() => handlePageChange('AlysBeachFireplace')}
                                            className={currentPage === 'AlysBeachFireplace' ? 'nav-link active' : 'nav-link'}>ALYS BEACH FIREPLACE</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#alysbeachlibrarywall" onClick={() => handlePageChange('AlysBeachLibraryWall')}
                                            className={currentPage === 'AlysBeachLibraryWall' ? 'nav-link active' : 'nav-link'}>ALYS BEACH LIBRARY WALL</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#homeoffice" onClick={() => handlePageChange('HomeOffice')}
                                            className={currentPage === 'HomeOffice' ? 'nav-link active' : 'nav-link'}>HOME OFFICE</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#manageroffice" onClick={() => handlePageChange('ManagerOffice')}
                                            className={currentPage === 'ManagerOffice' ? 'nav-link active' : 'nav-link'}>MANAGER OFFICE</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#publiclibrary" onClick={() => handlePageChange('PublicLibrary')}
                                            className={currentPage === 'PublicLibrary' ? 'nav-link active' : 'nav-link'}>PUBLIC LIBRARY</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#santaanaprimary" onClick={() => handlePageChange('SantaAnaPrimary')}
                                            className={currentPage === 'SantaAnaPrimary' ? 'nav-link active' : 'nav-link'}>SANTA ANA PRIMARY</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#vignette" onClick={() => handlePageChange('Vignette')}
                                            className={currentPage === 'Vignette' ? 'nav-link active' : 'nav-link'}>VIGNETTE</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#about" onClick={() => handlePageChange('About')}
                                    className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>ABOUT ME</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}


export default Nav;