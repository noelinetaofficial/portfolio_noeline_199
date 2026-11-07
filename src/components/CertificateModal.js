import React, { useEffect } from 'react';

const CertificateModal = ({ certificate, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!certificate) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <span className="modal-badge">{certificate.type}</span>
            <h3 className="modal-title">{certificate.title}</h3>
            <p className="modal-subtitle">{certificate.issuer} &bull; {certificate.date}</p>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close Modal">&times;</button>
        </div>

        <div className="modal-image-container">
          <img 
            src={certificate.image} 
            alt={certificate.title} 
            className="modal-image" 
          />
        </div>

        <div className="modal-footer">
          <a 
            href={certificate.image} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-sm btn-outline"
          >
            Open Original File
          </a>
          <button className="btn btn-sm btn-primary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CertificateModal;
