import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { UserProvider } from './components/UserContext';
import App from "./App"; 
import ProfilePage from './components/ProfilePage';
import Linguistics from './components/LinguisticPage';
import FAQs from './components/FAQsPage';
import Help from './components/HelpPage';
import Login from './components/Login';
import SearchResults from './components/SearchResults'; // Import the SearchResults component
import "./index.css";
import VideoDetail from './components/VideoDetail'; // Import the VideoDetail component
import ArticleDetail from './components/ArticleDetail'; // Import ArticleDetail
import DiscussionDetail from './components/DiscussionDetail'; // Import DiscussionDetail

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "home" },
      { path: "profile", element: <ProfilePage /> },
      { path: "linguistics", element: <Linguistics /> },
      { path: "faqs", element: <FAQs /> },
      { path: "help", element: <Help /> },
      { path: "login", element: <Login /> },
      { path: "search", element: <SearchResults /> },
      { path: "videos/:id", element: <VideoDetail /> }, // Add dynamic video route
      { path: "articles/:id", element: <ArticleDetail /> }, // Add dynamic article route
      { path: "discussion/:id", element: <DiscussionDetail /> }, // Add dynamic discussion route
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_REACT_APP_GOOGLE_CLIENT_ID}>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
