// Widgets.js
import React from 'react';

const Widget = ({ title, content }) => {
    return (
        <div className="bg-white shadow-md rounded p-4 m-2 w-64">
            <h2 className="font-bold text-lg">{title}</h2>
            <p>{content}</p>
        </div>
    );
};

const Widgets = () => {
    const widgetData = [
        { title: "Home", content: "" },
        { title: "Search", content: "" },
        { title: "Linguistics", content: "" },
        { title: "People", content: "" },
    ];

    return (
        <div className="flex flex-wrap justify-center">
            {widgetData.map((widget, index) => (
                <Widget key={index} title={widget.title} content={widget.content} />
            ))}
        </div>
    );
};

export default Widgets;
