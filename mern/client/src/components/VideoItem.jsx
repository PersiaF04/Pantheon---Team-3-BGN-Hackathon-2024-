// VideoItem.jsx
import React from 'react';

const VideoItem = ({ thumbnail, title, summary }) => {
    return (
        <div className="flex items-start bg-white shadow-md rounded p-4 m-2">
            <img src={thumbnail} alt="Video Thumbnail" className="w-32 h-20 rounded mr-4" />
            <div className="flex flex-col">
                <h3 className="font-bold text-lg">{title}</h3>
                <p className="text-gray-600">{summary}</p>
            </div>
        </div>
    );
};

export default VideoItem;
