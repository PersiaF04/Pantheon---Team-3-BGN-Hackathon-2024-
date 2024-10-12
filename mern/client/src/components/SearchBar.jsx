import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleChange = (e) => {
        setQuery(e.target.value);
        onSearch(e.target.value);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={handleChange}
                className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
        </div>
    );
};

export default SearchBar;  // Ensure this line is present for default export
