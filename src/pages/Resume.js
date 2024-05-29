import React from 'react';

const Resume = () => {
  return (
    <section>
      <h2>Resume</h2>
      <a href="/assets/resume.pdf" download>Download Resume</a>
      <h3>Proficiencies</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>MongoDB</li>
        {/* Add more proficiencies as needed */}
      </ul>
    </section>
  );
};

export default Resume;
