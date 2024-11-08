"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Footer from "./components/Footer";

export default function Home() {
  const [showQrCode, setShowQrCode] = useState(false);
  const [showLetsTalk, setShowLetsTalk] = useState(false); // New state for "Let's Talk!" popup
  const [isHovered, setIsHovered] = useState(false);

  const showQrCodeModal = () => {
    setShowQrCode(true);
  };

  const closeQrCodeModal = () => {
    setShowQrCode(false);
  };

  const showLetsTalkModal = () => {
    setShowLetsTalk(true);
  };

  const closeLetsTalkModal = () => {
    setShowLetsTalk(false);
  };

  useEffect(() => {
    const offset = 100; // Adjust this value based on the height of your header or navbar
    const links = document.querySelectorAll(".logo-container a, .scroll-link");

    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const sectionId = link.getAttribute("href").substring(1);
        const section = document.getElementById(sectionId);

        if (section) {
          const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({
            top: sectionTop,
            behavior: "smooth",
          });
        }
      });
    });

    // Cleanup event listeners on component unmount
    return () => {
      links.forEach((link) => link.removeEventListener("click", (e) => {}));
    };
  }, []);

  const qrCodeUrl = "https://api.qrserver.com/v1/create-qr-code/?data=tel:0031613454378&size=200x200";

  // Load the Calendly script dynamically when "Let's Talk!" is opened
  useEffect(() => {
    if (showLetsTalk) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script); // Clean up the script on close
      };
    }
  }, [showLetsTalk]);

  return (
    <div>
      {/* Full-width banner */}
      <div className="banner">
        <div className="navbar">
          <div className="social-media-wrapper">
            <div className="social-media">
              <a href="#" onClick={showQrCodeModal}>
                <img src="/assets/images/Telephone.png" alt="Telephone Icon" className="icon-white" />
              </a>
              <a href="mailto:imre.iddatasolutions@gmail.com">
                <img src="/assets/images/email-icon.png" alt="Email Icon" className="icon-white" />
              </a>
              <a href="https://www.linkedin.com/in/imredekker/" target="_blank" rel="noopener noreferrer">
                <img src="/assets/images/linkedin-icon.png" alt="LinkedIn Icon" className="icon-white" />
              </a>
              <a href="https://x.com/NextGenDataLead" target="_blank" rel="noopener noreferrer">
                <img src="/assets/images/twitter-icon.png" alt="Twitter Icon" className="icon-white" />
              </a>
              <a href="https://github.com/NextGenDataLead" target="_blank" rel="noopener noreferrer">
                <img src="/assets/images/github-icon.png" alt="GitHub Icon" className="icon-white" />
              </a>
            </div>
            <a href="/assets/documents/Curriculum Vitae Imre Dekker_2024 English.pdf" download className="resume-button">
              Download My Resume
            </a>
          </div>
        </div>

        <img src="/assets/images/Banner.png" alt="Banner Image" className="banner-image" />

        {/* Button overlaying the banner */}
        <button className="banner-button" onClick={showLetsTalkModal}>Let's talk!</button>
      </div>

      {/* Modal for phone number with QR code */}
      {showQrCode && (
        <div className="modal-overlay" onClick={closeQrCodeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <span className="close" onClick={closeQrCodeModal}>&times;</span>
              <h2>Contact Number</h2>
              <a href="tel:+31613454378" className="phone-number">+316 1345 4378</a>
              <img src={qrCodeUrl} alt="QR Code for Phone Number" />
              <button className="modal-button" onClick={closeQrCodeModal}>Close</button>
          </div>
        </div>
      )}

      {/* "Let's Talk!" Popup Modal */}
      {showLetsTalk && (
        <div className="modal-overlay" onClick={closeLetsTalkModal}>
          <div className="lets-talk-modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeLetsTalkModal}>&times;</span>
            <div className="lets-talk-columns">
              {/* Column 1 - Calendly */}
              <div className="lets-talk-column calendly-column">
                <h2>Schedule a Call</h2>
                <div className="calendly-inline-widget" data-url="https://calendly.com/imre-iddatasolutions?background_color=617E82&text_color=ffffff" style={{ minWidth: "320px", height: "700px" }}></div>
              </div>
              {/* Column 2 - Combined Contact Info */}
              <div className="lets-talk-column contact-column">
                <div className="phone-info">
                  <h2><img src="/assets/images/Telephone.png" alt="Phone Icon" style={{ width: '20px', marginRight: '8px' }}/> Contact Number</h2>
                  <a href="tel:+31613454378" className="phone-number">+316 1345 4378</a>
                  <img src={qrCodeUrl} alt="QR Code for Phone Number" />
                </div>
                <hr className="separator" />
                <div className="email-info">
                  <h2><img src="/assets/images/email-icon.png" alt="Email Icon" style={{ width: '20px', marginRight: '8px' }}/> Email</h2>
                  <a href="mailto:imre.iddatasolutions@gmail.com" className="contact-link">imre.iddatasolutions@gmail.com</a>
                </div>
              </div>
            </div>
            <button className="modal-button" onClick={closeLetsTalkModal}>Close</button>
          </div>
        </div>
      )}

      {/* Logo section below the banner - always visible */}
      <section className="logo-section">
        <div className="logo-container">
          <a href="#data-management" data-section="data-management" className="icon-wrapper">
            <img src="/assets/images/Data_Management_icon.png" alt="Data Management Icon" />
          </a>
          <a href="#data-governance" data-section="data-governance" className="icon-wrapper">
            <img src="/assets/images/Data_Governance_icon.png" alt="Data Governance Icon" />
          </a>
          <a href="#project-management" data-section="project-management" className="icon-wrapper">
            <img src="/assets/images/Project_Management_icon.png" alt="Project Management Icon" />
          </a>
          <a href="#web3-programming" data-section="web3-programming" className="icon-wrapper">
            <img src="/assets/images/Programming_icon.png" alt="Programming Icon" />
          </a>
          <a href="#bi-analytics" data-section="bi-analytics" className="icon-wrapper">
            <img src="/assets/images/Business_Intelligence_icon.png" alt="Business Intelligence & Analytics Icon" />
          </a>
          <a href="#product-data-expert" data-section="product-data-expert" className="icon-wrapper">
            <img src="/assets/images/ProductDataExpert_icon.png" alt="Product Data Expert Icon" />
          </a>
        </div>
      </section>

      {/* Content section with text and Venn diagram */}
      <section className="introduction-section">
        <div className="introduction-section-text-ven">
          {/* Left Section - Text with Image */}
          <div className="introduction-section-text">
            <h2>Hi, I’m Imre</h2>
            <img src="/assets/images/personal_picture.png" alt="Personal Picture" className="personal-picture" />
            <p>
              I breathe data through a blend of sound <strong>business acumen, excellent analytical- and cross-functional communication skills</strong>.
            </p>
            <br />
            <p>
              As a seasoned, T-shaped data professional with <strong>15 years of experience</strong> across diverse data roles and sectors, I thrive in projects that are stakeholder-intensive (international and culturally sensitive), where my skills achieve <strong>impactful results</strong>. My focus remains on delivering <strong>value-generating data assets</strong> and fostering environments that align with strategic goals.
            </p>
            <br />
            <p>
              Through my <strong>extensive network</strong>, I can also provide a (team of) developer(s) skilled in any of the top programming languages to meet project demands efficiently and effectively.
            </p>
          </div>

          {/* Right Section - Venn Diagram and Skills List */}
          <div className="venn-diagram-wrapper">
            <img src="/assets/images/VennDiagram.png" alt="Venn Diagram" className="venn-diagram" />
            
            {/* Skills List Below Venn Diagram */}
            <div className="skills-list">
              <ul>
                <li>Setup, manage or coach data teams</li>
                <li>Project-, Product- and Stakeholder Management</li>
                <li>Blockchain, JavaScript and/or Python development</li>
                <li>Build & enable actionable (self-service) BI</li>
                <li>Data quality programs</li>
                <li>Implementation of data-standards</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="testimonials-title">
          <h2>Testimonials</h2>
          <button className="lets-talk-button" onClick={showLetsTalkModal}>Let's Talk!</button>
        </div>

        <div
          className={`testimonials-container ${isHovered ? "paused" : ""}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >          
          {/* Testimonial 1 */}
          <div className="testimonial">
            <img src="/assets/images/DianaElRafai.png" alt="Client 1" className="testimonial-photo" />
            <div className="testimonial-text">
              <h3>Diana ElRafai</h3>
              <p className="testimonial-title">Customer Success Manager</p>
              <p className="testimonial-content">
                "After stepping in as Project Manager, Imre quickly turned around a complex project that required careful coordination between our off-shore development team and the client. 
                <br/><br/>
                His proactive approach in aligning deliverables with client expectations resulted in a smooth communication flow and high client satisfaction. Remarkably, he achieved +/-40% reduction in development time through his efficiency, interpersonal skills and strategic oversight. 
                <br/><br/>
                
                Imre's ability to restore trust and deliver results under challenging circumstances has been invaluable"
              </p>
            </div>
          </div>

          <div className="testimonial">
            <img src="/assets/images/CryptoSlavvv.png" alt="Client 2" className="testimonial-photo" />
            <div className="testimonial-text">
              <h3>CryptoSlavv</h3>
              <p className="testimonial-title">Founder, SEIPOCALYPSE</p>
              <p className="testimonial-content">
                "The collaboration with Imre and DappAstra on our gaming project was very positive. From the initial discussion to consulting, project management, meeting timelines, and quickly implementing feedback into the product. 
                <br/><br/>
                I can highly recommend Imre and DappAstra if you value good guidance and support throughout the project implementation."
              </p>
            </div>
          </div>

          <div className="testimonial">
            <img src="/assets/images/GurpreetSingh.png" alt="Client 3" className="testimonial-photo" />
            <div className="testimonial-text">
              <h3>Gurpreet Singh</h3>
              <p className="testimonial-title">Solutions Architect, SettleMint India</p>
              <p className="testimonial-content">
                "As Solutions Architect at SettleMint I have got to know Imre as a dedicated Project Manager able to skillfully bridge the gap between client requirements and our full-stack, off-shore, development team. 
                <br/><br/>
                His exceptional interpersonal, analytical and web3 skills enable him able to effectively mange stakeholders, tackle challenges and exploit opportunities, making him a highly effective and reliable collaborator."
              </p>
            </div>
          </div>

          <div className="testimonial">
            <img src="/assets/images/Massimo-Terranova.png" alt="Client 4" className="testimonial-photo" />
            <div className="testimonial-text">
              <h3>Massimo Terranova</h3>
              <p className="testimonial-title">Digital Projects Data Specialist, Grohe</p>
              <p className="testimonial-content">
                "My experience in working with Imre has been very positive. The project management he provides is highly professional and the quality of work meets expectations, often exceeding them. Specialization in the sanitary business greatly facilitates communication and requests for support are promptly responded to"
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Reusable sections with alternating content */}
      <motion.section
        className="service-sections section1"
        id="data-management"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 0.75, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="section-title">
          <h2>(Data) Management</h2>
        </div>

        <div className="picture">
          <img src="/assets/images/Data_Management.webp" alt="Data Management" />
        </div>


        <div className="section1-text-box">
          {/* <br/><br/><br/> */}
          <h3><i>Co-founder & COO</i></h3>
          <ul>
            <li>Co-founder & COO</li>
            <li>Built ever-growing network of freelance developers</li>
            <li>
              Spearhead Project Management & Quality control 
              (see <a href="#project-management" className="scroll-link"> Project Management section</a>)
            </li>
            <li>Developed Customer Journey (developers & clients)</li>
            <li>Requirements engineering & client management</li>
            <li>3 grants from The Graph</li>
          </ul>
          
          <h3 className="column-break"><i>Data Governance Analyst</i></h3>
          <ul>
            <li>Support setup of Data Management department</li>
            <li>Coach in-house Data Manager</li>
          </ul>
          
          <br/>

          <h3><i>Data Manager</i></h3>
          <ul>
            <li>185% increase in data quality</li>
            <li>+€100K data (quality) related revenue</li>
            <li>Product data standard implementation (GS1)</li>
            <li>BI-suite Implementation</li>
            <li>PIM Implementation</li>
            <li>Master- & meta data management</li>
            <li>Manage decentralized data team</li>
            <li>Internal and external stakeholder management</li>
            <li>Support omni-channel implementation</li>
            <li>Co-Development of Group KPIs/OKR and controls</li>
          </ul>

          <button className="download-resume-button" onClick={showLetsTalkModal}>Reach out</button>

        </div>

        </motion.section>



      {/* Reusable sections with alternating content */}
      <motion.section
        className="service-sections section1"
        id="data-governance"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 0.75, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="section-title">
          <h2>Data Governance</h2>
        </div>


        <div className="section1-text-box">
          {/* <br/><br/><br/> */}

          <h3><i>Data Govenance Analyst</i></h3>
          <ul>
            <li>Initiate Product Data Governance</li>
            <li>Data Quality - Use-case (import- & export codes):
              <ul>
                <li>Root-cause analysis </li>
                <li>Data quality metrics established</li>
                <li>Data Flow Diagram</li>
                <li>Stakeholder identification</li>
              </ul>
            </li>
            <li>Custom Data Quality Framework</li>
            <li>Managed automation of material creation SAP</li>
            <li>Implemented data glossary</li>
            <li>Released vision on organization, architecture, data quality approach and dashboarding</li>
          </ul>

          <h3 className="column-break"><i>Master Data Governance Lead</i></h3>
          <ul>
            <li>Initiate product master data governance</li>
            <li>Program manager for a hybrid program of top-down and bottom up projects</li>
            <li>Managed automation of material creation SAP</li>
            <li>Implemented data glossary</li>
            <li>Released vision on organization, architecture, data quality approach and dashboarding</li>
          </ul>

          <br/>
          <h3><i>Data Governance analyst </i></h3>
          <ul>
            <li>Data governance assessment</li>
            <li>Increased product identification with EAN/GTIN</li>
            <li>Identified and connected stakeholders</li>
            <li>Product data standard selection</li>
            <li>PIM-DAM Selection</li>
            <li>Report on next steps</li>
          </ul>

          <button className="download-resume-button" onClick={showLetsTalkModal}>Reach out</button>
        </div>

        <div className="picture">
          <img src="/assets/images/Data_Governance.webp" alt="Data Governance" />
        </div>

      </motion.section>



      {/* Reusable sections with alternating content */}
      <motion.section
        className="service-sections section1"
        id="project-management"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 0.75, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="section-title">
          <h2>Project Management</h2>
        </div>

        <div className="picture">
          <img src="/assets/images/Project_Management.webp" alt="Project Management" />
        </div>


        <div className="section1-text-box">
          {/* <br/><br/><br/> */}

          <h3><i>Project Manager Tokenization/RWA</i></h3>
          <ul>
            <li>Tokenization of private equity shares </li>
            <li>Project troubleshooter: high value client, underperforming former PM </li>
            <li>Managed offshore devevlopment team </li>
            <li>Development time vs budget -37% </li>
            <li>Client- & stakeholder management </li>
            <li>Oversaw the design and implementation</li>
            <li>Ensured compliancy </li>
          </ul>

          <br/>
          
          <h3><i>Co-founder & COO</i></h3>
          <ul>
            <li>Game development (TON) </li>
            <li>Multiple grants The Graph</li>
            <li>Chainlink hackathon </li>
            <li>Copy Trader</li>
            <li>Build-a-bot (low code trading bot builder)</li>
            <li>True randomization</li>
            <li>Decentralized crowd sale</li>
            <li>Token generator </li>
            <li>DappAstra NFT collection</li>
          </ul>

          <br/>

          <h3 className="column-break"><i>Project lead Data Quality</i></h3>
          <ul>
            <li>GS1 data quality projects </li>
            <li>100% data compliancy for many companies</li>
            <li>Clients: a.o. Grohe, Van Marcke, Orkla House Care, European Aerosols, PGB. </li>
          </ul>

          <br/>

          <h3><i>Project Manager Data Quality tooling</i></h3>
          <ul>
            <li>Build tools for quick and actionable insights into data quality (GS1) </li>
            <li>Onboarding time -50% (=2 weeks FTE)</li>
            <li>Reduced quarterly maintenance time -45% </li>
            <li>Integrated three predominant datasources</li>
            <li>Enabled self-service for consultants </li>
          </ul>


          <br/>

          <h3><i>Data Manager</i></h3>
          <ul>
            <li>Data quality program</li>
            <li>Product data standard implementation (GS1)</li>
            <li>Implemented group-wide BI-suite & PIM</li>
          </ul>

          <button className="download-resume-button" onClick={showLetsTalkModal}>Reach out</button>

        </div>
      </motion.section>



      {/* Reusable sections with alternating content */}
      <motion.section
        className="service-sections section1"
        id="web3-programming"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 0.75, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="section-title">
          <h2>(Web3) Programming</h2>
        </div>


        <div className="section1-text-box">
          {/* <br/><br/><br/> */}

          <p>
          <strong>Through my extensive network, I can provide a (team of) developer(s) skilled in any of the top programming languages to meet project demands efficiently and effectively.</strong>
          </p>

          <br/><br/>

          <h3><i>Python Automation Developer</i></h3>
          <ul>
            <li>Automate GS1 updates into RiverSand PIM with Python</li>
            <li>Reduced quarterly returning workload by +75%, equalling +1 week</li>
            <li>Generate sequential import files conform cutom process</li>
            <li>Created backlog for bottleneck-changes for prioritizing Data Governance</li>
            <li>Created executable with front-end for corporate use </li>
          </ul>

          <h3 className="column-break"><i>Web3 developer - Personal Portfolio</i></h3>
          <ul>
            <li>Copytrader</li>
            <li>AMM / Exchange</li>
            <li>NFT Collection</li>
            <li>DAO (Decentralized Autonomous Organization)</li>
            <li>ERC20 token </li>
          </ul>

          <br/>


          <h3><i>Data Manager</i></h3>
          <p>
          Daily FTP client stock-feeds for replenishments using T-SQL, SSIS, and BIML
          </p>

          <br/>
          <h3><i>Business Intelligence Analyst</i></h3>
          <p>
          Developed an Excel/VBA-based calculator tool to assist account management and sourcing
          </p>

          <button className="download-resume-button" onClick={showLetsTalkModal}>Reach out</button>

        </div>

        <div className="picture">
          <img src="/assets/images/Programming.webp" alt="Programming" />
        </div>

      </motion.section>


      {/* Reusable sections with alternating content */}
      <motion.section
        className="service-sections section1"
        id="bi-analytics"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 0.75, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="section-title">
          <h2>BI & Analytics</h2>
        </div>

        <div className="picture">
          <img src="/assets/images/BI_Analytics.webp" alt="Business Intellgence and Analytics" />
        </div>


        <div className="section1-text-box">
          {/* <br/><br/><br/> */}
          <h3><i>Business Analyst</i></h3>
          <ul>
            <li>Requirements engineering & challenging business</li>
            <li>Data sourcing</li>
            <li>Produce MVP in PowerBI</li>
            <li>Responsible for meeting development expectations </li>
            <li>Liason between business, backend- & front-end developers</li>
            <li>Delivered 5 dashboards in 4 months time</li>
          </ul>

          <br/>
          <h3><i>Consultancy</i></h3>
          <ul>
            <li>Produced several dashboards for the ABN-Amro and Rabobank and the Ministiry of Internal affairs</li>
          </ul>

          <br/>
          <h3 className="column-break"><i>Data Manager</i></h3>
          <ul>
            <li>Lead analyst & BI Developer</li>
          </ul>

          <br/>

          <h3><i>Consultancy</i></h3>
          <ul>
            <li>Senior project lead</li>
            <li>Lead developer</li>
            <li>BI Best-practises; Workshop and user training</li>
            <li>Building sector: BAM, TBI, Volker Wessels, Mammoet, Heijmans</li>
            <li>Others: Eneco, Schiphol, CJIB (Dutch Central Judicial Collection Agency), de Vereende (insurance)</li>
            <li>Workshop and end-user training</li>
          </ul>

          <br/>
          <h3><i>Business Analysis</i></h3>
          <ul>
            <li>Management Trainee</li>
            <li>Financial reporting</li>
            <li>Business Analysis</li>
          </ul>

          <button className="download-resume-button" onClick={showLetsTalkModal}>Reach out</button>

        </div>
      </motion.section>



      {/* Reusable sections with alternating content */}
      <motion.section
        className="service-sections section1"
        id="product-data-expert"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 0.75, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="section-title">
          <h2>Product Data Expert</h2>
        </div>


        <div className="section1-text-box">
          {/* <br/><br/><br/> */}

          <p>
          <strong>Well established nework in both GS1 as well as ETIM</strong>
          </p>

          <br/><br/>

          <h3><i>Project lead Data Quality</i></h3>
          <ul>
            <li>GS1 data quality projects </li>
            <li>100% data compliancy for many companies</li>
            <li>Clients: a.o. Grohe, Van Marcke, Orkla House Care, European Aerosols, PGB. </li>
          </ul>

          <br/>

          <h3 className="column-break"><i>Project Manager Data Quality tooling</i></h3>
          <ul>
            <li>Build tools for quick and actionable insights into data quality (GS1) </li>
            <li>Onboarding time -50% (=2 weeks FTE)</li>
            <li>Reduced quarterly maintenance time by 45% </li>
            <li>Integration of three predominant sources; My Product Manager, Datasource and Qmica </li>
            <li>Enabled self-service for consultants </li>
          </ul>

          <br/>

          <h3><i>Data Manager</i></h3>
          <ul>
            <li>Product data standard implementation (GS1)</li>
            <li>Member GS1 steering committee</li>
          </ul>

          <button className="download-resume-button" onClick={showLetsTalkModal}>Reach out</button>

        </div>

        <div className="picture">
          <img src="/assets/images/ProductDataExpert.webp" alt="Product Data Expert" />
        </div>

      </motion.section>




      {/* Footer */}
      <Footer onShowPhoneModal={showQrCodeModal} />

    </div>
  );
}
