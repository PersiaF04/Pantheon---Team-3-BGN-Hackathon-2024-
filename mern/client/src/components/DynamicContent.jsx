// DynamicContent.js
import React, { useState } from 'react';

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

    const articles = [
        {
            thumbnail: 'article-thumbnail1.jpg',
            title: 'Article Title 1',
            summary: 'This is a summary of Article 1.'
        },
        {
            thumbnail: 'article-thumbnail2.jpg',
            title: 'Article Title 2',
            summary: 'This is a summary of Article 2.'
        },
    ];

    const discussions = [
        {
            thumbnail: 'discussion-thumbnail1.jpg',
            title: 'Discussion Topic 1',
            summary: 'This is a summary of Discussion Topic 1.'
        },
        {
            thumbnail: 'discussion-thumbnail2.jpg',
            title: 'Discussion Topic 2',
            summary: 'This is a summary of Discussion Topic 2.'
        },
    ];

    // State for chat
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (input.trim() === '') return;

        // Append the user's message
        setMessages([...messages, { text: input, sender: 'user' }]);
        setInput('');

        // Simulate a response from Gemini
        setTimeout(() => {
            setMessages(prevMessages => [
                ...prevMessages,
                { text: `You said: ${input}`, sender: 'gemini' } // Placeholder response
            ]);
        }, 1000);
    };

    const renderContent = () => {
        switch (selectedWidget) {
            case "Videos":
                return (
                    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold mb-2">Videos</h3>
                        <div className="flex flex-col"> {/* Vertical stacking for videos */}
                            {videos.map((video, index) => (
                                <div key={index} className="flex m-2 bg-white rounded shadow-md p-4">
                                    {/* Thumbnail box */}
                                    <div className="bg-gray-300 rounded p-0 w-1/5 h-[150px]">
                                        <img 
                                            src={video.thumbnail} 
                                            alt={video.title} 
                                            className="w-full h-full object-cover rounded" 
                                        />
                                    </div>
                                    {/* Title and summary box */}
                                    <div className="ml-4 flex-1">
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
                        <div className="flex flex-col"> {/* Vertical stacking for articles */}
                            {articles.map((article, index) => (
                                <div key={index} className="flex m-2 bg-white rounded shadow-md p-4">
                                    {/* Thumbnail box */}
                                    <div className="bg-gray-300 rounded p-0 w-1/5 h-[150px]">
                                        <img 
                                            src={article.thumbnail} 
                                            alt={article.title} 
                                            className="w-full h-full object-cover rounded" 
                                        />
                                    </div>
                                    {/* Title and summary box */}
                                    <div className="ml-4 flex-1">
                                        <p className="font-semibold text-lg">{article.title}</p>
                                        <p className="text-gray-700">{article.summary}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );

            case "Gemini":
                return (
                    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold mb-2">Chat with Gemini</h3>
                        <div className="h-[300px] overflow-y-auto p-2 border border-gray-300 rounded mb-4">
                            {messages.map((message, index) => (
                                <div key={index} className={message.sender === 'user' ? "text-right" : "text-left"}>
                                    <p className={`inline-block p-2 m-1 rounded ${message.sender === 'user' ? "bg-blue-500 text-white" : "bg-gray-300"}`}>
                                        {message.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <form onSubmit={handleSendMessage} className="flex">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                className="flex-1 p-2 border border-gray-300 rounded"
                                placeholder="Type your message..."
                            />
                            <button type="submit" className="ml-2 bg-blue-500 text-white p-2 rounded">Send</button>
                        </form>
                    </div>
                );

            case "Discussion":
                return (
                    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold mb-2">Discussion Topics</h3>
                        <div className="flex flex-col"> {/* Vertical stacking for discussions */}
                            {discussions.map((discussion, index) => (
                                <div key={index} className="flex m-2 bg-white rounded shadow-md p-4">
                                    {/* Thumbnail box for discussion */}
                                    <div className="bg-gray-300 rounded p-0 w-1/5 h-[150px]">
                                        <img 
                                            src={discussion.thumbnail} 
                                            alt={discussion.title} 
                                            className="w-full h-full object-cover rounded" 
                                        />
                                    </div>
                                    {/* Title and summary box */}
                                    <div className="ml-4 flex-1">
                                        <p className="font-semibold text-lg">{discussion.title}</p>
                                        <p className="text-gray-700">{discussion.summary}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
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
