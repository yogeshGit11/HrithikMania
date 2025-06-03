import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="logo-image me-2">
        <img src="hrxlogo.jpg" className="img-fluid logo" alt="Logo" />
      </div>

      <a className="navbar-brand" href="/">
        <span style={{ fontFamily: 'castellar', fontSize: 30 }}>
          <i style={{ color: 'mediumaquamarine' }}>HritikMania</i>
        </span>
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              <span className="navitem">Home</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/findmovies">
              <span className="navitem">Explore HR Movies</span>
            </a>
          </li>

          <li className="nav-item">
            <a
              className="nav-link"
              href="https://hrxbrand.com/home"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="navitem">Visit HRXbrand</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/about">
              <span className="navitem">About</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/contact">
              <span className="navitem">Contact & Follow</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
