import React, { useEffect, useState } from 'react';
import './Project.scss';

function Project(props: any) {
  const {index, proj, onOpenDemoPlayer} = props;

  return (
    <div 
      className='proj-container reveal-left-1'
      onClick={() => onOpenDemoPlayer(proj.link)}
    >
      <div className='proj-img'>
        {
          proj.image 
            ? ( <img className="img" src={proj.image}></img> ) 
            : "image"
        }
      </div>
      <div className='proj-content'>
        <div className='exp-header'>
          {proj.title}
        </div>
        <div className='content'>
          {proj.description}
        </div>
        {GetSkills(proj.skills)}
      </div>
    </div>
  )
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

export default Project;