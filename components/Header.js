import React from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  return (
    <section className="sub-header">
      <nav>
        <Link href="/">
          <img src="/images/Khalifa AC Fridge Maintenance 1.png" alt="Logo" />
        </Link>
        <div className="nav-links" id="navLinks">
          <FaTimes className="fa fa-times" onClick={hideMenu} />
          <ul>
            <li><Link href="/">HOME</Link></li>
            <li><Link href="/about">ABOUT</Link></li>
            <li><Link href="/contact">CONTACT</Link></li>
          </ul>
        </div>
        <FaBars className="fa fa-bars" onClick={showMenu} />
      </nav>
      <h1>About us</h1>
    </section>
  );

  function showMenu() {
    document.getElementById("navLinks").style.right = "0";
  }

  function hideMenu() {
    document.getElementById("navLinks").style.right = "0";
  }
};

export default Header;
