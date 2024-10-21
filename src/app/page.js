// src/app/page.js

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

      {/* Logo section below the banner */}
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
    </div>
  );
}
