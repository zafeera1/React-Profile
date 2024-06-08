import React from 'react';

const projects = [
  {
    title: 'Google Book Search',
    image: './Assets/images/340ce0a2db6bec8cc47c58861d416ec2.png',
    demoLink: 'https://google-book-searcher.onrender.com ',
    repoLink: 'https://github.com/zafeera1/Google-Book-Searcher',
  },
  {
    title: 'Quiz Game',
    image: './Assets/images/2edf018f63c9cc19666a2098889c7579.png',
    demoLink: 'https://zafeera1.github.io/Quiz-game/ ',
    repoLink: 'https://github.com/zafeera1/Quiz-game',
  },
  {
    title: 'Personal Note Taker',
    image: './Assets/images/f373445cfac9f3f9693922b707d28b90.png.jpg',
    demoLink: ' ',
    repoLink: 'https://github.com/zafeera1/Note-Taker',
  },
];

const Project = ({ title, image, demoLink, repoLink }) => {
  return (
    <div className="project">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <a href={demoLink}>Demo:</a>
      <a href={repoLink}>Repo:</a>
    </div>
  );
};

const ProjectList = () => {
  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <Project 
          key={index}
          title={project.title}
          image={project.image}
          demoLink={project.demoLink}
          repoLink={project.repoLink}
        />
      ))}
    </div>
  );
};

export default ProjectList;
