import './JobCard.css';

const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <div className="job-card-header">
        <div className="company-logo">{job.logo}</div>
        <div className="job-meta">
          <h3 className="job-title">{job.title}</h3>
          <div className="company-name">{job.company}</div>
          <div className="job-location">
            <span className="location-icon">📍</span>
            {job.location}
          </div>
        </div>
        <div className="job-salary">{job.salary}</div>
      </div>

      <div className="job-description">
        {job.description}
      </div>

      <div className="job-tags">
        {job.tags.map((tag, index) => (
          <span key={index} className="job-tag">{tag}</span>
        ))}
      </div>

      <div className="job-card-footer">
        <div className="job-details">
          <span className="job-type">{job.type}</span>
          <span className="job-remote">{job.remote}</span>
          <span className="job-posted">{job.posted}</span>
        </div>
        <button className="apply-button">Apply Now</button>
      </div>
    </div>
  );
};

export default JobCard;