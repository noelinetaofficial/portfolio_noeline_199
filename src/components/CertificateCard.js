import React from 'react';

const CertificateCard = ({
  title,
  type,
  issuer,
  date,
  event,
  team,
  description,
  image,
  tags = [],
  onView
}) => {
  return (
    <div className="certificate-card">
      {image && (
        <div className="certificate-thumb-wrapper" onClick={() => onView && onView({ title, image, issuer, date, type })}>
          <img src={image} alt={title} className="certificate-thumb" />
          <div className="certificate-overlay">
            <span>Click to View Full Certificate</span>
          </div>
        </div>
      )}
      
      <div className="certificate-body">
        <div className="certificate-meta">
          <span className="certificate-type-pill">{type}</span>
          <span className="certificate-date">{date}</span>
        </div>

        <h3 className="certificate-title">{title}</h3>
        <p className="certificate-issuer"><strong>Issuer:</strong> {issuer}</p>
        {event && <p className="certificate-event"><strong>Event:</strong> {event}</p>}
        {team && <p className="certificate-team"><strong>Team:</strong> {team}</p>}
        <p className="certificate-desc">{description}</p>

        {tags.length > 0 && (
          <div className="certificate-tags">
            {tags.map((t, idx) => (
              <span key={idx} className="cert-tag">{t}</span>
            ))}
          </div>
        )}

        {image && (
          <button 
            type="button" 
            className="btn btn-sm btn-outline-primary cert-view-btn"
            onClick={() => onView && onView({ title, image, issuer, date, type })}
          >
            View Certificate Document &rarr;
          </button>
        )}
      </div>
    </div>
  );
};

export default CertificateCard;
