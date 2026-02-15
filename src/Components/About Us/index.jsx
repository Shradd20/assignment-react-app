import React, { useEffect, useState } from 'react';
import './aboutus.css';
import Navbar from '../Navbar';
import Footer from '../Footer';

const AboutPage = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const values = [
    {
      title: 'Openness to International Markets',
      description: 'This is our purpose. Our programs have been specifically designed to train international students and enable French students to do their internships in the English language or part of their training in another country, at the heart of the international system: an excellent French language school, a network of representative offices and university partners.'
    },
    {
      title: 'Teaching Excellence',
      description: 'The member schools of Ascencia are all recognized in their specialized domains and prepare graduates to achieve insertion in world job markets. The faculty comprises an academic lecturing body and the best professional players. All the programs lead to a state-recognized certification.'
    },
    {
      title: 'Job Access',
      description: 'Because each training course corresponds to a personal ambition, all our students receive individual attention. The success of each student is our priority. Our teams accompany each student in the success of his project. Professional integration, promoted by work-linked training, is our top priority.'
    }
  ];

  const guides = [
    { name: 'Student-Centered Approach', icon: '🎯' },
    { name: 'Critical Thinking', icon: '💡' },
    { name: 'Creativity & Innovation', icon: '🎨' },
    { name: 'Lifelong Learning', icon: '📚' },
    { name: 'Rigorous Standards', icon: '⭐' },
    { name: 'Global Perspective', icon: '🌍' }
  ];

  return (
    <div className="about-page">
      <Navbar/>

      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content-wrapper">
          <div className="hero-label">Ascencia Malta</div>
          <h1 className="hero-title">
            <span className="title-normal">We Are Eager to Give You</span>
            <span className="title-highlight">The Best Education</span>
          </h1>
          <p className="hero-description">
            Ascencia's ambition is to realize your potential of ascension. Through an individualized follow-up of the students, 
            our teams are at your service for your future: come and present us your projects, and we will do our best to help you realize them.
          </p>
        </div>
      </section>

      {/* Pedagogy Section */}
      <section className="pedagogy-section">
        <div className="pedagogy-container">
          <div className="pedagogy-image">
            <div className="image-circle">
              <div className="student-placeholder">
                <div className="placeholder-overlay">
                  <span className="overlay-text">Student-Centered Learning</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pedagogy-content">
            <span className="section-label">About</span>
            <h2 className="section-title">A Participative and Innovative Pedagogy</h2>
            <p className="pedagogy-text">
              Our training courses are based on a participative and innovative pedagogy based on the value of the individual 
              and the constant exchange between learners and experienced professionals. The realities of corporate life are 
              at the heart of the personalized learning methods we use. They are intended to identify potentials and to hatch 
              vocations of managers and business developers. Our campus is also open to all international candidates who wish 
              to study management in Malta.
            </p>
            
            <div className="mission-block">
              <h3 className="mission-title">Mission</h3>
              <p className="mission-text">
                At Ascencia Malta, we empower students through a student-centered approach that fosters critical thinking, 
                creativity, and lifelong learning. We deliver high-quality education that meets rigorous standards and prepares 
                graduates for success in a dynamic world. Together with our partnered stakeholders, we are dedicated to 
                developing socially responsible leaders who champion diversity, inclusion, and equity.
              </p>
            </div>

            <div className="guides-grid">
              {guides.map((guide, index) => (
                <div key={index} className="guide-item" style={{ animationDelay: `${index * 0.1}s` }}>
                  <span className="guide-icon">{guide.icon}</span>
                  <span className="guide-name">{guide.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="values-content">
          <span className="section-label-light">Our Values</span>
          <h2 className="values-title">Excellence, a Priority for Ascencia</h2>
          
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card" style={{ animationDelay: `${index * 0.2}s` }}>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teachers Section */}
      <section className="teachers-section">
        <div className="teachers-container">
          <div className="teachers-content">
            <span className="section-label">Our Guides</span>
            <h2 className="teachers-title">Some Special Teachers from the Industry!</h2>
            
            <p className="teachers-description">
              At Ascencia Malta, you'll experience a friendly and welcoming student-centred learning environment.
            </p>
            
            <p className="teachers-text">
              Our lecturers, many entrepreneurs themselves, provide learners with the opportunity to build their 
              professional and academic qualifications through a career path that meets their interests and aspirations 
              in their chosen career.
            </p>
            
            <p className="teachers-text">
              Ascencia Malta lecturers support, mentor and guide you through your skills, knowledge and practical work 
              experience to achieve your goals.
            </p>

            <div className="expertise-list">
              <div className="expertise-item">
                <div className="expertise-number">01</div>
                <div className="expertise-content">
                  <h4>Industry Professionals</h4>
                  <p>Active entrepreneurs and business leaders</p>
                </div>
              </div>
              
              <div className="expertise-item">
                <div className="expertise-number">02</div>
                <div className="expertise-content">
                  <h4>Academic Excellence</h4>
                  <p>Qualified educators with advanced degrees</p>
                </div>
              </div>
              
              <div className="expertise-item">
                <div className="expertise-number">03</div>
                <div className="expertise-content">
                  <h4>Personalized Mentorship</h4>
                  <p>Individual guidance for each student's journey</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="teachers-visual">
            <div className="teachers-image-wrapper">
              <div className="teachers-placeholder">
                <div className="placeholder-gradient"></div>
                <span className="image-caption">Expert Faculty</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-overlay"></div>
        <div className="cta-content">
          <h2 className="cta-title">Ready to Start Your Journey?</h2>
          <p className="cta-text">
            Join our community of ambitious learners and transform your future with Ascencia Malta.
          </p>
          <button className="cta-button">
            <span>Get in Touch</span>
            <span className="btn-arrow">→</span>
          </button>
        </div>
      </section>

      <Footer/>
    </div>
  );
};

export default AboutPage;