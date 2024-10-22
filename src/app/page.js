// src/app/page.js
"use client";  // Add this line to mark the component as a Client Component

import { useEffect, useState } from 'react';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Full-width banner */}
      <div className="banner">
        <nav className="navbar">
          <div className="social-media">
            <a href="mailto:imre.iddatasolutions@gmail.com">
              <img src="/assets/images/social-icon1.png" alt="Email Icon" className="icon-white" />
            </a>
            <a href="#">
              <img src="/assets/images/social-icon2.png" alt="Social Media 2" className="icon-white" />
            </a>
            <a href="#">
              <img src="/assets/images/social-icon3.png" alt="Social Media 3" className="icon-white" />
            </a>
          </div>
        </nav>
        <img src="/assets/images/Copy of Background_bright (1).png" alt="Banner Image" className="banner-image" />
      </div>

      {/* Logo section below the banner */}
      <section className="logo-section">
        {/* Conditionally render either the row of logos or the circular arrangement based on scroll position */}
        {!isScrolled ? (
          <div className="logo-container">
            <img src="/assets/images/Data Management.png" alt="Logo 1" />
            <img src="/assets/images/Data Governance.png" alt="Logo 2" />
            <img src="/assets/images/Project Management.png" alt="Logo 3" />
            <img src="/assets/images/Programming.png" alt="Logo 4" />
            <img src="/assets/images/Business Intelligence.png" alt="Logo 5" />
            <img src="/assets/images/ProductDataExpert.png" alt="Logo 6" />
          </div>
        ) : (

          <div className="content-wrapper">
            {/* Left Section - Text */}
            <div className="text-section">
              <h2>Hi, I’m Imre</h2>
              <p>
              I breathe data through a blend of sound <strong> business acumen, excellent analytical- and cross-functional communication skills</strong>.
              </p>
              <br />
              <p>
              As a seasoned, T-shaped, data professional I have <strong>15 years of experience </strong>in a wide variety of data roles. 
              The common denominator; focus on delivering <strong>value-generating data-assets.</strong>
              </p>
              <br />
              <ul>
                <li>Setting up, managing or coaching data teams</li>
                <li>Project- and Stakeholder Management</li>
                <li>Blockchain, JavaScript and/or Python development</li>
                <li>Build & enable actionable (self-service) BI</li>
                <li>(Product) data quality programs</li>
                <li>Implementation of data-standards</li>
              </ul>
            </div>

            {/* Right Section - Circular Logo Layout */}
            <div className="circle-container">
              {/* Venn Diagram in the center */}
              <img src="/assets/images/VennDiagram.png" alt="Venn Diagram" className="venn-diagram" />

              {/* Logos in circular layout */}
              <img src="/assets/images/Data Management.png" className="circle-image" style={{ '--angle': '240deg' }} alt="Image 1" />
              <img src="/assets/images/Data Governance.png" className="circle-image" style={{ '--angle': '300deg' }} alt="Image 2" />
              <img src="/assets/images/Project Management.png" className="circle-image" style={{ '--angle': '0deg' }} alt="Image 3" />
              <img src="/assets/images/Programming.png" className="circle-image" style={{ '--angle': '120deg' }} alt="Image 4" />
              <img src="/assets/images/Business Intelligence.png" className="circle-image" style={{ '--angle': '60deg' }} alt="Image 5" />
              <img src="/assets/images/ProductDataExpert.png" className="circle-image" style={{ '--angle': '180deg' }} alt="Image 6" />
            </div>
          </div>

        )}
      </section>

      <div style={{ height: '1500px' }}></div> {/* Adds a 1500px height whitespace at the bottom */}
    </div>
  );
}
