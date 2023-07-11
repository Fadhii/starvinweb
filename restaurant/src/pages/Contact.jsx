import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import '../css/Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>
        We'd love to hear from you! Feel free to reach out to us for any inquiries, reservations, or feedback.
      </p>
      <div className="contact-info">
        <div className="contact-item">
          <a
            href="https://goo.gl/maps/MUf3aNs3gJnySY6t8"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button"
          >
            <FaMapMarkerAlt className="contact-icon" />
            Star'vin, Valanchery, Kerala
          </a>
        </div>
        <div className="contact-item">
          <a href="tel:+911234567890" className="contact-button">
            <FaPhoneAlt className="contact-icon" />
            +91 1234567890
          </a>
        </div>
        <div className="contact-item">
          <a href="mailto:info@starvinrestaurant.com" className="contact-button">
            <FaEnvelope className="contact-icon" />
            Email Us
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;