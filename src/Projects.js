// Projects.js
import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectsData = [
    { name: 'Deploy Api in aws', technologies: 'Fastapi , python ,aws' },
    { name: 'Spotify pipeline', technologies: 'python, aws ec2, airflow , linux' },
    { name: 'twitter pipeline', technologies: 'aws ec2 , aws s3, airflow , pandas' },
    // Add more projects as needed
  ];

  return (
    <div className="projects">
      <h2>My Projects</h2>
      <table>
        <thead>
          <tr>
            <th>Project Name</th>
            <th>Technologies Used</th>
          </tr>
        </thead>
        <tbody>
          {projectsData.map((project, index) => (
            <tr key={index}>
              <td>{project.name}</td>
              <td>{project.technologies}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Projects;
