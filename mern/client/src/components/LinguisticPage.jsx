// Home.js
import React from 'react';
import Widgets from './Widget';
const LinguisticPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-2xl font-bold">Linguistics Page</h1>
            {/* Add more profile content here */}
            <Widgets />
        </div>
    );
};

export default LinguisticPage;
