import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Widgets from './Widget';
import Footer from './Footer';

const ProfilePage = () => {
    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 w-11/12 max-w-2xl mb-4 text-center">
                <div className="flex flex-col items-center mb-4">
                    {/* Profile Image */}
                    <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-300 mb-4">
                        <img
                            src="https://via.placeholder.com/150" // Placeholder image
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* User Info */}
                    <h1 className="text-3xl font-bold">John Doe</h1>
                    <p className="text-gray-600">Email: johndoe@example.com</p>
                    <p className="text-gray-600">Location: New York, USA</p>
                </div>
                <p className="mb-4">
                    This is a brief bio about the user. They are passionate about technology and software development.
                </p>
                {/* Login Button with Link */}
                <Link to="/login">
                    <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded">
                        Log In
                    </button>
                </Link>
            </div>
            {/* Place Widgets here directly above the footer */}
            <div className="mb-4 w-11/12 max-w-2xl">
                <Widgets />
            </div>
            <Footer />
        </div>
    );
};

export default ProfilePage;
