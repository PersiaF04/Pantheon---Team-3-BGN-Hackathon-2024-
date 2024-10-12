import React from 'react';
import { Outlet, useLocation } from 'react-router-dom'; // Import useLocation to get the current path
import SearchBar from './components/searchbar';
import Banner from './components/banner';
import Footer from './components/Footer';
import Widgets from './components/Widget';
import Section from './components/Section';
import Profile from './components/Profile';

const App = () => {
    const location = useLocation(); // Get the current path

    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex justify-center mt-4">
                <Profile />
                <SearchBar />
            </div>
            <div className="mt-4">
                <Banner />
            </div>
            <Section title="Overview" />
            <div className="flex-grow">
                {/* Only show Widgets if not on Profile Page */}
                {location.pathname !== "/profile" && <Widgets />}
                <Outlet /> {/* This will render ProfilePage or other routes */}
            </div>
            <Footer />
        </div>
    );
};

export default App;
