import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

export default function Contact() {
    const [navVisible, setNavVisible] = useState(false);

    const showMenu = () => setNavVisible(true);
    const hideMenu = () => setNavVisible(false);
  
  return (
    <>
      <Head>
        <title>Khalifa AC Fridge Maintenance</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/images/Khalifa AC Fridge Maintenance 1.png"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-WJPDVXF6N8"
        ></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag() {
              dataLayer.push(arguments);
            }
            gtag("js", new Date());
            gtag("config", "G-WJPDVXF6N8");
          `}
        </script>
      </Head>
      <section class="sub-header1">
        <nav>
        <a href="/">
            <Image
              src="/images/Khalifa AC Fridge Maintenance 1.png"
              alt="Logo"
              width={150}
              height={150}
            />
          </a>
            <div class="nav-links" id="navLinks">
                <i class="fa fa-times" onclick="hideMenu"></i>
                <ul>
                    <li><a href="/">HOME</a></li>
                    <li><a href="/about">ABOUT</a></li>
                    <li><a href="/contact">CONTACT</a></li>
                </ul>

            </div>
            <i class="fa fa-bars" onclick="showMenu"></i>
        </nav>
        <h1>Contact us</h1>
    </section>

      <main>
        <section className="contact-us">
          <div className="row">
            <div className="contact-col">
              <div>
                <i className="fa fa-home"></i>
                <span>
                  <h5>Zone 26, Street 943</h5>
                  <p>Doha, Qatar</p>
                </span>
              </div>
              <div>
                <i className="fa fa-phone"></i>
                <span>
                  <a href="tel:+8801721204389">
                    <h5>+88 01721204389</h5>
                  </a>
                  <p>Tuesday - Monday: 8:00 AM - 11:00 PM</p>
                  <p>Friday: 2:00 PM - 11:00 PM</p>
                </span>
              </div>
              <div>
                <i className="fa fa-envelope-o"></i>
                <span>
                  <h5>sabitbinazad01@gmail.com</h5>
                  <p>Email us your query</p>
                </span>
              </div>
            </div>
            <div className="contact-col">
              <form action="/api/form" method="post">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email address"
                  required
                />
                <input
                  type="number"
                  name="phone"
                  placeholder="Enter phone number"
                  required
                />
                <textarea
                  rows="10"
                  name="message"
                  placeholder="Message"
                  required
                ></textarea>
                <button type="submit" className="hero-btn1 red-btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        <section className="cta">
          <h1>For Any Kinds Of Problem Please Contact Us. </h1>
          <a href="tel:+8801721204389" className="hero-btn">
            Call Now: 01721204389
          </a>
        </section>
      </main>

      <footer>
        <section className="footer">
          <h4>About Us</h4>
          <p>
            Welcome to Khalifa AC Fridge Maintenance – your trusted partner for
            all your cooling needs in Qatar.
          </p>
          <div className="icons">
            <a href="https://www.facebook.com/" target="_blank">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="https://wa.me/" target="_blank">
              <i className="fa fa-whatsapp"></i>
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <i className="fa fa-instagram"></i>
            </a>
          </div>
          <p>Made with <i className="fa fa-heart"> by Sabit Bin Azad</i></p>
        </section>
      </footer>

    </>
  );
}
