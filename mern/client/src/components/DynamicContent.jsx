// DynamicContent.js
import React from 'react';

const DynamicContent = ({ selectedWidget }) => {
    const videos = [
        {
            thumbnail: 'link-to-thumbnail1.jpg',
            title: 'Video Title 1',
            summary: 'This is a summary of Video 1.'
        },
        {
            thumbnail: 'link-to-thumbnail2.jpg',
            title: 'Video Title 2',
            summary: 'This is a summary of Video 2.'
        },
    ];

    const renderContent = () => {
        switch (selectedWidget) {
            case "Videos":
                return (
                    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold mb-2">Videos</h3>
                        <div className="flex flex-col"> {/* Vertical stacking for videos */}
                            {videos.map((video, index) => (
                                <div key={index} className="flex m-2">
                                    {/* Thumbnail box */}
                                    <div className="bg-white rounded shadow-md p-0 w-1/5 h-[150px]"> {/* Set to a YouTube-like size */}
                                        <img 
                                            src={video.thumbnail} 
                                            alt={video.title} 
                                            className="w-full h-full object-cover rounded" // Use object-cover for aspect ratio
                                        />
                                    </div>
                                    {/* Title and summary box */}
                                    <div className="ml-4 bg-white rounded shadow-md p-4 flex-1">
                                        <p className="font-semibold text-lg">{video.title}</p>
                                        <p className="text-gray-700">{video.summary}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );

            case "Articles":
                return (
                    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold mb-2">Articles</h3>
                        <div className="flex flex-wrap">
                            {/* Placeholder for article images */}
                            <div className="m-2">
                                <img src="article-image-placeholder.jpg" alt="Article" className="w-48 h-28 rounded" />
                                <p className="mt-2">Article Title 1</p>
                            </div>
                            <div className="m-2">
                                <img src="article-image-placeholder.jpg" alt="Article" className="w-48 h-28 rounded" />
                                <p className="mt-2">Article Title 2</p>
                            </div>
                        </div>
                    </div>
                );

            case "Gemini":
                return (
                    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold mb-2">Gemini</h3>
                        <p>Content related to Gemini features goes here.</p>
                    </div>
                );

            case "Discussion":
                return (
                    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold mb-2">Discussion</h3>
                        <p>Join discussions related to the topic.</p>
                    </div>
                );

            default:
                return <p>Select a widget to see content.</p>;
        }
    };

    return (
        <div className="mt-4">
            {renderContent()}
        </div>
    );
};

export default DynamicContent;
