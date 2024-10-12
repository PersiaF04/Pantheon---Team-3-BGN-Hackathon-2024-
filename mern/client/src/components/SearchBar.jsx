import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleChange = (e) => {
        setQuery(e.target.value);
        onSearch(e.target.value);
    };

    return (
        <div className="flex justify-center mb-4">
            <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={handleChange}
                className="w-full max-w-3xl p-2 border border-gray-300 rounded" // Adjust max-w class as needed
            />
        </div>
    );
};

export default SearchBar;
