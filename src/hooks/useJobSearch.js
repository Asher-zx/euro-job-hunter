import { useState, useMemo } from 'react';

export const useJobSearch = (jobs) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('All Locations');
  const [typeFilter, setTypeFilter] = useState('All Types');
  const [remoteFilter, setRemoteFilter] = useState('All Remote Options');

  const filteredJobs = useMemo(() => {
    return jobs.filter(job => {
      const matchesSearch = 
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesLocation = locationFilter === 'All Locations' || job.location === locationFilter;
      const matchesType = typeFilter === 'All Types' || job.type === typeFilter;
      const matchesRemote = remoteFilter === 'All Remote Options' || job.remote === remoteFilter;

      return matchesSearch && matchesLocation && matchesType && matchesRemote;
    });
  }, [jobs, searchTerm, locationFilter, typeFilter, remoteFilter]);

  return {
    searchTerm,
    setSearchTerm,
    locationFilter,
    setLocationFilter,
    typeFilter,
    setTypeFilter,
    remoteFilter,
    setRemoteFilter,
    filteredJobs
  };
};