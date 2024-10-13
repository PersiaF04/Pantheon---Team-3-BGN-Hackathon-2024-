import React from "react";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="flex items-center">
      {/* Smaller Profile Image */}
      <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-300">
        <img
          src={user?.image} // Use user picture or placeholder
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Profile Name next to the Icon */}
      <h2 className="text-sm font-semibold ml-2 text-white">
        {user?.firstName}
      </h2>
    </div>
  );
};

export default Profile;
