import React from 'react';
import { useNavigate } from 'react-router-dom'; // Change this line

const Widget = ({ title, content, onClick }) => {
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

const Widgets = () => {
    const navigate = useNavigate(); // Update this line

    const widgetData = [
        { title: "Home", content: "Welcome to the Home Page!", path: "/home" },
        { title: "Profile", content: "Here is your Profile!", path: "/profile" },
        { title: "Linguistics", content: "Learn about Linguistics!", path: "/linguistics" },
        { title: "FAQs", content: "Frequently Asked Questions.", path: "/faqs" },
        { title: "Help", content: "Need help? Click here!", path: "/help" },
    ];

    return (
        <div className="flex flex-wrap justify-center">
            {widgetData.map((widget, index) => (
                <Widget 
                    key={index} 
                    title={widget.title} 
                    content={widget.content} 
                    onClick={() => navigate(widget.path)} // Change this line
                />
            ))}
        </div>
    );
};

export default Widgets;
