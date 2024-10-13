// DynamicContent.js
import React from 'react';

const DynamicContent = ({ selectedWidget }) => {
    const renderContent = () => {
        switch (selectedWidget) {
            case "Videos":
                return (
                    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold mb-2">Videos</h3>
                        <div className="flex flex-wrap">
                            {/* Placeholder for video thumbnails */}
                            <div className="m-2">
                                <img src="video-thumbnail-placeholder.jpg" alt="Video Thumbnail" className="w-48 h-28 rounded" />
                                <p className="mt-2">Video Title 1</p>
                            </div>
                            <div className="m-2">
                                <img src="video-thumbnail-placeholder.jpg" alt="Video Thumbnail" className="w-48 h-28 rounded" />
                                <p className="mt-2">Video Title 2</p>
                            </div>
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
