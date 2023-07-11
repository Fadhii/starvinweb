import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import '../css/Contact.css';


function Contact() {

  const openInNewTab = (url) => {
    window.open(url,"_blank", "noreferrer");
  };

  return (
    <div className="contact-container">
      <h1 className='title3'>Contact Us</h1>
      <h1 className='sub-title3'>
        We'd love to hear from you! Feel free to reach out to us for any inquiries, reservations, or feedback.
      </h1>
      <div className="contact-info">
        <div className="contact-item">
        
          <button className='button2' onClick={() => openInNewTab("https://goo.gl/maps/MUf3aNs3gJnySY6t8")}>
          <FaMapMarkerAlt className="contact-icon" /> 
            Star'vin, Valanchery, Kerala
          </button>
        </div>
        <div className="contact-item">
          
          <button className='button2' onClick={() => openInNewTab("tel:+911234567890")}>
          <FaPhoneAlt className="contact-icon" /> 
            +91 1234567890
          </button>
        </div>
        <div className="contact-item">
          
          <button className='button2' onClick={() => openInNewTab("mailto:info@starvinrestaurant.com")}>
          <FaEnvelope className="contact-icon" /> 
            Email Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;