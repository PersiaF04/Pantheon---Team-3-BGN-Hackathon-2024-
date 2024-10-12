import React from 'react';

const Profile = () => {
    return (
        <div className="absolute top-4 left-4 flex items-center">
            {/* Smaller Profile Image */}
            <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-300">
                <img
                    src="https://via.placeholder.com/150"
                    alt="Profile"
                    className="w-full h-full object-cover"
                />
            </div>
            {/* Profile Name next to the Icon */}
            <h2 className="text-sm font-semibold ml-2">John Doe</h2>
        </div>
    );
};

export default Profile;
