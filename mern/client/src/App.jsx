import React, { useState } from 'react';
import Profile from './components/Profile';
import SearchBar from './components/searchbar';
import Banner from './components/banner';
import Footer from './components/Footer';
import Widgets from './components/Widget';
import Section from './components/Section';

const App = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentContent, setCurrentContent] = useState('');

    const handleSearch = (term) => {
        setSearchTerm(term);
        console.log("Searching for:", term);
    };

    const handleWidgetClick = (content) => {
        setCurrentContent(content);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Profile />
            <div className="flex justify-center mt-4">
                <SearchBar onSearch={handleSearch} />
            </div>
            <div className="mt-4">
                <Banner />
            </div>
            <Section title="Overview" />
            <div className="flex-grow">
                <Widgets onWidgetClick={handleWidgetClick} />
            </div>
            <Footer />
        </div>
    );
};

export default App;
