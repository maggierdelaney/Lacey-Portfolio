import React from 'react';
import './pages/style.css';

function Nav({ currentPage, handlePageChange }) {
    return (
        <nav class="navbar bg-body-tertiary fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand" href="#home">Lacey Marsh Interior Design</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Navigation</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
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
                            <li class="nav-item">
                                <a class="nav-link" href="#cadworks" onClick={() => handlePageChange('CadWorks')}
                                    className={currentPage === 'CadWorks' ? 'nav-link active' : 'nav-link'}>Cad Works</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#projects" onClick={() => handlePageChange('Projects')}
                                    className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}>Projects</a>
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
                        <form class="d-flex mt-3" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                                <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Nav;