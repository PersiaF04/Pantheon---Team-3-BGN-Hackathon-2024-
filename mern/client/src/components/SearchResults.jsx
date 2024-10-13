// SearchResults.jsx
import React, { useState } from "react"; // Import useState
import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import Banner from "./banner";
import Widgets from "./Widget";
import SearchBar from "./searchbar";
import SearchWidgets from "./SearchWidgets";
import DynamicContent from "./DynamicContent"; // Import the DynamicContent component

const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q"); // Get the search query
  const [selectedWidget, setSelectedWidget] = useState("Videos"); // Default widget

  return (
    <div className="flex flex-col min-h-screen">
      <Banner />
      <div className="flex-grow p-4">
        <SearchBar initialQuery={query} /> {/* Pass the query as a prop */}
        <SearchWidgets setSelectedWidget={setSelectedWidget} />{" "}
        {/* Pass down state setter */}
        <h1 className="text-2xl font-bold">Search Results for: {query}</h1>
        {/* Render dynamic content based on the selected widget */}
        {/* Placeholder for search results */}
        <div className="mt-4">
          <DynamicContent selectedWidget={selectedWidget} keyword={query} />
        </div>
      </div>

      <Widgets />
      <Footer />
    </div>
  );
};

export default SearchResults;
