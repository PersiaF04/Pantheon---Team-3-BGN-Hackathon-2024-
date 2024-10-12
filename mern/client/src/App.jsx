import React, { useState } from 'react';
import SearchBar from './components/searchbar'; // Ensure this matches the filename

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
    console.log("Searching for:", term);
  };

  return (
    <div className="w-full p-6">
      <h1 className="text-center">BGN Hackathon 2024</h1>
      <SearchBar onSearch={handleSearch} />
      <div>
        <p>Your search term: {searchTerm}</p>
      </div>
    </div>
  );
};

export default App;
