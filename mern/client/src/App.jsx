import React, { useState } from 'react';
import Banner from './components/banner'; // Ensure the path matches your project structure
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
            <Banner onSearch={handleSearch} /> {/* Pass the search handler */}
            <div className="flex-grow text-center mt-4">
                <p>Your search term: {searchTerm}</p>
            </div>
            <Widgets />
            <Footer />
        </div>
    );
};

export default App;
