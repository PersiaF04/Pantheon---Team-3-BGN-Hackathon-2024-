// VideoWidget.jsx
import React from 'react';
import VideoItem from './VideoItem';

const VideoWidget = ({ videos }) => {
    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Videos</h2>
            {videos.map((video, index) => (
                <VideoItem 
                    key={index} 
                    thumbnail={video.thumbnail} 
                    title={video.title} 
                    summary={video.summary} 
                />
            ))}
        </div>
    );
};

export default VideoWidget;
