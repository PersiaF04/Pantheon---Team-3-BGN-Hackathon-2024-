import React from 'react';
import { useLocation } from 'react-router-dom';
import Footer from './Footer';
import Banner from './banner';
import Widgets from './Widget';
import SearchBar from './searchbar'; // Import SearchBar to use in the results page
import SearchWidgets from './SearchWidgets';
const SearchResults = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('q'); // Get the search query

    return (
        <div className="flex flex-col min-h-screen">
            <Banner />
            <div className="flex-grow p-4">
            <SearchBar initialQuery={query} /> {/* Pass the query as a prop */}
            <SearchWidgets /> 
                <h1 className="text-2xl font-bold">Search Results for: {query}</h1>

                {/* Render the SearchBar with the current query */}

                {/* Placeholder for search results */}
                <div className="mt-4">
                    <p>No results found. (This is a placeholder; replace with actual results.)</p>
                </div>
            </div>
            
            <Widgets />
            <Footer />
        </div>
    );
};

export default SearchResults;
