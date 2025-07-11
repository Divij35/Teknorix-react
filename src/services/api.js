import axios from 'axios';
const BASE_URL = 'https://teknorix.jobsoid.com/';

export const getJobs = async (filters={},page = 1, limit = 10) => {
  try {
    const response = await axios.get(`${BASE_URL}api/v1/jobs`, {
      params: {
        ...filters,
        page,
        limit,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching jobs:', error);
    throw error;
  }
}

export const getJobDetails = async (jobId) => {
  try {
    const response = await axios.get(`${BASE_URL}api/v1/jobs/${jobId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching job details:', error);
    throw error;
  }
}

export const getDepartments = async () => {
  try {
    const res = await axios.get(`${BASE_URL}api/v1/departments`);
    return res.data;
  } catch (error) {
    console.error('Error fetching departments:', error);
    throw error;
  }
};

export const getLocations = async () => {
  try {
    const res = await axios.get(`${BASE_URL}api/v1/locations`);
    return res.data;
  } catch (error) {
    console.error('Error fetching locations:', error);
    throw error;
  }
};

export const getFunctions = async () => {
  try {
    const res = await axios.get(`${BASE_URL}api/v1/functions`);
    return res.data;
  } catch (error) {
    console.error('Error fetching functions:', error);
    throw error;
  }
};