import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleChange = (e) => {
        setQuery(e.target.value);
        onSearch(e.target.value);
    };

    return (
        <div className="flex justify-center mb-4 w-full">
            <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={handleChange}
                className="w-full max-w-4xl p-2 border border-gray-300 rounded bg-white text-black" // Added background and text color
            />
        </div>
    );
};

export default SearchBar;
