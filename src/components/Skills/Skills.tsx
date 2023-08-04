import React, { useState } from 'react';
import SkillOrb from '../../shared/components/SkillOrb/SkillOrb';
import './Skills.scss';

function Skills() {
  return (
    <div className='skill-grid'>
      <SkillOrb />
    </div>
  );
}

export default Skills;