import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'; // custom styles for gradient background

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About Me' },
    { path: '/projects', name: 'Projects' },
    { path: '/contact', name: 'Contact' }
  ];

  return (
    <div className="animated-bg min-vh-100">
      <nav className="navbar navbar-expand-lg navbar-dark py-3">
        <div className="container">
          {/* Gradient Text Brand Name */}
          <Link className="navbar-brand fs-3 fw-bold gradient-text" to="/">
            PortXFolio
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav gap-3">
              {navItems.map((item) => (
                <motion.li
                  className="nav-item"
                  key={item.path}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={item.path}
                    className={`nav-link fw-medium ${
                      location.pathname === item.path
                        ? 'text-white border-bottom border-2 border-white'
                        : 'text-light'
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
