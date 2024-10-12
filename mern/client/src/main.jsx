import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App"; // This is your main layout component
import ProfilePage from './components/ProfilePage';
import Linguistics from './components/LinguisticPage';
import FAQs from './components/FAQsPage';
import Help from './components/HelpPage';
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/", // Root path renders App
    element: <App />,
    children: [
      {
        path: "/", // Default route
      },
      {
        path: "home", 
      },
      {
        path: "profile", // Profile route
        element: <ProfilePage />,
      },
      {
        path: "linguistics", // Linguistics route
        element: <Linguistics />,
      },
      {
        path: "faqs", // FAQs route
        element: <FAQs />,
      },
      {
        path: "help", // Help route
        element: <Help />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
