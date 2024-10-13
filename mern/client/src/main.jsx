import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google'; // Import the provider
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
      { path: "/", element: <App /> }, // You might want to add the default element here
      { path: "home", element: <App /> },
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
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
