import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import ContactIcons from '../components/Contact/ContactIcons';
import LinkedinBadge from '../components/Contact/LinkedinBadge';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Ademola via email @ ademola.ari@gmail.com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2 data-testid="heading">
            <Link to="/contact">Contact</Link>
          </h2>
        </div>
      </header>
      <div className="email-at">
        <p>Feel free to get in touch </p>
        <LinkedinBadge />
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
