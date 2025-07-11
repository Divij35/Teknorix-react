import React from 'react';
import { useNavigate } from 'react-router-dom';

function JobCard({ job }) {
  const navigate = useNavigate();

  return (
    <div className="job-card">
      <h3>{job.title}</h3>
      <p>{job.location?.title}</p>
      <button onClick={() => navigate(`/job/${job.id}`)}>View</button>
      <a href={job.applicationUrl} target="_blank" rel="noopener noreferrer">
        <button>Apply</button>
      </a>
    </div>
  );
}

export default JobCard;