import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if current page is contact
  const isContactPage = location.pathname === '/contact';

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="logo-link">
          <div className="logo-section">
            <div className="logo-mark">A</div>
            <div className="logo-text">
              <span className="logo-main">ASCENCIA</span>
              <span className="logo-sub">MALTA</span>
            </div>
          </div>
        </Link>
        
        <ul className="nav-menu">
          <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
          <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About Us</Link></li>
          <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
          <li><a href="#programs">Programmes</a></li>
          <li><a href="#school">Business School</a></li>
          <li><a href="#partnerships">Brand Partnerships</a></li>
          <li><a href="#quality">Quality Assurance</a></li>
          <li><a href="#fees">Fees</a></li>
        </ul>
        
        <Link to="/contact">
          <button className={`contact-btn ${isContactPage ? 'active' : ''}`}>
            Contact Us
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;