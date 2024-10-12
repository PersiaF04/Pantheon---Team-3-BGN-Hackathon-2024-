import React from 'react';
import Profile from './Profile';

const Banner = () => {
    return (
        <div className="bg-black h-16 w-full flex items-center justify-between px-4">
            <Profile /> {/* Profile component on the right */}
            <h1 className="text-white text-4xl font-bold flex-grow text-center">Nuar</h1>
        </div>
    );
};

export default Banner;
