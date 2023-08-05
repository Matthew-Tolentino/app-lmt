import React, { useState } from 'react';
import './SkillOrb.scss';
import { Skill } from '../../models/Skill';

function SkillOrb(skill: Skill) {
  return (
    <div className="center-orb">
      {skill.name}
      {setChildren(skill.skillset)}
    </div>
  );
}

function setChildren(skills: string[]) {
  let angle = 360 / skills.length;
  return (
    skills.map((skill, index) => {
      let rotAngle = (angle * index) + 270;

      return (
        <div 
          className="outer-orb"
          style={{
            '--angle': `${rotAngle}deg`,
            '--negangle': `-${rotAngle}deg`
          } as React.CSSProperties}
        >
          {skill}
        </div>
      );
    })
  );
}

export default SkillOrb;