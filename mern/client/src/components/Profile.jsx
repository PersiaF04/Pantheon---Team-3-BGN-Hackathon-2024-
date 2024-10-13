import React from 'react';
import { useUser } from './UserContext'; // Import the useUser hook

const Profile = () => {
    const { user } = useUser(); // Access user info from context

    return (
        <div className="flex items-center">
            {/* Smaller Profile Image */}
            <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-300">
                <img
                    src={user?.picture || "https://via.placeholder.com/150"} // Use user picture or placeholder
                    alt="Profile"
                    className="w-full h-full object-cover"
                />
            </div>
            {/* Profile Name next to the Icon */}
            <h2 className="text-sm font-semibold ml-2 text-white">{user?.name || "John Doe"}</h2>
        </div>
    );
};

export default Profile;
