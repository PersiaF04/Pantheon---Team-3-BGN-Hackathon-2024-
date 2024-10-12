import React from 'react';
import Widgets from './Widget';

const Help = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-2xl font-bold">Help Page</h1>
            {/* Add more profile content here */}
            <Widgets />
        </div>
    );
};

export default Help;
