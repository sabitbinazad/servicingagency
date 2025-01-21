import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from "react";

const About = () => {
  const [navVisible, setNavVisible] = useState(false);

  const showMenu = () => setNavVisible(true);
  const hideMenu = () => setNavVisible(false);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Khalifa AC Fridge Maintenance</title>
        <link rel="shortcut icon" href="/images/Khalifa AC Fridge Maintenance 1.png" />
        <link rel="stylesheet" href="/style.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>

      <section className="sub-header">
        <nav>
          <a href="/"><img src="/images/Khalifa AC Fridge Maintenance 1.png" alt="Logo" /></a>
          <div className="nav-links" id="navLinks">
            <i className="fa fa-times" onClick={hideMenu}></i>
            <ul>
              <li><a href="/">HOME</a></li>
              <li><a href="/about">ABOUT</a></li>
              <li><a href="/contact">CONTACT</a></li>
            </ul>
          </div>
          <i className="fa fa-bars" onClick={showMenu}></i>
        </nav>
        <h1>About Us</h1>
      </section>

      <section className="about-us">
        <div className="row">
          <div className="about-col">
            <h1>Our Mission</h1>
            <p>
              At Khalifa AC Fridge Maintenance, our mission is to provide unparalleled service and
              top-quality products to ensure the comfort and satisfaction of our valued customers. We
              strive to create long-lasting relationships built on trust, reliability, and excellence in
              every interaction.
            </p>
          </div>
          <div className="about-col">
            <Image
              src="/images/AdsforAc2d.jpg"
              alt="AC Ads"
              width={500}
              height={370}
            />
          </div>
        </div>
      </section>

      <section className="about-us1">
        <div className="row">
          <div className="about-col1">
            <h1>Why Choose Us?</h1>
            <p>1. Expertise: Our team consists of highly skilled technicians with extensive experience in AC and fridge maintenance, repair, and sales. You can rely on us for comprehensive solutions tailored to your specific requirements.</p>
            <p>2. Comprehensive Services: From routine maintenance to emergency repairs, and from buying and selling appliances, we offer a wide range of services to meet all your cooling needs under one roof.</p>
            <p>3. Quality Products: When you choose Khalifa AC Fridge Maintenance, you're choosing quality. Our selection of ACs and fridges features the latest technology, ensuring optimal performance and energy efficiency.</p>
            <p>4. Customer-Centric Approach: Your satisfaction is our priority. We take the time to understand your unique needs and provide personalized solutions. Transparent communication and a friendly, customer-centric approach are at the core of our business.</p>
            <p>5. Reliability: Count on us for reliable and prompt services. We understand the importance of a well-functioning cooling system, and our team is dedicated to ensuring your appliances operate at their best.</p>
            <p>6. Competitive Pricing: Enjoy competitive and transparent pricing without compromising on the quality of our services or products. We believe in offering value for your investment.</p>
          </div>
        </div>
      </section>

      <section className="cta">
        <h1>For Any Kinds Of Problem Please Contact Us.</h1>
        <a href="tel:+8801721204389" className="hero-btn">Call Now: 01721204389</a>
      </section>

      <section className="footer">
        <h4>About Us</h4>
        <p>
          Welcome to Khalifa AC Fridge Maintenance – your trusted partner for all your cooling needs in Qatar.
          Established with a commitment to excellence, we take pride in being a leading AC repair and servicing agency.
        </p>
        <div className="icons">
          <a href="https://www.facebook.com/" target="_blank">
            <i className="fa fa-2x fa-facebook"></i>
          </a>
          <a href="https://wa.me/" target="_blank">
            <i className="fa fa-2x fa-whatsapp"></i>
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <i className="fa fa-2x fa-instagram"></i>
          </a>
        </div>
        <p>Made with <i className="fa fa-heart"> by Sabit Bin Azad</i></p>
      </section>


    </>
  );
};

export default About;
