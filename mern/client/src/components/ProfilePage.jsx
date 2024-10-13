import React, { useState } from 'react'; // Import useState
import { Link } from 'react-router-dom'; 
import Widgets from './Widget';
import Footer from './Footer';
import { useUser } from './UserContext'; // Import useUser hook

const ProfilePage = () => {
    const { user, setUser } = useUser(); // Access user info and setUser function from context
    const [bio, setBio] = useState("This is a brief bio about the user."); // Initialize bio state

    const handleBioChange = (event) => {
        setBio(event.target.value); // Update bio state as user types
    };

    const handleBioSubmit = () => {
        setUser((prevUser) => ({ ...prevUser, bio })); // Update user bio in context
        alert('Bio updated!'); // Optional: Alert the user
    };

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
                </div>
                {/* Editable Bio Section */}
                <textarea
                    className="border rounded p-2 w-full mb-4"
                    value={bio}
                    onChange={handleBioChange}
                    rows="3"
                />
                <button
                    className="bg-blue-500 text-white font-semibold py-2 px-4 rounded mb-4"
                    onClick={handleBioSubmit}
                >
                    Update Bio
                </button>
                <p className="mb-4">{bio}</p> {/* Display the bio */}
                <Link to="/login">
                    <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded">
                        Sign in with Google
                    </button>
                </Link>
            </div>
            <div className="mb-4 w-11/12 max-w-2xl">
                <Widgets />
                
            </div>
            <Footer />
        </div>
    );
};

export default ProfilePage;
