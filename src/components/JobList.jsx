import React, { useEffect, useState } from 'react';
import { getJobs, getDepartments, getLocations, getFunctions } from '../services/api';
import JobCard from '../components/JobCard';
import FilterBar from '../components/FilterBar';

function JobList() {
  const [allJobs, setAllJobs] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState({});
  const [lookups, setLookups] = useState({});

  useEffect(() => {
    fetchJobs();
  }, []);

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

  useEffect(() => {
    let filtered = allJobs;
    if (filters.department) {
      filtered = filtered.filter(job => job.department?.title === filters.department);
    }
    if (filters.location) {
      filtered = filtered.filter(job => job.location?.title === filters.location);
    }
    if (filters.function) {
      filtered = filtered.filter(job => job.function?.title === filters.function);
    }
    if (filters.search) {
      filtered = filtered.filter(job =>
        job.title.toLowerCase().includes(filters.search.toLowerCase())
      );
    }
    setJobs(filtered);
  }, [filters, allJobs]);

  const fetchJobs = async () => {
    const res = await getJobs(); // Fetching all the jobs without filters/lookups
    setAllJobs(res);
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