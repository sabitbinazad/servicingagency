import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [navVisible, setNavVisible] = useState(false);

  const showMenu = () => setNavVisible(true);
  const hideMenu = () => setNavVisible(false);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Khalifa AC Fridge Maintenance</title>
        <link rel="shortcut icon" type="x-icon" href="/images/Khalifa AC Fridge Maintenance 1.png" />
        <link rel="stylesheet" href="/style.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-WJPDVXF6N8"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-WJPDVXF6N8');
            `,
          }}
        />
      </Head>

      <section className="header">
        <nav>
          <a href="/">
            <Image src="/images/Khalifa AC Fridge Maintenance 1.png" alt="Logo" width={150} height={150} />
          </a>
          <div className={`nav-links ${navVisible ? "visible" : ""}`} id="navLinks">
            <i className="fa fa-times" onClick={hideMenu}></i>
            <ul>
              <li><a href="/">HOME</a></li>
              <li><a href="/about">ABOUT</a></li>
              <li><a href="/contact">CONTACT</a></li>
            </ul>
          </div>
          <i className="fa fa-bars" onClick={showMenu}></i>
        </nav>

        <div className="text-box">
          <h1>Qatar Most Trusted AC and Fridge Servicing Agency</h1>
          <p>
            Discover unparalleled reliability and excellence in AC and fridge servicing with Qatar's most trusted agency.
            Our skilled technicians prioritize precision and customer satisfaction, ensuring your appliances operate at peak
            performance. Experience peace of mind with our top-notch service that goes beyond expectations.
          </p>
          <a href="tel:+8801721204389" className="hero-btn">Call Now: 01721204389</a>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h1>Our Services</h1>
        <div className="row">
          <div className="services-col">
            <h3>AC Maintenance</h3>
            <p>
              Beat the heat with Khalifa AC Fridge Maintenance, your trusted partner for top-notch AC repair and
              servicing in Qatar! As temperatures soar, ensure your air conditioning system is operating at peak
              performance with our expert maintenance services. Our skilled technicians specialize in
              comprehensive AC care, from routine check-ups to resolving complex issues. We pride ourselves on
              delivering prompt, reliable, and cost-effective solutions to keep your home or business cool and
              comfortable. Don't let a malfunctioning AC disrupt your comfort – choose Khalifa AC Fridge
              Maintenance for unparalleled service and enjoy the refreshing breeze all year round. Your
              satisfaction is our priority!
            </p>
          </div>
          <div className="services-col">
            <h3>Fridge Maintenance</h3>
            <p>
              Experience top-notch fridge maintenance with Khalifa AC Fridge Maintenance in Qatar! Our expert
              technicians are dedicated to ensuring your refrigerator runs efficiently, keeping your perishables
              fresh and your energy bills low. Whether it's routine servicing, repairs, or addressing specific
              issues, we pride ourselves on delivering prompt and reliable solutions. Trust Khalifa AC Fridge
              Maintenance for a seamless experience, as we prioritize your satisfaction and the longevity of your
              appliances. Don't let a malfunctioning fridge disrupt your daily life – contact us today for
              professional and affordable maintenance services that you can rely on.
            </p>
          </div>
          <div className="services-col">
            <h3>AC Fridge Buy and Sell</h3>
            <p>
              Discover a world of comfort as we not only provide top-notch AC and fridge maintenance but also offer
              a curated selection for you to buy and sell! Transform your living space with our high-quality
              appliances, featuring the latest technology for maximum efficiency and energy savings. At Khalifa AC
              Fridge Maintenance, we understand the importance of a reliable cooling system, and our expert team
              is here to guide you through the buying and selling process. Upgrade your home's climate control
              effortlessly with our trusted services. Don't miss out – contact us today for a refreshing deal that
              suits your needs and budget!
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery">
        <h1>Gallery</h1>
        <div className="row">
          <div className="gallery-col">
            <Image src="/images/Adsforac1.jpg" alt="Gallery 1" width={530} height={260} />
          </div>
          <div className="gallery-col">
            <Image src="/images/Adsforac2.jpg" alt="Gallery 2" width={530} height={260} />
          </div>
          <div className="gallery-col">
            <Image src="/images/Adsforac3.jpg" alt="Gallery 3" width={530} height={260} />
          </div>
        </div>
      </section>

      <section class="facilities">
        <h1>Why Choose Us</h1>
        <div class="row">
          <div class="facilities-col">
            <Image src="/images/facilities 1.jpg" alt="" width={530} height={260} />
            <h4>Expert Technicians</h4>
            <p>Our skilled technicians bring years of experience and in-depth knowledge to every job, ensuring
              efficient and effective solutions for your AC and fridge needs.</p>

          </div>
          <div class="facilities-col">
            <Image src="/images/facilities 2.jpg" alt="" width={530} height={260} />
            <h4>Comprehensive Services</h4>
            <p>From routine maintenance and repairs to buying and selling appliances, we offer a one-stop-shop for
              all your cooling needs. Count on us for holistic solutions tailored to your requirements.</p>
          </div>
          <div class="facilities-col">
            <Image src="/images/facilities 3.jpg" alt="" width={530} height={260} />
            <h4>Quality Products</h4>
            <p>When you choose to buy from us, you're investing in quality. Our selection of ACs and fridges
              encompasses the latest technology, delivering superior performance and energy efficiency.</p>

          </div>
        </div>
        <div class="row">
          <div class="facilities-col">
            <Image src="/images/facilities 4.jpg" alt="" width={530} height={260} />
            <h4>Reliable Repairs</h4>
            <p>Trust us to promptly diagnose and repair any issues with your appliances. We prioritize quick and
              efficient solutions to minimize disruptions to your daily routine.</p>
          </div>
          <div class="facilities-col">
            <Image src="/images/facilities 5.jpg" alt="" width={530} height={260} />
            <h4>Customer Satisfaction</h4>
            <p>Your satisfaction is our priority. We strive to exceed your expectations with prompt, friendly
              service and transparent communication throughout the process.</p>
          </div>
          <div class="facilities-col">
            <Image src="/images/facilities 6.jpg" alt="" width={530} height={260} />
            <h4>Competitive Pricing</h4>
            <p>Enjoy affordable and competitive pricing without compromising on the quality of service or products.
              We believe in providing value for your investment.</p>
          </div>
        </div>
      </section>
      <section class="testimonials">
        <h1>What Our Client Says</h1>
        <div class="testimonials-col">
          <Image src="/images/user1.png" alt="" width={60} height={60} />
          <div>
            <p>Exceptional Service! Khalifa AC Fridge Maintenance went above and beyond to address my AC issues.
              Their technicians are not only highly skilled but also courteous and professional. They took the
              time to explain the problem and provided a cost-effective solution. Additionally, I recently
              purchased a fridge from them, and the entire process was seamless. The selection was diverse, the
              pricing fair, and the quality outstanding. I highly recommend Khalifa AC Fridge Maintenance for
              their expertise, reliability, and top-notch customer service!</p>
            <h3>Rashid Khan</h3>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
          </div>
        </div>
        <div class="testimonials-col">
          <Image src="/images/user2.png" alt="" width={60} height={60} />
          <div>
            <p>I recently had a fantastic experience with Khalifa AC Fridge Maintenance, and I couldn't be more
              satisfied with their service. The technician was prompt, professional, and highly skilled. They
              quickly diagnosed and fixed the issue with my AC, leaving it running better than ever. The
              transparency in communication and fair pricing also impressed me. What sets Khalifa AC Fridge
              Maintenance apart is their commitment to customer satisfaction. I highly recommend their services
              for anyone in need of reliable and trustworthy AC and fridge maintenance. A five-star experience all
              around!</p>
            <h3>Abdul Kadir</h3>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
          </div>


        </div>
        <div class="testimonials-col">
          <Image src="/images/user3.png" alt="" width={60} height={60} />
          <div>
            <p>I had an excellent experience with Khalifa AC Fridge Maintenance! Their technicians were not only
              highly skilled but also extremely professional. They efficiently serviced my fridge, leaving it
              running like new. The team was prompt, courteous, and took the time to explain the issues and
              solutions. What I appreciated most was their honesty – they didn't try to upsell unnecessary
              services. Recently, I also purchased a new AC from them, and the entire process was smooth and
              hassle-free. The product quality is top-notch, and they offered a competitive price. Overall,
              Khalifa AC Fridge Maintenance has earned my trust, and I highly recommend them for their
              reliability, expertise, and customer-friendly approach.</p>
            <h3>Mahbub Al Fate</h3>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star-half-o" aria-hidden="true"></i>
          </div>


        </div>

      </section>

      <section class="cta">
        <h1>For Any Kinds Of Problem Please Contact Us. </h1>
        <a href="tel:+8801721204389" class="hero-btn">Call Now: 01721204389</a>

      </section>

      {/* Footer Section */}
      <section className="footer">
        <h4>About Us</h4>
        <p>
          Welcome to Khalifa AC Fridge Maintenance – your trusted partner for all your cooling needs in Qatar. Established with
          a commitment to excellence, we take pride in being a leading AC repair and servicing agency that goes beyond expectations.
        </p>
        <div className="icons">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-2x fa-facebook"></i>
          </a>
          <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-2x fa-whatsapp"></i>
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-2x fa-instagram"></i>
          </a>
        </div>
        <p>Made with <i className="fa fa-heart"> by Sabit Bin Azad</i></p>
      </section>
    </>
  );
}
