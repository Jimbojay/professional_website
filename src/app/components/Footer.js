import Image from "next/image";

export default function Footer({ onShowPhoneModal }) {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo and Company Name Grouped */}
        <div className="footer-brand-group">
          <div className="footer-logo">
            <Image src="/assets/images/Logo.png" alt="Brand Icon" width={50} height={55} />
          </div>
          <h3 className="footer-company-name">ID Data Solutions</h3>
        </div>


        {/* Contact Information */}
        <div className="footer-contact">
          <h4><u>Reach Out</u></h4>
          <p>Phone: <span onClick={onShowPhoneModal} className="contact-link">+31 6 1345 4378</span></p>
          <p>Email: <a href="mailto:imre.iddatasolutions@gmail.com" className="contact-link">imre.iddatasolutions@gmail.com</a></p>
        </div>


        {/* Social Media */}
        <div className="footer-social">
          <h4><u>Follow Me</u></h4>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/imredekker/" target="_blank" rel="noopener noreferrer">
              <Image src="/assets/images/linkedin-icon.png" alt="LinkedIn" width={30} height={30} />
            </a>
            <a href="https://x.com/NextGenDataLead" target="_blank" rel="noopener noreferrer">
              <Image src="/assets/images/twitter-icon.png" alt="Twitter" width={30} height={30} />
            </a>
            <a href="https://github.com/NextGenDataLead" target="_blank" rel="noopener noreferrer">
              <Image src="/assets/images/github-icon.png" alt="GitHub" width={30} height={30} />
            </a>
          </div>
        </div>

        {/* Links Section */}
        <div className="footer-links">
          <h4><u>Quick Links</u></h4>
          <a 
            href="/assets/documents/CV Resume ImreDekker.pdf" 
            download="CV Resume ImreDekker.pdf"
          >
            Resume/CV
          </a>
          <a 
            href="/assets/documents/privacy-policy.pdf" 
            download="privacy-policy.pdf"
          >
            Privacy Policy
          </a>
          <a 
            href="/assets/documents/general-terms-and-conditions.pdf" 
            download="general-terms-and-conditions.pdf"
          >
            General Terms and Conditions
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} ID Data Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
}
