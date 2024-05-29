import React from 'react';
import Project from '../components/Project';

const projects = [
  { title: 'Project 1', image: '/assets/images/project1.jpg', demoLink: '#', repoLink: '#' },
  { title: 'Project 2', image: '/assets/images/project2.jpg', demoLink: '#', repoLink: '#' },
  { title: 'Project 3', image: '/assets/images/project3.jpg', demoLink: '#', repoLink: '#' },
  { title: 'Project 4', image: '/assets/images/project4.jpg', demoLink: '#', repoLink: '#' },
  { title: 'Project 5', image: '/assets/images/project5.jpg', demoLink: '#', repoLink: '#' },
  { title: 'Project 6', image: '/assets/images/project6.jpg', demoLink: '#', repoLink: '#' }
];

const Portfolio = () => {
  return (
    <section>
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
