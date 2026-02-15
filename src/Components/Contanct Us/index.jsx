import React, { useState, useEffect } from 'react';
import './contanct.css';
import Navbar from '../Navbar';
import Footer from '../Footer';

const ContactPage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    agreeToPolicy: false
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Static UI - no actual submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! This is a static demo.');
  };

  const contactInfo = [
    {
      icon: '📍',
      title: 'Address',
      content: '25, Vincenzo Dimech Street, Floriana, Malta'
    },
    {
      icon: '📧',
      title: 'Email',
      content: 'enquiries@ascenciamalta.mt'
    },
    {
      icon: '📞',
      title: 'Phone',
      content: '+356 2248 1000'
    },
    {
      icon: '🕐',
      title: 'Office Hours',
      content: 'Monday - Friday: 9:00 AM - 5:00 PM'
    }
  ];

  return (
    <div className="contact-page">
      <Navbar/>

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-content-wrapper">
          <div className="hero-label">Ascencia Malta</div>
          <h1 className="hero-title">Contact Us</h1>
          <p className="hero-description">
            For any question related to our campus, our programs or any other subject concerning Ascencia Malta, 
            please fill in the form below. Our teams will get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="contact-container">
          <div className="form-wrapper">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name*"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name*"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="E-mail*"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group phone-group">
                  <div className="phone-input-wrapper">
                    <span className="country-flag">🇲🇹</span>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone*"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="form-input phone-input"
                    />
                  </div>
                </div>
              </div>

              <div className="form-row single">
                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject of your message*"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-row single">
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Your message*"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="form-textarea"
                    rows="6"
                  />
                </div>
              </div>

              <div className="form-checkbox">
                <input
                  type="checkbox"
                  name="agreeToPolicy"
                  id="agreeToPolicy"
                  checked={formData.agreeToPolicy}
                  onChange={handleChange}
                  required
                  className="checkbox-input"
                />
                <label htmlFor="agreeToPolicy" className="checkbox-label">
                  I agree that Ascencia Malta collects and uses the personal data I have just entered in this 
                  form in order to send me educational proposals adapted to my project, which I have agreed to 
                  receive, in accordance with our <a href="#" className="policy-link">data protection policy</a>.
                </label>
              </div>

              <button type="submit" className="submit-btn">
                <span>Submit</span>
              </button>
            </form>
          </div>

          <div className="contact-info-wrapper">
            <div className="info-card">
              <h3 className="info-title">Get in Touch</h3>
              <p className="info-description">
                We're here to help and answer any question you might have. 
                We look forward to hearing from you!
              </p>
              
              <div className="contact-details">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-detail-item" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="detail-icon">{info.icon}</div>
                    <div className="detail-content">
                      <h4 className="detail-title">{info.title}</h4>
                      <p className="detail-text">{info.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="social-connect">
                <h4 className="social-title">Connect With Us</h4>
                <div className="social-icons">
                  <a href="#" className="social-icon">
                    <span>f</span>
                  </a>
                  <a href="#" className="social-icon">
                    <span>in</span>
                  </a>
                  <a href="#" className="social-icon">
                    <span>ig</span>
                  </a>
                  <a href="#" className="social-icon">
                    <span>tt</span>
                  </a>
                  <a href="#" className="social-icon">
                    <span>yt</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="map-container">
          <div className="map-placeholder">
            <div className="map-overlay">
              <div className="map-pin">📍</div>
              <h3 className="map-location">Floriana, Malta</h3>
              <p className="map-address">25, Vincenzo Dimech Street</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="faq-container">
          <div className="faq-header">
            <span className="section-label">FAQ</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-description">
              Find answers to common questions about our programs, admissions, and campus life.
            </p>
          </div>

          <div className="faq-grid">
            <div className="faq-item">
              <h3 className="faq-question">How do I apply?</h3>
              <p className="faq-answer">
                You can apply online through our website. Our admissions team will guide you through the process 
                and answer any questions you may have.
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">What are the admission requirements?</h3>
              <p className="faq-answer">
                Admission requirements vary by program. Please contact our admissions office for specific 
                requirements for your chosen course.
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">Do you offer scholarships?</h3>
              <p className="faq-answer">
                Yes, we offer various scholarship opportunities for qualified students. Contact us to learn 
                more about available financial aid options.
              </p>
            </div>

            <div className="faq-item">
              <h3 className="faq-question">Can I visit the campus?</h3>
              <p className="faq-answer">
                Absolutely! We welcome campus visits. Please contact us to schedule a tour and meet with 
                our faculty and staff.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  );
};

export default ContactPage;