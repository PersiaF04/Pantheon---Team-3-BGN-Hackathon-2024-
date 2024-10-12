// Section.js
import React from 'react';
import MiniSection from './MiniSection'; // Import the MiniSection component

const Section = ({ title }) => {
    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            {/* Outer container for the mini sections */}
            <div className="bg-gray-300 p-4 rounded-lg shadow-md"> {/* Change the background to a darker gray */}
                <div className="flex flex-col items-center">
                    <MiniSection 
                        title="History" 
                        content="This section covers the historical background of the topic." 
                    />
                    <MiniSection 
                        title="Linguistic Heritage" 
                        content="Explore the rich linguistic heritage associated with the topic." 
                    />
                    <MiniSection 
                        title="Conversations" 
                        content="Engage in conversations and discussions around this topic." 
                    />
                </div>
            </div>
        </div>
    );
};

export default Section;
