import React from 'react';
import './About.css';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="about-section animated-bg text-white">
      <div className="container py-5">
        <motion.div
          className="about-card p-4 rounded-4"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="gradient-text mb-3">About Me</h2>
          <p>
            Hi! I'm a passionate <strong>React Developer</strong> with a knack for building clean, responsive, and engaging user interfaces. My goal is to blend creativity with code and deliver seamless digital experiences.
          </p>
          <p>
            From creating smart applications to collaborating in fast-paced teams, I enjoy turning challenges into code. When I'm not coding, I explore design trends, learn new tech, and build passion projects.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
