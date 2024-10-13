import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google'; // Import the provider
import { UserProvider } from './components/UserContext'
import App from "./App"; 
import ProfilePage from './components/ProfilePage';
import Linguistics from './components/LinguisticPage';
import FAQs from './components/FAQsPage';
import Help from './components/HelpPage';
import Login from './components/Login';
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/", 
    element: <App />,
    children: [
      { path: "home"},
      { path: "profile", element: <ProfilePage /> },
      { path: "linguistics", element: <Linguistics /> },
      { path: "faqs", element: <FAQs /> },
      { path: "help", element: <Help /> },
      { path: "login", element: <Login /> }, // Add the login route
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_REACT_APP_GOOGLE_CLIENT_ID}> {/* Provide the client ID */}
      <UserProvider> {/* Wrap with UserProvider */}
        <RouterProvider router={router} />
      </UserProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
