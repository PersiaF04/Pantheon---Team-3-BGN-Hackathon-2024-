// SearchWidgets.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import VideoWidget from './VideoWidget'; // Import VideoWidget

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

const SearchWidgets = ({ selectedWidget, setSelectedWidget }) => {
    const navigate = useNavigate();

    const widgetData = [
        { title: "Videos", content: "Watch related videos!", path: "/videos" },
        { title: "Articles", content: "Read insightful articles!", path: "/articles" },
        { title: "Gemini", content: "Explore Gemini features!", path: "/gemini" },
        { title: "Discussion", content: "Join the discussion forum!", path: "/discussion" },
    ];

    const videoData = [
        { thumbnail: "video_thumbnail_1.jpg", title: "Video Title 1" },
        { thumbnail: "video_thumbnail_2.jpg", title: "Video Title 2" },
    ];

    return (
        <div>
            <div className="flex flex-wrap justify-center mb-4">
                {widgetData.map((widget, index) => (
                    <SearchWidget 
                        key={index} 
                        title={widget.title} 
                        content={widget.content} 
                        onClick={() => setSelectedWidget(widget.title)} 
                    />
                ))}
            </div>

            {/* Adjust this div to remove or modify the background if needed */}
            <div className="p-4 rounded-lg">
                {selectedWidget === "Videos" && (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Videos</h2>
                        {videoData.map((video, index) => (
                            <VideoWidget 
                                key={index} 
                                thumbnail={video.thumbnail} 
                                title={video.title} 
                            />
                        ))}
                    </div>
                )}
                {selectedWidget === "Articles" && <h2 className="text-2xl font-bold mb-4">Articles</h2>}
                {selectedWidget === "Gemini" && <h2 className="text-2xl font-bold mb-4">Gemini</h2>}
                {selectedWidget === "Discussion" && <h2 className="text-2xl font-bold mb-4">Discussion</h2>}
            </div>
        </div>
    );
};

export default SearchWidgets;
