import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({ initialQuery = '' }) => {
    const [query, setQuery] = useState(initialQuery);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && query) {
            navigate(`/search?q=${encodeURIComponent(query)}`);
        }
    };

    useEffect(() => {
        setQuery(initialQuery); // Set query when the initialQuery changes
    }, [initialQuery]);

    return (
        <div className="flex justify-center mb-4 w-full">
            <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                className="w-full max-w-4xl p-2 border border-gray-300 rounded bg-white text-black"
            />
        </div>
    );
};

export default SearchBar;
