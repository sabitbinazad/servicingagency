import React from 'react';
import { FaFacebook, FaWhatsapp, FaInstagram, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <section className="footer">
      <h4>About Us</h4>
      <p>
        Welcome to Khalifa AC Fridge Maintenance – your trusted partner for all your cooling needs in Qatar. <br />
        Established with a commitment to excellence, we take pride in being a leading AC repair and servicing agency that goes beyond expectations.
      </p>
      <div className="icons">
        <a href="https://www.facebook.com/Romandohaqatarofficial?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={30} />
        </a>
        <a href="https://wa.me/message/NHUL5AOPLO43C1" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp size={30} />
        </a>
        <a href="https://www.instagram.com/romansheikh403?igsh=ZXN0dnE3NDFsYXh0" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} />
        </a>
      </div>
      <p>Made with <FaHeart style={{ color: 'red' }} /></p>
    </section>
  );
};

export default Footer;
