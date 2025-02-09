import React from "react";
import { Outlet, useLocation, useMatch } from "react-router-dom"; // Import useMatch
import SearchBar from "./components/SearchBar";
import Banner from "./components/banner";
import Footer from "./components/Footer";
import Widgets from "./components/Widget";
import Section from "./components/Section";
import Carousel from "./components/Carousel";

const App = () => {
  const location = useLocation(); // Get the current path

  // Determine if we are on specific static pages
  const isProfilePage = location.pathname === "/profile";
  const isLinguisticsPage = location.pathname === "/linguistics";
  const isFAQPage = location.pathname === "/faqs";
  const isHelpPage = location.pathname === "/help";
  const loginPage = location.pathname === "/login";
  const searchResult = location.pathname === "/search";

  // Use useMatch to match dynamic routes for detail pages
  const isVideoDetailPage = useMatch("/videos/:id");
  const isArticleDetailPage = useMatch("/articles/:id");
  const isDiscussionDetailPage = useMatch("/discussion/:id");

  // Determine if we are on any of these special pages
  const isSpecialPage =
    isProfilePage ||
    isLinguisticsPage ||
    isFAQPage ||
    isHelpPage ||
    loginPage ||
    searchResult ||
    isVideoDetailPage ||
    isArticleDetailPage ||
    isDiscussionDetailPage;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Show Banner and SearchBar only if we are NOT on special pages */}
      {!isSpecialPage && <Banner />}
      {!isSpecialPage && (
        <div className="flex justify-center mt-4">
          <SearchBar />
        </div>
      )}

      {/* Render Carousel only on the home page */}
      {!isSpecialPage &&
        (location.pathname === "/" || location.pathname === "/home") && (
          <Carousel />
        )}

      {/* Render Section only when not on special pages */}
      {!isSpecialPage && (
        <Section title="Celebrating the richness of black culture" />
      )}

      {/* Main content section */}
      <div className="flex-grow">
        {!isSpecialPage && <Widgets />}
        {/* This will render the component for the current route (Outlet) */}
        <Outlet />
      </div>

      {/* Render Footer only when not on special pages */}
      {!isSpecialPage && <Footer />}
    </div>
  );
};

export default App;
