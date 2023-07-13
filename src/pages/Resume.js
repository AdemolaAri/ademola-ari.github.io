import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Skills from '../components/Resume/Skills';
import Experience from '../components/Resume/Experience';
import Education from '../components/Resume/Education';
// import Courses from '../components/Resume/Courses';
import References from '../components/Resume/References';

// import courses from '../data/resume/courses';
import degrees from '../data/resume/degrees';
import positions from '../data/resume/positions';
import { skills, categories } from '../data/resume/skills';

const sections = ['Experience', 'Education', 'Skills', 'References'];

const Resume = () => (
  <Main title="Resume" description="Ademola Arigbabuwo's Resume">
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2 data-testid="heading">
            <Link to="resume">Resume</Link>
          </h2>
          <div className="link-container">
            {sections.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>
            ))}
          </div>
        </div>
      </header>
      <Skills skills={skills} categories={categories} />
      <br />
      <Experience data={positions} />
      <br />
      <Education data={degrees} />
      <br />
      <br />
      <References />
    </article>
  </Main>
);

export default Resume;
