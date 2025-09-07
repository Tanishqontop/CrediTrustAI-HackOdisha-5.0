import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li>Our Services</li>
            <li>Contact</li>
            <li>FAQs</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Support</h4>
          <ul>
            <li>Help Center</li>
            <li>Account Settings</li>
            <li>Financial Resources</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contact Us</h4>
          <ul>
            <li>tanishqm.22.beds@acharya.ac.in</li>
            <li>Bangalore, India</li>
            <li>Phone: +91 1234567890</li>
          </ul>
        </div>
      </div>

      <div className="footer-line"></div>

      <div className="footer-bottom">
        <p className="my-name">CrediTrust &copy; 2025</p>
        <p className="my-name">
           The Innovators <i className="ri-sparkling-2-fill"></i>
        </p>
      </div>
    </footer>
  );
};
