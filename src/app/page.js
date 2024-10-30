"use client"; // This enables client-side rendering for this component

import { motion } from "framer-motion";

export default function Home() {
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

      {/* Logo section below the banner - always visible */}
      <section className="logo-section">
        <div className="logo-container">
          <img src="/assets/images/Data Management.png" alt="Logo 1" />
          <img src="/assets/images/Data Governance.png" alt="Logo 2" />
          <img src="/assets/images/Project Management.png" alt="Logo 3" />
          <img src="/assets/images/Programming.png" alt="Logo 4" />
          <img src="/assets/images/Business Intelligence.png" alt="Logo 5" />
          <img src="/assets/images/ProductDataExpert.png" alt="Logo 6" />
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
              As a seasoned, T-shaped, data professional I have <strong>15 years of experience</strong> in a wide variety of data roles and sectors. 
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

          {/* Right Section - Venn Diagram */}
          <div className="venn-diagram-wrapper">
            <img src="/assets/images/VennDiagram.png" alt="Venn Diagram" className="venn-diagram" />
          </div>
        </div>
      </section>

      {/* Reusable sections with alternating content */}
      <motion.section
        className="service-sections section1"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 0.75, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="section-title">
          <h2>(Data) Management</h2>
        </div>

        <div className="picture">
          <img src="/assets/images/BusinessIntelligenceTextSection.png" alt="Data Management" />
        </div>


        <div className="section1-text-box">
          {/* <br/><br/><br/> */}
          <h3><i>Co-founder & COO</i></h3>
          <ul>
            <li>Co-founder & COO</li>
            <li>Built ever-growing network of freelance developers</li>
            <li>Spearhead Project Management & Quality control</li>
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
        </div>
      </motion.section>



      {/* Reusable sections with alternating content */}
      <motion.section
        className="service-sections section1"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 0.75, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="section-title">
          <h2>(Data) Management</h2>
        </div>


        <div className="section1-text-box">
          {/* <br/><br/><br/> */}
          <h3><i>Co-founder & COO</i></h3>
          <ul>
            <li>Co-founder & COO</li>
            <li>Built ever-growing network of freelance developers</li>
            <li>Spearhead Project Management & Quality control</li>
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
        </div>

        <div className="picture">
          <img src="/assets/images/BusinessIntelligenceTextSection.png" alt="Data Management" />
        </div>

      </motion.section>




























      {/* Additional sections with alternating layouts */}
      <motion.section
        className="service-sections section2"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 0.75, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >  
      
        <div className="section-title">
          <h2>Data Governance</h2>
        </div>
        
        <div className="services-text-box">
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
        </div>

        <div className="divider"></div>
        <div className="picture">
          <img src="/assets/images/BusinessIntelligenceTextSection.png" alt="Data Governance" />
        </div>
        <div className="divider"></div>
        <div className="services-text-box">
          <h3><i>Master Data Governance Lead</i></h3>
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
        </div>


      </motion.section>

      <motion.section
        className="service-sections section1"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 0.75, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >  

        <div className="section-title">
            <h2>Project Management</h2>
        </div>
        
        <div className="services-text-box">
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
            <li>Multiple Graph grants </li>
            <li>Chainlink hackathon </li>
          </ul>
 
        </div>
        <div className="divider"></div>
        <div className="picture">
          <img src="/assets/images/BusinessIntelligenceTextSection.png" alt="Data Management" />
        </div>
 
        <div className="divider"></div>
 
        <div className="services-text-box">
          <h3><i>Project lead Data Quality</i></h3>
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
        </div>

      </motion.section>

      {/* Additional sections with alternating layouts */}
      <motion.section
        className="service-sections section2"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 0.75, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >  

        <div className="section-title">
            <h2>(Web3) Programming)</h2>
        </div>

        <div className="services-text-box">

          <h3><i>Python Developer</i></h3>
          <ul>
            <li>Automate GS1 updates into RiverSand PIM with Python</li>
            <li>Reduced quarterly returning workload by +75%, equalling +1 week</li>
            <li>Generate sequential import files conform cutom process</li>
            <li>Created backlog for bottleneck-changes for prioritizing Data Governance</li>
            <li>Created executable with front-end for corporate use </li>
          </ul>

        </div>

        <div className="divider"></div>
        <div className="picture">
          <img src="/assets/images/BusinessIntelligenceTextSection.png" alt="Data Governance" />
        </div>
        <div className="divider"></div>

        <div className="services-text-box">

          <h3><i>Web3 developer - Personal Portfolio</i></h3>
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

        </div>

      </motion.section>

      <motion.section
        className="service-sections section1"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 0.75, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >  
        <div className="section-title">
            <h2>BI & Analytics</h2>
        </div>

        <div className="services-text-box">

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
          <h3><i>Data Manager</i></h3>
          <ul>
            <li>Lead analyst & BI Developer</li>
          </ul>

          <br/>
          <h3><i>Consultancy</i></h3>
          <ul>
            <li>Produced several dashboards for the ABN-Amro and Rabobank and the Ministiry of Internal affairs</li>
          </ul>

        </div>
        <div className="divider"></div>
        <div className="picture">
          <img src="/assets/images/BusinessIntelligenceTextSection.png" alt="Data Management" />
        </div>
        <div className="divider"></div>

        <div className="services-text-box">

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

        </div>

      </motion.section>

      {/* Additional sections with alternating layouts */}
      <motion.section
        className="service-sections section2"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 0.75, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >  

        <div className="section-title">
            <h2>Product Data Expert</h2>
        </div>

        <div className="services-text-box">

        <p>
          Well established nework in both GS1 as well as ETIM
        </p>

        <br/><br/>

        <h3><i>Project lead Data Quality</i></h3>
          <ul>
            <li>GS1 data quality projects </li>
            <li>100% data compliancy for many companies</li>
            <li>Clients: a.o. Grohe, Van Marcke, Orkla House Care, European Aerosols, PGB. </li>
          </ul>

        </div>


        <div className="divider"></div>

        <div className="picture">
          <img src="/assets/images/BusinessIntelligenceTextSection.png" alt="Data Governance" />
        </div>
        <div className="divider"></div>
        <div className="services-text-box">

          <h3><i>Project Manager Data Quality tooling</i></h3>
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
        </div>
      </motion.section>

      <div style={{ height: '1500px' }}></div> {/* Adds a 1500px height whitespace at the bottom */}
    </div>
  );
}
