import './SearchHeader.css';
import bgVideo from '../assets/video/205691-927672681_small.mp4';

const SearchHeader = ({ 
  searchTerm, 
  setSearchTerm, 
  locationFilter, 
  setLocationFilter,
  typeFilter,
  setTypeFilter,
  remoteFilter,
  setRemoteFilter,
  locations,
  jobTypes,
  remoteOptions,
  resultsCount
}) => {
  return (
    <header className="search-header">
            <video
        className="search-header-bg-video"
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
          opacity: 0.25
        }}
      >
        <source src={bgVideo} type="video/mp4" />
        {/* 你可以替换为自己的视频链接 */}
      </video>

      <div className="search-container">
        <h1 className="search-title">European IT Jobs</h1>
        <p className="search-subtitle">Find your next opportunity in Europe's tech hubs</p>
        
        <div className="search-bar">
          <div className="search-input-wrapper">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search by job title, company, or skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
        </div>

        <div className="filters">
          <select 
            value={locationFilter} 
            onChange={(e) => setLocationFilter(e.target.value)}
            className="filter-select"
          >
            {locations.map(location => (
              <option key={location} value={location}>{location}</option>
            ))}
          </select>

          <select 
            value={typeFilter} 
            onChange={(e) => setTypeFilter(e.target.value)}
            className="filter-select"
          >
            {jobTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>

          <select 
            value={remoteFilter} 
            onChange={(e) => setRemoteFilter(e.target.value)}
            className="filter-select"
          >
            {remoteOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>

        <div className="results-count">
          {resultsCount} {resultsCount === 1 ? 'job' : 'jobs'} found
        </div>
      </div>
    </header>
  );
};

export default SearchHeader;