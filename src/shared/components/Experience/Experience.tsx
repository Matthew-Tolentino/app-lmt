import React, { useEffect } from 'react';
import './Experience.scss';
import { Job } from '../../models/Job';

function Experience(job: Job) {
  return (
    <div className="exp-container">
      <div className="exp-header">
        {job.company} - {job.title}
      </div>
      <span className='exp-date'>
        {job.dateRange}
      </span>  
      <div className='content'>
        {job.description}
      </div>
      {GetSkills(job.skills)}
    </div>
  );
}

function GetSkills(skills: string[]) {
  return (
    <div className='skill-container'>
      {skills.map((skill: string) => {
        return (
          <div className="skill-chip" key={skill}>
            {skill}
          </div>
        );
      })}
    </div>
  );
}

export default Experience;