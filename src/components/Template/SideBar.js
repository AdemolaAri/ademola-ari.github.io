import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.png`} alt="" />
      </Link>
      <header>
        <h2>Ademola Arigbabuwo</h2>
        <p><a href="ademola.ari@gmail.com">ademola.ari@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>Your Favorite Tech Bro!</h2>
      <p>Hello World! Welcome to my page. I&apos;m a BUILDER and I like all things TECH.
        <p>Check out my projects and let me know what you think :)</p>
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Ademola Arigbabuwo <Link to="/">www.linkedin.com/in/ademolabuwo</Link>.</p>
    </section>
  </section>
);

export default SideBar;
