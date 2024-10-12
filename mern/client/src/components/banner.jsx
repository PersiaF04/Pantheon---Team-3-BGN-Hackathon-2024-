import React from 'react';
import SearchBar from './searchbar'; // Import the SearchBar

const Banner = ({ onSearch }) => {
    return (
        <div className="bg-black text-white h-32 flex flex-col items-center justify-center w-full">
            <h1 className="text-3xl mb-2">BGN Hackathon 2024</h1>
            <SearchBar onSearch={onSearch} /> {/* Include the SearchBar here */}
        </div>
    );
};

export default Banner;
