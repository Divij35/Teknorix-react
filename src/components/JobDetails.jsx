import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getJobDetails, getJobs } from '../services/api';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from 'react-share';
import './styles/ShareButtons.scss';

function JobDetails() {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [relatedJobs, setRelatedJobs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await getJobDetails(id);
      setJob(res);

      const related = await getJobs({ department: res.department.name });
      setRelatedJobs(related.filter((j) => j.id !== res.id));
    }
    fetchData();
  }, [id]);

  if (!job) return <p>Loading...</p>;

  return (
    <div>
      <h2>{job.title}</h2>
      <p>{job.description}</p>
      <a href={job.applicationUrl} target="_blank" rel="noopener noreferrer">
        <button>Apply</button>
      </a>

      <h3>Share:</h3>
      <FacebookShareButton url={window.location.href} className="facebook-btn">Facebook</FacebookShareButton>
      <LinkedinShareButton url={window.location.href} className="linkedin-btn">LinkedIn</LinkedinShareButton>
      <TwitterShareButton url={window.location.href} className="twitter-btn">Twitter</TwitterShareButton>

      <h3>Other jobs in {job.department.name}</h3>
      <ul>
        {relatedJobs.map((j) => (
          <li key={j.id}>{j.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default JobDetails;