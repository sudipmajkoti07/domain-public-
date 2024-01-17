// Projects.js
import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectsData = [
    { name: 'ETL of weather api', technologies: 'python,airflow,pandas,weatherapi,aws s3' },
    { name: 'ETL of jobs portal', technologies: 'python, airflow , aws s3, aws ec2, pandas , requests, beautifulsoup' },
    { name: 'ETL of twitter api', technologies: 'aws ec2 , aws s3, airflow , pandas,twitter api,python' },
    { name: 'Data modeling of HR', technologies: 'MYsql,powerBI' },
    { name: 'supermarket dashboard', technologies: 'powerBI' },
    { name: 'Hospital management system', technologies: 'python' },
    { name: 'personal portfolio', technologies: 'js, React' },
    { name: 'Machine learning models', technologies: 'supervised/unsupervised LM' },
    { name: 'EDA of sales', technologies: 'pandas/pyspark' },
    // Add more projects as needed
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
