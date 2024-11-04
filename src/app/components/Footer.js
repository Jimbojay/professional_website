import Image from "next/image";

export default function Footer({ onShowPhoneModal }) {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo, Company Name, and Contact Button */}
        <div className="footer-brand-group">
          <div className="footer-logo">
            <Image src="/assets/images/Logo.png" alt="Brand Icon" width={50} height={55} />
          </div>
          <h3 className="footer-company-name">Your Company</h3>
          <button className="cta-button" onClick={onShowPhoneModal}>
            Contact Us
          </button>
        </div>

        {/* Contact Information */}
        <div className="footer-contact">
          <h4>Reach Out</h4>
          <p>Phone: <span onClick={onShowPhoneModal} className="contact-link">+31 61345 4378</span></p>
          <p>Email: <a href="mailto:info@example.com">info@example.com</a></p>
        </div>

        {/* Social Media */}
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Image src="/assets/images/linkedin-icon.png" alt="LinkedIn" width={25} height={25} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Image src="/assets/images/twitter-icon.png" alt="Twitter" width={25} height={25} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Image src="/assets/images/github-icon.png" alt="GitHub" width={25} height={25} />
            </a>
          </div>
        </div>

        {/* Links Section */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-of-use">Terms of Use</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}
