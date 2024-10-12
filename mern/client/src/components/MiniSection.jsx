// MiniSection.js
import React from 'react';

const MiniSection = ({ title, content }) => {
    return (
        <div className="bg-gray-200 rounded p-4 m-2 w-full">
            <h3 className="font-bold text-xl">{title}</h3>
            <p>{content}</p>
        </div>
    );
};

export default MiniSection;
