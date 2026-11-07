import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionFeedback, setSubmissionFeedback] = useState(null);

  // Email validation regex
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  // Phone validation: allows optional +91, spaces, dashes, but must have 10 digits
  const validatePhone = (phone) => {
    // Strip non-digit characters
    const cleanDigits = phone.replace(/\D/g, '');
    // If it starts with 91 and has 12 digits, or has exactly 10 digits
    if (cleanDigits.length === 10) return true;
    if (cleanDigits.length === 12 && cleanDigits.startsWith('91')) return true;
    return false;
  };

  // Field validation function
  const validateField = (name, value) => {
    let error = '';
    const trimmed = (value || '').trim();

    switch (name) {
      case 'name':
        if (!trimmed) {
          error = 'Full name is required.';
        } else if (trimmed.length < 3) {
          error = 'Name must be at least 3 characters long.';
        } else if (!/^[a-zA-Z\s.]+$/.test(trimmed)) {
          error = 'Name can only contain alphabets, spaces, and dots.';
        }
        break;

      case 'email':
        if (!trimmed) {
          error = 'Email address is required.';
        } else if (!validateEmail(trimmed)) {
          error = 'Please enter a valid email address (e.g. name@example.com).';
        }
        break;

      case 'phone':
        if (!trimmed) {
          error = 'Phone number is required.';
        } else if (!validatePhone(trimmed)) {
          error = 'Please enter a valid 10-digit mobile number.';
        }
        break;

      case 'subject':
        if (!trimmed) {
          error = 'Subject is required.';
        } else if (trimmed.length < 4) {
          error = 'Subject must be at least 4 characters long.';
        }
        break;

      case 'message':
        if (!trimmed) {
          error = 'Message content is required.';
        } else if (trimmed.length < 10) {
          error = 'Message must be at least 10 characters to provide sufficient detail.';
        }
        break;

      default:
        break;
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // If already touched, validate on the fly
    if (touched[name]) {
      const fieldError = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: fieldError }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const fieldError = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: fieldError }));
  };

  const validateAll = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const err = validateField(key, formData[key]);
      if (err) {
        newErrors[key] = err;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mark all as touched
    const allTouched = {};
    Object.keys(formData).forEach((key) => {
      allTouched[key] = true;
    });
    setTouched(allTouched);

    const isValid = validateAll();

    if (isValid) {
      setSubmissionFeedback({
        type: 'success',
        title: 'Enquiry Sent Successfully!',
        message: `Thank you, ${formData.name.trim()}! Your message regarding "${formData.subject.trim()}" has been received. I will respond to ${formData.email.trim()} promptly.`,
        data: { ...formData }
      });
      setIsSubmitted(true);
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setErrors({});
      setTouched({});
    } else {
      setSubmissionFeedback({
        type: 'error',
        title: 'Submission Failed',
        message: 'Please review and correct the invalid or missing fields highlighted in red below.'
      });
    }
  };

  const handleResetForm = () => {
    setIsSubmitted(false);
    setSubmissionFeedback(null);
  };

  return (
    <div className="page contact-page">
      <div className="page-header">
        <span className="page-header-eyebrow">Get In Touch</span>
        <h1 className="page-title">Contact Me</h1>
        <p className="page-lead">
          Have an inquiry, project proposal, or feedback on my examination portfolio?
          Fill out the form below or reach out directly through my contact coordinates.
        </p>
      </div>

      <div className="contact-container">
        {/* Contact Info Sidebar Card */}
        <aside className="contact-info-card">
          <div className="info-header">
            <h3>Direct Contact Coordinates</h3>
            <p>I am always open to exploring frontend roles, hackathons, and creative collaborations.</p>
          </div>

          <div className="contact-item">
            <div className="contact-item-icon">&#9993;</div>
            <div className="contact-item-text">
              <span className="label">Official Email</span>
              <a href="mailto:noelineta.official@gmail.com" className="value">noelineta.official@gmail.com</a>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-item-icon">&#9742;</div>
            <div className="contact-item-text">
              <span className="label">Phone / WhatsApp</span>
              <a href="tel:+919048444211" className="value">+91 9048444211</a>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-item-icon">&#127979;</div>
            <div className="contact-item-text">
              <span className="label">Academic Institution</span>
              <span className="value">Christ College of Engineering (Autonomous)</span>
              <span className="subvalue">Irinjalakuda, Kerala</span>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-item-icon">&#128337;</div>
            <div className="contact-item-text">
              <span className="label">Typical Response Time</span>
              <span className="value">Within 24 Hours</span>
            </div>
          </div>

          <div className="verification-badge-box">
            <div className="badge-title">Candidate Credentials</div>
            <p><strong>Candidate:</strong> Noeline T A</p>
            <p><strong>Register No:</strong> 199</p>
            <p><strong>Examination:</strong> Ziuke Infotech React.js Practical Exam</p>
          </div>
        </aside>

        {/* Contact Form Section */}
        <section className="contact-form-wrapper">
          {submissionFeedback && (
            <div className={`status-banner status-${submissionFeedback.type}`}>
              <div className="status-banner-icon">
                {submissionFeedback.type === 'success' ? '✓' : '⚠'}
              </div>
              <div className="status-banner-content">
                <h4>{submissionFeedback.title}</h4>
                <p>{submissionFeedback.message}</p>
                {submissionFeedback.type === 'success' && (
                  <button 
                    type="button" 
                    className="btn btn-sm btn-outline-success mt-2" 
                    onClick={handleResetForm}
                  >
                    Send Another Message
                  </button>
                )}
              </div>
            </div>
          )}

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="contact-form" noValidate>
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Your Full Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="e.g. Noeline T A"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`form-input ${touched.name && errors.name ? 'input-error' : ''} ${touched.name && !errors.name ? 'input-valid' : ''}`}
                />
                {touched.name && errors.name && (
                  <span className="error-text">&#9888; {errors.name}</span>
                )}
              </div>

              <div className="form-row">
                <div className="form-group form-col">
                  <label htmlFor="email" className="form-label">
                    Email Address <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="e.g. user@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`form-input ${touched.email && errors.email ? 'input-error' : ''} ${touched.email && !errors.email ? 'input-valid' : ''}`}
                  />
                  {touched.email && errors.email && (
                    <span className="error-text">&#9888; {errors.email}</span>
                  )}
                </div>

                <div className="form-group form-col">
                  <label htmlFor="phone" className="form-label">
                    Phone Number <span className="required">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="e.g. 9048444211 or +91 9048444211"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`form-input ${touched.phone && errors.phone ? 'input-error' : ''} ${touched.phone && !errors.phone ? 'input-valid' : ''}`}
                  />
                  {touched.phone && errors.phone && (
                    <span className="error-text">&#9888; {errors.phone}</span>
                  )}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Subject <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="e.g. Job Opportunity / Practical Project Evaluation"
                  value={formData.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`form-input ${touched.subject && errors.subject ? 'input-error' : ''} ${touched.subject && !errors.subject ? 'input-valid' : ''}`}
                />
                {touched.subject && errors.subject && (
                  <span className="error-text">&#9888; {errors.subject}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Your Message <span className="required">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Write your detailed enquiry or message here..."
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`form-input form-textarea ${touched.message && errors.message ? 'input-error' : ''} ${touched.message && !errors.message ? 'input-valid' : ''}`}
                ></textarea>
                {touched.message && errors.message && (
                  <span className="error-text">&#9888; {errors.message}</span>
                )}
              </div>

              <button type="submit" className="btn btn-primary btn-submit">
                Submit Enquiry &rarr;
              </button>
            </form>
          ) : (
            <div className="submitted-confirmation">
              <div className="check-icon">&#10004;</div>
              <h3>Thank you for reaching out!</h3>
              <p>Your message has been safely recorded.</p>
              <button 
                type="button" 
                className="btn btn-primary" 
                onClick={handleResetForm}
              >
                Send Another Message
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Contact;
