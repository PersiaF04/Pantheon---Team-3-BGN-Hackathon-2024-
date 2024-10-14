// DynamicContent.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import BeatLoader from "react-spinners/BeatLoader";
import { Link } from "react-router-dom";

const DynamicContent = ({ selectedWidget, keyword }) => {
  const [videos, setVideos] = useState([]);
  const [articles, setArticles] = useState([]);
  const [discussions, setDiscussions] = useState([]);
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState("");
  const [loadingGemini, setLoadingGemini] = useState(false);

  // Fetch videos when the component mounts or when the keyword changes
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/videos/search?keyword=${keyword}`,
        );
        setVideos(response.data.videos || []);
      } catch (error) {
        console.error("Search Videos failed:", error);
      }
    };

    const fetchArticles = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/articles/search?keyword=${keyword}`,
        );
        setArticles(response.data.articles || []);
      } catch (error) {
        console.error("Search Articles failed:", error);
      }
    };

    const fetchDiscussions = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/topics/search?keyword=${keyword}`,
        );
        console.log(response.data);
        setDiscussions(response.data.topics || []);
      } catch (error) {
        console.error("Search Discussions failed:", error);
      }
    };

    const fetchGemini = async () => {
      setLoadingGemini(true);
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/gemini/search?keyword=${keyword}`,
        );
        console.log(response.data);
        setHistory([
          {
            role: "model",
            parts: [{ text: response.data.reply }],
          },
        ]);
        setLoadingGemini(false);
      } catch (error) {
        console.error("Search Gemini failed:", error);
      }
    };

    if (keyword) {
      fetchVideos();
      fetchArticles();
      fetchDiscussions();
      fetchGemini();
      console.log(videos._id);
    }
  }, [keyword]);

  // State for chat

  const fetchGeminiResponse = async ({ history, message }) => {
    try {
      setLoadingGemini(true);
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/gemini/chat`,
        {
          history: history[history.length - 1],
          message,
        },
      );
      console.log(response.data);
      setHistory([
        ...history,
        { role: "user", parts: [{ text: message }] },
        { role: "model", parts: [{ text: response.data.reply }] },
      ]);
      setLoadingGemini(false);
    } catch (error) {
      console.error("Failed to send message to Gemini:", error);
    }
  };
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    setHistory([...history, { role: "user", parts: [{ text: input }] }]);
    fetchGeminiResponse({ history, message: input });
    setInput("");
  };

  const renderContent = () => {
    switch (selectedWidget) {
      case "Videos":
        return (
          <div className="bg-gray-200 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Videos</h3>
            <div className="flex flex-col">
              {videos.map((video, index) => (
                <Link key={index} to={`/videos/${video._id}`}>
                  <div className="flex m-2 bg-white rounded shadow-md p-4">
                    <div className="bg-gray-300 rounded p-0 w-1/5 h-[150px]">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                    <div className="ml-4 flex-1">
                      <p className="font-semibold text-lg">{video.title}</p>
                      <p className="text-gray-700">{video.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        );

      case "Articles":
        return (
          <div className="bg-gray-200 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Articles</h3>
            <div className="flex flex-col">
              {articles.map((article, index) => (
                <Link key={index} to={`/articles/${article._id}`}>
                  <div className="flex m-2 bg-white rounded shadow-md p-4">
                    <div className="bg-gray-300 rounded p-0 w-1/5 h-[150px]">
                      <img
                        src={article.thumbnail}
                        alt={article.title}
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                    <div className="ml-4 flex-1">
                      <p className="font-semibold text-lg">{article.title}</p>
                      <p className="text-gray-700">{article.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        );

      case "Gemini":
        return (
          <div className="bg-gray-200 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Chat with Gemini</h3>
            <div className="h-[300px] overflow-y-auto p-2 border border-gray-300 rounded mb-4">
              {history.map((message, index) => (
                <div
                  key={index}
                  className={
                    message.role === "user" ? "text-right" : "text-left"
                  }
                >
                  <p
                    className={`inline-block p-2 m-1 rounded ${message.role === "user" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
                  >
                    <ReactMarkdown>{message.parts[0].text}</ReactMarkdown>
                  </p>
                </div>
              ))}
              {loadingGemini && <BeatLoader color="#000" />}
            </div>
            <form onSubmit={handleSendMessage} className="flex">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 p-2 border border-gray-300 rounded"
                placeholder="Type your message..."
              />
              <button
                type="submit"
                className="ml-2 bg-blue-500 text-white p-2 rounded"
              >
                Send
              </button>
            </form>
          </div>
        );

      case "Discussion":
        return (
          <div className="bg-gray-200 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Discussion Topics</h3>
            <div className="flex flex-col">
              {discussions.map((discussion, index) => (
                <Link key={index} to={`/discussion/${discussion._id}`}>
                  <div className="flex m-2 bg-white rounded shadow-md p-4">
                    <div className="bg-gray-300 rounded p-0 w-1/5 h-[150px]">
                      <img
                        src={discussion.thumbnail}
                        alt={discussion.name}
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                    <div className="ml-4 flex-1">
                      <p className="font-semibold text-lg">{discussion.name}</p>
                      <p className="text-gray-700">{discussion.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        );

      default:
        return <p>Select a widget to see content.</p>;
    }
  };

  return <div className="mt-4">{renderContent()}</div>;
};

export default DynamicContent;
