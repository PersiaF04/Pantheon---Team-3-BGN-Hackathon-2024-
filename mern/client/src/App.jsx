import React, { useState } from 'react';
import Banner from './components/banner';
import SearchBar from './components/searchbar';
import Footer from './components/Footer';
import Widgets from './components/Widget'; // Import the Widgets component

const App = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (term) => {
        setSearchTerm(term);
        console.log("Searching for:", term);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Banner />
            <div className="flex justify-center">
                <SearchBar onSearch={handleSearch} />
            </div>
            <div className="flex-grow text-center mt-4">
                <p>Your search term: {searchTerm}</p>
            </div>
            <Widgets /> {/* Add the Widgets component here */}
            <Footer />
        </div>
    );
};

export default App;
