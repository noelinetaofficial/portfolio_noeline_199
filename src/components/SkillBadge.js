import React from 'react';

const SkillBadge = ({ skill, category, level }) => {
  return (
    <span className={`skill-badge ${category ? `category-${category.toLowerCase()}` : ''}`}>
      <span className="skill-dot"></span>
      <span className="skill-name">{skill}</span>
      {level && <span className="skill-level">{level}</span>}
    </span>
  );
};

export default SkillBadge;
