import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">Ascencia Malta Ltd</h3>
          <p className="footer-address">
            25, Vincenzo Dimech Street, Floriana, Malta
          </p>
          <p className="footer-contact">Contact us</p>
          <p className="footer-email">enquiries@ascenciamalta.mt</p>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-title">Courses</h3>
          <ul className="footer-links">
            <li>Doctorate of Business Administration (DBA)</li>
            <li>Masters of Business Administration (MBA) in Leadership Excellence</li>
            <li>Master of Business Specialisation</li>
            <li>Post Graduate Diploma in Arts Specialisation</li>
            <li>Post Graduate Diploma – Computer Science Specialisation</li>
            <li>Post Graduate Diploma Specialisation</li>
            <li>Bachelor Specialisation</li>
            <li>Undergraduate Diploma Specialisation</li>
            <li>Award certificates</li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-title">English Language Courses</h3>
          <ul className="footer-links">
            <li>General English Course</li>
            <li>Business English Course</li>
            <li>Academic English Course</li>
            <li>ESP – English for Special Purpose Course</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-social">
          <h3 className="footer-title">Follow Ascencia Malta</h3>
          <div className="social-icons">
            <a href="#" className="social-icon">f</a>
            <a href="#" className="social-icon">in</a>
            <a href="#" className="social-icon">ig</a>
            <a href="#" className="social-icon">tt</a>
            <a href="#" className="social-icon">yt</a>
          </div>
        </div>
        
        <div className="footer-info">
          <p>© 2025 Ascencia Malta | Terms & Conditions | Privacy Policy</p>
          <p>Licensed by: The Malta Further and Higher Education Authority (MFHEA)</p>
          <p>License number: 2025-015</p>
          <p>Category: Higher Education Institution</p>
          <p className="footer-partner">Member of Collège de Paris</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;