import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="animated-bg">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand gradient-text" to="/">PortXFolio</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/projects">Projects</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero-section d-flex flex-column align-items-center justify-content-center text-center">
        <h1 className="gradient-text display-4 fw-bold">Hi, I'm a React Developer</h1>
        <p className="lead text-white">Crafting clean and modern UIs</p>
        <Link to="/projects" className="btn btn-outline-light mt-3">View Projects</Link>
      </div>
    </div>
  );
};

export default HeroSection;
