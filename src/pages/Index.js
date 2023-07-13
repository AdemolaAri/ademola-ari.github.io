import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main description="Ademola Arigbabuwo, a tech enthusiast and lifelong learner!">
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading">
            <Link to="/">About this site</Link>
          </h2>
          <p>
            Welcome to my personal website! I&apos;m delighted to have you here.
            Please feel free to read more <Link to="/about">about me</Link>, or
            you can check out my <Link to="/resume">resume</Link>,{' '}
            <Link to="/blog">blog site </Link>
            or <Link to="/contact">contact</Link> me.
          </p>
        </div>
      </header>
      <p> :)</p>
    </article>
  </Main>
);

export default Index;
