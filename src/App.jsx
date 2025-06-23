import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchHeader from './components/SearchHeader';
import JobCard from './components/JobCard';
import { useJobSearch } from './hooks/useJobSearch';
import { jobsData, locations, jobTypes, remoteOptions } from './data/jobs';
import './App.css';

function App() {
  const {
    searchTerm,
    setSearchTerm,
    locationFilter,
    setLocationFilter,
    typeFilter,
    setTypeFilter,
    remoteFilter,
    setRemoteFilter,
    filteredJobs
  } = useJobSearch(jobsData);

  return (
    <div className="app min-h-screen flex flex-col">
      <Navbar />
      
      <SearchHeader
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        locationFilter={locationFilter}
        setLocationFilter={setLocationFilter}
        typeFilter={typeFilter}
        setTypeFilter={setTypeFilter}
        remoteFilter={remoteFilter}
        setRemoteFilter={setRemoteFilter}
        locations={locations}
        jobTypes={jobTypes}
        remoteOptions={remoteOptions}
        resultsCount={filteredJobs.length}
      />
      
      <main className="main-content flex-1">
        <div className="jobs-container">
          {filteredJobs.length > 0 ? (
            <div className="jobs-grid">
              {filteredJobs.map(job => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          ) : (
            <div className="no-results">
              <div className="no-results-icon">🔍</div>
              <h3>No jobs found</h3>
              <p>Try adjusting your search criteria or filters to find more opportunities.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
