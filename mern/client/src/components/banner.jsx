import React from 'react';
import Profile from './Profile';
import NuarLogo from '/NuarLogo.jpg'; // Adjust the path based on your project structure

const Banner = () => {
    return (
        <div className="bg-black h-16 w-full flex items-center justify-between px-4">
            <Profile /> {/* Profile component on the right */}
            <img src={NuarLogo} alt="Nuar Logo" className="h-12 mx-auto" /> 
        </div>
    );
};

export default Banner;
