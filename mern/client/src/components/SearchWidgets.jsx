// SearchWidgets.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SearchWidget = ({ title, content, onClick }) => {
    return (
        <div 
            className="bg-white shadow-md rounded p-4 m-2 w-64 cursor-pointer hover:bg-gray-100" 
            onClick={onClick}
        >
            <h2 className="font-bold text-lg">{title}</h2>
            <p>{content}</p>
        </div>
    );
};

const SearchWidgets = () => {
    const navigate = useNavigate();

    const widgetData = [
        { title: "Videos", content: "Watch related videos!", path: "/videos" },
        { title: "Articles", content: "Read insightful articles!", path: "/articles" },
        { title: "Gemini", content: "Explore Gemini features!", path: "/gemini" },
        { title: "Discussion", content: "Join the discussion forum!", path: "/discussion" },
    ];

    return (
        <div className="flex flex-wrap justify-center mb-4">
            {widgetData.map((widget, index) => (
                <SearchWidget 
                    key={index} 
                    title={widget.title} 
                    content={widget.content} 
                    onClick={() => navigate(widget.path)} 
                />
            ))}
        </div>
    );
};

export default SearchWidgets;
