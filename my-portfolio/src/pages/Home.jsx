import React from 'react';
import { motion } from 'framer-motion';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="hero-section d-flex align-items-center justify-content-center text-center">
      <div className="container">
        <motion.h1
          className="display-3 fw-bold gradient-text"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm <span className="name-highlight">Sunitha</span>
        </motion.h1>

        <motion.p
          className="lead fs-4 text-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          A passionate ReactJS Developer crafting beautiful web experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <Link to="/projects" className="btn btn-outline-light btn-lg mt-4">
            View My Work
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
