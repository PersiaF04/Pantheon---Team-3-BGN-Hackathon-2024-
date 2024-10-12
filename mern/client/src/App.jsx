import React, { useState } from 'react';
import Banner from './components/banner'; 
import SearchBar from './components/searchbar'; 
import Footer from './components/Footer'; 

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
    console.log("Searching for:", term);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Banner /> {/* Add the Banner at the top */}
      <div className="flex justify-center"> {/* Center the SearchBar below the Banner */}
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="flex-grow text-center mt-4">
        <p>Your search term: {searchTerm}</p>
      </div>
      <Footer /> 
    </div>
  );
};

export default App;
