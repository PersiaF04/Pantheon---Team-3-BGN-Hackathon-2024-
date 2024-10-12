import React from 'react';

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

const Widgets = ({ onWidgetClick }) => {
    const widgetData = [
        { title: "Home", content: "Welcome to the Home Page!" },
        { title: "Profile", content: "Here is your Profile!" },
        { title: "Linguistics", content: "Learn about Linguistics!" },
        { title: "FAQs", content: "Frequently Asked Questions." },
        { title: "Help", content: "Need help? Click here!" },
    ];

    return (
        <div className="flex flex-wrap justify-center">
            {widgetData.map((widget, index) => (
                <Widget 
                    key={index} 
                    title={widget.title} 
                    content={widget.content} 
                    onClick={() => onWidgetClick(widget.content)} // Handle click
                />
            ))}
        </div>
    );
};

export default Widgets;
