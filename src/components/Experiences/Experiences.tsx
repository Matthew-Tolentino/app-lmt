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
      description: 'Redesign, develop, and deploy a new microservice webapp hosting mission critical files to be served to users around the globe.',
      skills: ['Angular', 'Typescript', '.Net', 'EF Core', 'LINQ', 'PostgreSQL', 'MongoDB', 'C#']
    },
    {
      company: 'iDTech Camps',
      title: 'Online Instructor',
      dateRange: 'J| April 2020 - January 2021',
      description: 'Reversed engineered routing configurations to map out networks and utilize python to create scripts for easy config deployment.',
      skills: ['Unity', 'C#', 'Python', 'Machine Learning']
    },
    {
      company: 'Pugonetworks',
      title: 'Junior Network Administrator/Programmer',
      dateRange: 'June 2016 - September 2019',
      description: 'Reversed engineered routing configurations to map out networks and utilize python to create scripts for easy config deployment.',
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