import React from 'react';
import { Link } from 'react-router-dom'; 
import Widgets from './Widget';
import Footer from './Footer';
import { useUser } from './UserContext'; // Import useUser hook

const ProfilePage = () => {
    const { user } = useUser(); // Access user info from context

    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 w-11/12 max-w-2xl mb-4 text-center">
                <div className="flex flex-col items-center mb-4">
                    <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-300 mb-4">
                        <img
                            src={user?.picture || "https://via.placeholder.com/150"} // Use user picture or placeholder
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <h1 className="text-3xl font-bold">{user?.name || "John Doe"}</h1>
                    <p className="text-gray-600">Email: {user?.email || "johndoe@example.com"}</p>
                    {/* Location could be added if available in user data */}
                    {/* <p className="text-gray-600">Location: {user?.location || "Not specified"}</p> */}
                </div>
                <p className="mb-4">
                    This is a brief bio about the user. They are passionate about technology and software development.
                </p>
                <Link to="/login">
                    <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded">
                        Log In
                    </button>
                </Link>
            </div>
            <div className="mb-4 w-11/12 max-w-2xl">
                <Widgets />
                <Footer />
            </div>
        </div>
    );
};

export default ProfilePage;
