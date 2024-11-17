"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Image from 'next/image';


export default function Home() {
  const [showQrCode, setShowQrCode] = useState(false);
  const [showLetsTalk, setShowLetsTalk] = useState(false); // New state for "Let's Talk!" popup
  const [isHovered, setIsHovered] = useState(false);
  const [showData360Modal, setShowData360Modal] = useState(false); // New state for Data360 popup

  const [showData360Form, setShowData360Form] = useState(false); // Define state for showData360Form

  const openData360Form = () => setShowData360Form(true); // Function to open form
  const closeData360Form = () => setShowData360Form(false); // Function to close form

  const openData360Modal = () => setShowData360Modal(true);
  const closeData360Modal = () => setShowData360Modal(false);

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

  const [formData, setFormData] = useState({
    gender: '',
    fullName: '',
    email: '',
    organization: '',
    position: '',
    message: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/sendData360Inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
    });
    if (response.ok) {
        alert('Your inquiry has been submitted successfully!');
        setShowData360Form(false); // Close modal on success
    } else {
        alert('There was an error submitting your inquiry. Please try again.');
    }
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


  useEffect(() => {
    const handleScroll = () => {
      // Get references to the elements
      const testimonialsSection = document.getElementById("testimonials-section");
      const socialMediaIcons = document.querySelector(".social-media");

      if (testimonialsSection && socialMediaIcons) {
        // Get the bottom of the icon and the top/bottom of the testimonials section
        const testimonialsTop = testimonialsSection.getBoundingClientRect().top;
        const testimonialsBottom = testimonialsSection.getBoundingClientRect().bottom;
        const socialIconsBottom = socialMediaIcons.getBoundingClientRect().bottom;

        // Check if icons reached the top of the testimonials section
        if (socialIconsBottom >= testimonialsTop && socialIconsBottom <= testimonialsBottom) {
          setIconClass("icon-black"); // Change to black
        } else {
          setIconClass("icon-white"); // Change back to white
        }
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


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
            {/* <a href="/assets/documents/CV Resume ImreDekker.pdf" download className="resume-button">
              Download My Resume
            </a> */}
          </div>
        </div>

        <img src="/assets/images/Banner.png" alt="Banner Image" className="banner-image" />

        {/* Button overlaying the banner */}
        <button className="banner-button" onClick={showLetsTalkModal}>Let&apos;s talk!</button>
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


      {showData360Modal && (
        <div className="modal-overlay" onClick={closeData360Modal}>
          <div className="data360-modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeData360Modal}>&times;</span>
            {/* Modal content */}
            <h2>Unlock Your Data&apos;s Potential with <strong>Data360 Audit</strong></h2>
            <ul className="offer-details">
              <li>🎤 <strong>5 In-Depth Interviews</strong> with up to 3 participants each, to understand data priorities</li>
              <li>🔍 <strong>3 Days of Data Analysis</strong> to evaluate your current data structure/-model and identify actionable insights</li>
              <li>🛠️ <strong>1 Workshop</strong> to co-develop data solutions aligned with your strategic goals</li>              <li>📊 <strong>SWOT Analysis Report</strong> covering strengths, weaknesses, opportunities, and threats in your data landscape</li>
              <li>🏆 <strong>Top 3 Focus Areas</strong> based on SWOT analysis to prioritize impactful changes</li>
            </ul>

            {/* Price and Call-to-Action Text */}
            <p className="price-text" style={{ fontSize: "20px", color: "#344152", fontWeight: "bold", marginTop: "20px" }}>
                All this for just <span style={{ fontSize: "22px", color: "#617E82" }}>€6.950</span>
            </p>
            
            <p className="cta-text" style={{ fontSize: "18px", color: "#617E82", fontWeight: "normal" }}>
                Take the next step toward a data-driven future to <strong>capture growth opportunities</strong>, 
                <strong> enhance decision-making</strong>, and <strong> mitigate risks</strong>. Book your <strong>Data360 Audit</strong> today and turn insights into impactful results.
            </p>

            {/* Button with urgency to drive action */}
            <button 
              className="modal-button primary-button2" 
              onClick={() => {
                closeData360Modal();
                openData360Form(); // This will open the form modal
              }}
            >
              Get Started with Data360 Audit
            </button>
          </div>
        </div>
      )}


      {showData360Form && (
          <div className="modal-overlay" onClick={() => setShowData360Form(false)}>
              <div className="form-modal-content" onClick={(e) => e.stopPropagation()}>
                  <span className="close" onClick={() => setShowData360Form(false)}>&times;</span>
                  <h2>Data360 Audit Inquiry</h2>
                  <br/>
                  <form onSubmit={handleSubmit}>
                      <label htmlFor="gender">Preferred Title/Gender:</label>
                      <select 
                        id="gender" 
                        name="gender" 
                        required 
                        onChange={handleInputChange}
                      >
                        <option value="" disabled selected>Select your title</option>
                        <option value="Mr.">Mr.</option>
                        <option value="Ms.">Ms.</option>
                        <option value="Mrs.">Mrs.</option>
                        <option value="Mx.">Mx. (gender-neutral)</option>
                        <option value="Dr.">Dr.</option>
                        <option value="Prof.">Prof.</option>
                        <option value="None">None</option>
                      </select>
                      <label>Full Name:</label>
                      <input type="text" name="fullName" placeholder="Enter your full name" required onChange={handleInputChange} />
                      <label>Email:</label>
                      <input type="email" name="email" placeholder="Enter your email address" required onChange={handleInputChange} />
                      <label>Organization:</label>
                      <input type="text" name="organization" placeholder="Your organization" required onChange={handleInputChange} />
                      <label>Position:</label>
                      <input type="text" name="position" placeholder="Your position" required onChange={handleInputChange} />
                      <label>Message:</label>
                      <textarea name="message" placeholder="Write your message here..." required onChange={handleInputChange} />
                      <button type="submit" className="modal-button">Submit Inquiry</button>
                  </form>
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

            <div className="skills-buttons">
              <div>
                <button className="primary-button" onClick={openData360Modal}>
                  <span>→ <u>Data360 Audit</u> ←</span>
                  <div className="secondary-text">🚀 Uncover growth opportunities and expose challenges 🚀</div>
                </button>
              </div>  




              <div className="secondary-buttons">
                  <button className="secondary-button" onClick={showLetsTalkModal}>
                    Let&apos;s Talk!
                  </button>

                  <button 
                    className="secondary-button"
                    onClick={() => window.open('/assets/documents/CV Resume ImreDekker.pdf')}
                  >
                    Download My Resume
                  </button>
                  
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="testimonials-title">
          <h2>Testimonials</h2>
          <button className="lets-talk-button" onClick={showLetsTalkModal}>Let&apos;s Talk!</button>
        </div>

        <div
          className={`testimonials-container ${isHovered ? "paused" : ""}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >          
          {/* Testimonial 1 */}
          <div className="testimonial">
            <img src="/assets/images/DianaElRafai.png" alt="DianaElRafai" className="testimonial-photo" />
            <div className="testimonial-text">
              <h3>Diana ElRafai</h3>
              <p className="testimonial-title">Customer Success Manager</p>
              <p className="testimonial-content">
              &quot;After stepping in as Project Manager, Imre quickly turned around a complex project that required careful coordination between our off-shore development team and the client. 
                <br/><br/>
                His proactive approach in aligning deliverables with client expectations resulted in a smooth communication flow and high client satisfaction. Remarkably, he achieved +/-40% reduction in development time through his efficiency, interpersonal skills and strategic oversight. 
                <br/><br/>
                
                Imre&apos;s ability to restore trust and deliver results under challenging circumstances has been invaluable&quot;
              </p>
            </div>
          </div>

          <div className="testimonial">
            <img src="/assets/images/AleksandarMitchell.png" alt="AleksandarMitchell" className="testimonial-photo" />
            <div className="testimonial-text">
              <h3>Aleksandar Mitchell</h3>
              <p className="testimonial-title">CTO, DappAstra</p>
              <p className="testimonial-content">
              &quot;I can always count on Imre as a dependable, strategic partner who consistently supports and streamlines our collective goals, making a significant, positive impact every day.
                <br/><br/>
                Collaborating with Imre as the COO of DappAstra has been instrumental in driving our team’s efficiency and success.
                His reliability and proactive involvement ensure our developers stay focused on their core expertise—programming—by handling all the essential but time-consuming tasks, such as client interaction, requirement analysis, milestone management, and contract negotiations.                 
                &quot;
              </p>
            </div>
          </div>

          <div className="testimonial">
            <img src="/assets/images/TinieDhondt.png" alt="Tinie D'Hondt" className="testimonial-photo" />
            <div className="testimonial-text">
              <h3>Tinie D&apos;Hondt</h3>
              <p className="testimonial-title">Managing Partner, Master Data Partners</p>
              <p className="testimonial-content">
              &quot;It is always a pleasure to work with Imre. His professional attitude and meticulous approach have made each project a success. Imre pays great attention to accuracy and always works with the utmost care.
                <br/><br/>
                His diplomatic approach and excellent communication skills ensure that everyone remains well-informed, and any challenges are efficiently resolved. Furthermore, he is a pleasant person to work with, making our collaboration all the more valuable.
                <br/><br/>
                I can certainly recommend Imre to anyone looking for a reliable and professional partner!&quot;
              </p>
            </div>
          </div>

          {/* <div className="testimonial">
            <img src="/assets/images/CryptoSlavvv.png" alt="CryptoSlavvv" className="testimonial-photo" />
            <div className="testimonial-text">
              <h3>CryptoSlavv</h3>
              <p className="testimonial-title">Founder, SEIPOCALYPSE</p>
              <p className="testimonial-content">
                "The collaboration with Imre and DappAstra on our gaming project was very positive. From the initial discussion to consulting, project management, meeting timelines, and quickly implementing feedback into the product. 
                <br/><br/>
                I can highly recommend Imre and DappAstra if you value good guidance and support throughout the project implementation."
              </p>
            </div>
          </div> */}

          <div className="testimonial">
            <img src="/assets/images/GurpreetSingh.png" alt="GurpreetSingh" className="testimonial-photo" />
            <div className="testimonial-text">
              <h3>Gurpreet Singh</h3>
              <p className="testimonial-title">Solutions Architect, SettleMint India</p>
              <p className="testimonial-content">
              &quot;As Solutions Architect at SettleMint I have got to know Imre as a dedicated Project Manager able to skillfully bridge the gap between client requirements and our full-stack, off-shore, development team. 
                <br/><br/>
                His exceptional interpersonal, analytical and web3 skills enable him able to effectively manage stakeholders, tackle challenges and exploit opportunities, making him a highly effective and reliable collaborator.&quot;
              </p>
            </div>
          </div>

          <div className="testimonial">
            <img src="/assets/images/Massimo-Terranova.png" alt="Massimo-Terranova" className="testimonial-photo" />
            <div className="testimonial-text">
              <h3>Massimo Terranova</h3>
              <p className="testimonial-title">Digital Projects Data Specialist, Grohe</p>
              <p className="testimonial-content">
              &quot;My experience in working with Imre has been very positive. The project management he provides is highly professional and the quality of work meets expectations, often exceeding them. Specialization in the sanitary business greatly facilitates communication and requests for support are promptly responded to&quot;
              </p>
            </div>
          </div>

          <div className="testimonial">
            <img src="/assets/images/DriesWiersma.png" alt="DriesWiersma" className="testimonial-photo" />
            <div className="testimonial-text">
              <h3>Dries Wiersma</h3>
              <p className="testimonial-title">Commercial Manager, IHC Fabrication</p>
              <p className="testimonial-content">
              &quot;Imre has the ability to quickly make himself familiar with the specific assignment. 
                He developed an intelligent tool with which a scan of all available data can be done in order to analyze realized production costs. Based on this analyzes cost prices can be evaluated and necessary actions taken. Imre has no problem with multilevel communication within an production environment. He acquired the for his tool necessary production knowledge quickly. His analytic approach is pleasant, professional and definitely to the point.&quot;
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

          <div className="full-width-paragraph">
            <p><i>
            With strong business acumen, data expertise, and people skills, I build and lead data management teams to drive meaningful results. My strategic approach aligns data frameworks with business goals, transforming data into a valuable asset for growth and decision-making.
            <br/><br/>
            I develop high-performing teams through mentoring and clear communication of complex data concepts, empowering team members to lead impactful initiatives and fostering a collaborative, data-driven culture across the organization.
            </i></p>
            <br/>
          </div>

          {/* <br/><br/> */}

          <h3><i>Data Governance Analyst</i></h3>
          <ul>
            <li>Support setup of Data Management department</li>
            <li>Coach in-house Data Manager</li>
          </ul>
          
          <h3 className="column-break"><i>Co-founder & COO</i></h3>
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
          <div className="full-width-paragraph">
            <p><i>
            My expertise in data quality and governance ensures data accuracy, compliance, and reliability. I establish clear standards and robust processes that uphold data integrity, empowering teams to leverage trusted data confidently for impactful decision-making.
            </i></p>
            <br/>
          </div>

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

        <div className="full-width-paragraph">
            <p><i>
            I’m experienced in managing cross-functional data projects from start to finish, ensuring they stay within scope, 
            time, and budget constraints. This experience has honed my ability to coordinate with various teams, prioritize effectively, 
            and manage data-related projects with clarity and precision.
            </i></p>
            <br/>
          </div>

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

          <h3><i>Project lead Data Quality</i></h3>
          <ul>
            <li>GS1 data quality projects </li>
            <li>100% data compliancy for many companies</li>
            <li>Clients: a.o. Grohe, Van Marcke, Orkla House Care, European Aerosols, PGB. </li>
          </ul>

          
          <h3 className="column-break"><i>Co-founder & COO</i></h3>
          <ul>
            <li>Game development (TON) </li>
            <li>Multiple grants The Graph</li>
            <li>Chainlink hackathon </li>
            <li>Build-a-bot (low code trading bot builder)</li>
            <li>True randomization</li>
            <li>Token generator </li>
            <li>DappAstra NFT collection</li>
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

          <div className="full-width-paragraph">
            <p><i>
            As a programmer focused on fit-for-purpose solutions, I adapt to each project’s unique needs—whether in JavaScript, Python, 
            ,Web3, a.o. I leverage blockchain not just for transparency but to enhance security and trust in cases where it 
            delivers real business value. Supported by a network of skilled developers, I can rapidly assemble the right team, 
            ensuring I meet project demands with precision and deliver results aligned with strategic goals.
            </i></p>
            <br/>
          </div>

          {/* <p>
          <strong>Through my extensive network, I can provide a (team of) developer(s) skilled in any of the top programming languages to meet project demands efficiently and effectively.</strong>
          </p> */}

          {/* <br/><br/> */}

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

          <div className="full-width-paragraph">
            <p><i>
            I’m skilled in deploying and optimizing BI tools, creating dashboards, and setting up key metrics that drive 
            business decisions. My ability to translate data into actionable insights is crucial in helping teams make data-driven 
            decisions quickly and confidently.
            </i></p>
            <br/>
          </div>


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
          
          <h3 className="column-break"><i>Consultancy</i></h3>
          <ul>
            <li>Produced several dashboards for the ABN-Amro and Rabobank and the Ministiry of Internal affairs</li>
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

          <div className="full-width-paragraph">
            <p><i>
            Product data is essential for efficient supply chains, e-commerce, and marketing. With a strong GS1 and ETIM network, I help teams use data strategically for smarter prioritization, better user experiences, and streamlined lifecycle management, implementing standards across technical and operational dimensions for impactful results.
            </i></p>
            <br/>
          </div>

          {/* <p>
          <strong>Well established nework in both GS1 as well as ETIM</strong>
          </p> */}

          {/* <br/><br/> */}

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

