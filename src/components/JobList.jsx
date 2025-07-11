import React, { useEffect, useState } from 'react';
import { getJobs, getDepartments, getLocations, getFunctions } from '../services/api';
import JobCard from '../components/JobCard';
import FilterBar from '../components/FilterBar';

function JobList() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState({});
  const [lookups, setLookups] = useState({});

  useEffect(() => {
    fetchJobs();
  }, [filters]);

  useEffect(() => {
  const fetchLookups = async () => {
    const department = await getDepartments();
    const location = await getLocations();
    const fun = await getFunctions();

    setLookups({
      departments: department,
      locations: location,
      functions: fun,
    });
  };
  fetchLookups();
}, []);

  const fetchJobs = async () => {
    const res = await getJobs(filters);
    setJobs(res);
  };

  return (
    <div>
      <FilterBar filters={filters} setFilters={setFilters} lookups={lookups} />
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}

export default JobList;