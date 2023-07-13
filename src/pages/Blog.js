import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

// import Cell from '../components/Blog/Cell';
// import data from '../data/blog';

const Blog = () => (
  <Main title="Blog" description="Ademola Arigbabuwo ' Blog Posts.">
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2 data-testid="heading">
            <Link to="/blog">Blog</Link>
          </h2>
          <p>
            I plan to put everything I think the rest of the world should know
            about here
          </p>
        </div>
      </header>
      {/* data.map((project) => (
        <Cell
          data={project}
          key={project.title}
        />
      )) */}
    </article>
  </Main>
);

export default Blog;
