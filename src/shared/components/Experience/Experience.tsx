import React, { useEffect } from 'react';
import './Experience.scss';
import { Job } from '../../models/Job';

function Experience(props: any) {
  const {index, job} = props;

  return (
    <div className={`exp-container ${GetFadeInClass(index)}`}>
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

function GetFadeInClass(index: number) {
  let target = index % 3;
  return target == 0 ? 'reveal-left-1' :
         target == 1 ? 'reveal-left-2' :
         'reveal-left-3';
}

export default Experience;