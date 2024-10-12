import React from 'react';
import { Outlet, useLocation } from 'react-router-dom'; // Import useLocation to get the current path
import SearchBar from './components/searchbar';
import Banner from './components/banner';
import Footer from './components/Footer';
import Widgets from './components/Widget';
import Section from './components/Section';
import Profile from './components/Profile';
import Carousel from './components/Carousel';
const App = () => {
    const location = useLocation(); // Get the current path

    // Determine if we are on specific pages
    const isProfilePage = location.pathname === "/profile";
    const isLinguisticsPage = location.pathname === "/linguistics";
    const isFAQPage = location.pathname === "/faqs"; // Make sure FAQ path is correct
    const isHelpPage = location.pathname === "/help";

    // Determine if we are on any of these special pages
    const isSpecialPage = isProfilePage || isLinguisticsPage || isFAQPage || isHelpPage;

    return (
        <div className="flex flex-col min-h-screen">
            {!isSpecialPage && (
                    <Banner />
            )}

            {!isSpecialPage && (
                <div className="flex justify-center mt-4">
                 <SearchBar />
                </div>
            )}
            {/* Render Banner only when not on special pages */}
            
            {!isSpecialPage && location.pathname === "/" || location.pathname === "/home" && <Carousel />}
            {/* Render Section only when not on special pages */}
            {!isSpecialPage && <Section title="Celebrating the richness of black culture" />}
            <div className="flex-grow">
                {/* Render Widgets only when not on special pages */}
                {!isSpecialPage && <Widgets />}
                {/* This will render ProfilePage, LinguisticsPage, FAQPage, or HelpPage based on the route */}
                <Outlet /> 
            </div>
            {/* Render Footer only when not on special pages */}
            {!isSpecialPage && <Footer />}
        </div>
    );
};

export default App;
