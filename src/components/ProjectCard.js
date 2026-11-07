import React from 'react';

const ProjectCard = ({ 
  title, 
  subtitle, 
  description, 
  tags = [], 
  highlights = [], 
  demoUrl, 
  codeUrl, 
  featured = false 
}) => {
  return (
    <div className={`project-card ${featured ? 'project-card-featured' : ''}`}>
      <div className="project-card-header">
        {subtitle && <span className="project-subtitle">{subtitle}</span>}
        {featured && <span className="featured-badge">Featured</span>}
      </div>
      
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>

      {highlights.length > 0 && (
        <ul className="project-highlights">
          {highlights.map((highlight, idx) => (
            <li key={idx}>{highlight}</li>
          ))}
        </ul>
      )}

      {tags.length > 0 && (
        <div className="project-tags">
          {tags.map((tag, idx) => (
            <span key={idx} className="tag">{tag}</span>
          ))}
        </div>
      )}

      {(demoUrl || codeUrl) && (
        <div className="project-links">
          {demoUrl && (
            <a 
              href={demoUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-sm btn-primary"
            >
              Live Demo &rarr;
            </a>
          )}
          {codeUrl && (
            <a 
              href={codeUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-sm btn-outline"
            >
              Source Code
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
