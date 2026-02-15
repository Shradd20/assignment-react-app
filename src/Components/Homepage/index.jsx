import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import Navbar from '../Navbar';
import Footer from '../Footer';

const HomePage = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % programs.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const programs = [
    {
      title: 'MBA DEGREES',
      subtitle: 'Master of Business Administration',
      description: 'Transform your career with our comprehensive MBA programs designed for ambitious professionals.',
      icon: '📊'
    },
    {
      title: 'DBA DEGREES',
      subtitle: 'Doctor of Business Administration',
      description: 'Advance to the pinnacle of business education with our research-focused doctoral programs.',
      icon: '🎓'
    },
    {
      title: 'MASTERS DEGREES',
      subtitle: 'Specialized Master Programs',
      description: 'Develop expertise in your field with our range of specialized master degree programs.',
      icon: '📚'
    },
    {
      title: 'BACHELOR DEGREES',
      subtitle: 'Undergraduate Programs',
      description: 'Build a strong foundation for your professional future with our bachelor degree offerings.',
      icon: '🎯'
    }
  ];

  const whyFloriana = [
    { title: 'Because of History', description: 'Rich cultural heritage spanning centuries' },
    { title: 'Architecture', description: 'Stunning baroque and renaissance buildings' },
    { title: 'Public Gardens', description: 'Beautiful green spaces for study and relaxation' },
    { title: 'Music Festivals', description: 'Vibrant cultural events throughout the year' },
    { title: 'Its Authenticity', description: 'Experience genuine Maltese culture' }
  ];

  return (
    <div className="homepage">
      <Navbar/>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-badge">We Are Eager to Give You the Best Education</div>
          <h1 className="hero-title">
            <span className="title-line">Welcome to</span>
            <span className="title-emphasis">Ascencia Malta</span>
          </h1>
          <button className="hero-cta">
            <span>Discover Our Courses</span>
            <span className="cta-arrow">→</span>
          </button>
        </div>
        <div className="hero-scroll">
          <div className="scroll-indicator"></div>
          <span>Scroll to explore</span>
        </div>
      </section>

      {/* Programs Carousel */}
      <section className="programs-section">
        <div className="section-header">
          <span className="section-label">Academic Excellence</span>
          <h2 className="section-title">Find the Best Programme for Yourself</h2>
          <p className="section-description">
            Because each training course corresponds to a personal ambition, all our students receive individual attention.
            The success of each student is our priority. Our teams accompany each student in the success of his project.
          </p>
        </div>

        <div className="programs-carousel">
          <div className="carousel-track" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
            {programs.map((program, index) => (
              <div key={index} className={`program-card ${index === activeSlide ? 'active' : ''}`}>
                <div className="program-icon">{program.icon}</div>
                <span className="program-label">Courses</span>
                <h3 className="program-title">{program.title}</h3>
                <p className="program-subtitle">{program.subtitle}</p>
                <p className="program-description">{program.description}</p>
                <button className="program-btn">Explore Programme</button>
              </div>
            ))}
          </div>
          
          <div className="carousel-controls">
            <button 
              className="carousel-arrow prev"
              onClick={() => setActiveSlide((prev) => (prev - 1 + programs.length) % programs.length)}
            >
              ←
            </button>
            <div className="carousel-dots">
              {programs.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === activeSlide ? 'active' : ''}`}
                  onClick={() => setActiveSlide(index)}
                />
              ))}
            </div>
            <button 
              className="carousel-arrow next"
              onClick={() => setActiveSlide((prev) => (prev + 1) % programs.length)}
            >
              →
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-content">
            <span className="section-label">Our Story</span>
            <h2 className="about-title">About <span className="highlight">Ascencia Malta</span></h2>
            <p className="about-text">
              Ascencia Malta is located in Floriana – right on the doorstep of Valletta. Floriana was meant to be a suburb of Valletta, 
              but it developed to be a town on its own. A short walk separates the two towns, it isn't easy to understand where Floriana 
              finishes and Valletta starts, but the iconic entry to the capital is part of Floriana.
            </p>
            <p className="about-text">
              Floriana sits in the very heart of the Maltese islands, with roads leading to all the bustling and major cities in Malta, 
              so we can say that all the roads lead to Floriana – meaning that all the roads will bring you here as well.
            </p>
            <Link to="/about">
              <button className="read-more-btn">Read More</button>
            </Link>
          </div>
          
          <div className="about-visual">
            <div className="visual-decoration"></div>
            <div className="about-image-placeholder">
              <div className="image-overlay">
                <span className="image-label">Floriana, Malta</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Floriana Section */}
      <section className="why-floriana-section">
        <div className="why-container">
          <div className="why-visual">
            <div className="why-image-circle">
              <div className="circle-overlay">
                <span className="circle-text">Historic Floriana</span>
              </div>
            </div>
          </div>
          
          <div className="why-content">
            <span className="section-label-light">Study in Malta</span>
            <h2 className="why-title">Why Floriana?</h2>
            
            <div className="why-list">
              {whyFloriana.map((item, index) => (
                <div key={index} className="why-item" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="why-number">{String(index + 1).padStart(2, '0')}</div>
                  <div className="why-details">
                    <h3 className="why-item-title">{item.title}</h3>
                    <p className="why-item-description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <p className="why-footer">
              And Ascencia Malta is in the centre of it all. Excellent buses links to all corners of the island!
            </p>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="join-section">
        <div className="join-overlay"></div>
        <div className="join-content">
          <h2 className="join-title">Join Us!</h2>
          <p className="join-text">
            You wish to join the Ascencia Business School community? The registration and admission procedures 
            are simple and totally free. Our teams can get back to you for any questions!
          </p>
          <button className="join-btn">
            <span>Get in Touch</span>
            <span className="btn-icon">→</span>
          </button>
        </div>
      </section>

      <Footer/>
    </div>
  );
};

export default HomePage;