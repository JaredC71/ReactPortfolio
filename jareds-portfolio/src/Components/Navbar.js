import React from "react";
import '../css/Navbar.css';
function Navbar({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <p className='nav-link' id="brand">
          Jared Colletti
        </p>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className={currentPage === 'About' ? 'nav-link active' : 'nav-link'} aria-current="page" href="#about" onClick={() => handlePageChange('About')}>
              About
            </a>
            <a className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'} aria-current="page" href="#portfolio" onClick={() => handlePageChange('Portfolio')}>
              Portfolio
            </a>
            <a className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'} aria-current="page" href="#contact" onClick={() => handlePageChange('Contact')}>
              Contact
            </a>
            <a className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'} aria-current="page" href="#resume" onClick={() => handlePageChange('Resume')}>
              Resume
            </a>
           
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
