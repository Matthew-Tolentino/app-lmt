import React, { useEffect } from 'react';
import './Experiences.scss';
import Experience from '../../shared/components/Experience/Experience';
import { Job } from '../../shared/models/Job';

function Experiences() {
  let jobs: Job[] = [
    {
      company: 'Brandes Associates',
      title: 'Full Stack Developer',
      dateRange: 'August 2021 - Present',
      description: [
        'Spearheaded the redesign, development, and deployment of a microservice-based web application, enabling global users to access mission-critical files',
        'Utilized Angular and Typescript for frontend development, while leveraging .NET, EF Core, and LINQ for backend functionality',
        'Integrated PostgreSQL and MongoDB databases to manage and store diverse data sets',
        'Implemented x509 authentication and user sessions tokens into webapp via Keycloak'
      ],
      skills: ['Angular', 'Typescript', '.Net', 'EF Core', 'LINQ', 'PostgreSQL', 'MongoDB', 'C#']
    },
    {
      company: 'iDTech Camps',
      title: 'Online Instructor',
      dateRange: 'April 2020 - January 2021',
      description: [
        'Taught and supported online courses for Unity, python, and machine learning for 3-5 high school students',
        'Managed and supervised every student in visualizing and developing a game as a final project, resulting in 25 unique games developed by the end of camp'
      ],
      skills: ['Unity', 'C#', 'Python', 'Machine Learning']
    },
    {
      company: 'Pugonetworks',
      title: 'Junior Network Admin / Programmer',
      dateRange: 'June 2016 - September 2019',
      description: [
        'Reverse-engineered routing configurations to map and document network infrastructure',
        'Developed python scripts to automate and streamline configuration deployment'
      ],
      skills: ['Python', 'Visio', 'BGP Protocol', 'Routing']
    },
  ];
  
  return (
    <>
      <div className="section-title">Experience</div>
      <div className="experiences-grid">
        {
          jobs.map((job: Job, index: number) => {
            return (
              <Experience index={index} job={job}/>
            );
          })
        }
        {/* <Experience {...jobs}/> */}
      </div>
    </>
  );
}

export default Experiences;