import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "./Footer";
import Banner from "./banner";
import Widgets from "./Widget";

const DiscussionDetail = () => {
  const { id } = useParams(); // Get the discussion ID from the URL
  const [discussion, setDiscussion] = useState(null);
  const [reply, setReply] = useState(""); // State for the reply input

  const fetchDiscussion = async () => {
    try {
      const url = `${import.meta.env.VITE_BASE_URL}/topics/${id}`;
      console.log("Fetching URL:", url); // Log the URL
      const response = await axios.get(url);
      console.log("Discussion response:", response.data); // Log the response data
      if (response.data && response.data.topic) {
        setDiscussion({
          ...response.data.topic,
          comments: response.data.comments || [], // Ensure comments are initialized
        });
      } else {
        console.error("Invalid response structure:", response.data);
      }
    } catch (error) {
      console.error("Fetch discussion details failed:", error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchDiscussion();
    } else {
      console.error("No discussion ID found.");
    }
  }, [id]);

  const handleNewComment = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    try {
      const url = `${import.meta.env.VITE_BASE_URL}/users/comment`;
      const token = localStorage.getItem("token");
      const response = await axios.post(
        url,
        {
          topicId: id || discussion._id, // Corrected to access the discussion ID directly
          content: reply, // Use the reply state
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Update the comments state to include the new comment
      if (response.data && response.data.comment) {
        setDiscussion((prevDiscussion) => ({
          ...prevDiscussion,
          comments: [...prevDiscussion.comments, response.data.comment], // Append new comment
        }));
        setReply(""); // Clear the reply input
      }
    } catch (error) {
      console.error("Failed to submit comment:", error);
    }
  };

  if (!discussion) return <div>Loading...</div>;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Banner at the top */}
      <Banner />

      <div className="flex-grow p-4">
        <h1 className="text-2xl font-bold mb-4">{discussion.name}</h1>
        <img
          src={discussion.thumbnail}
          alt={discussion.name}
          className="w-full h-auto object-cover mb-4 rounded-lg"
        />
        <p className="mb-6 text-gray-700">{discussion.description}</p>

        <div>
          <h2 className="text-lg font-semibold mb-4">Comments</h2>
          <form onSubmit={handleNewComment} className="mt-6">
          <textarea
            value={reply}
            onChange={(e) => setReply(e.target.value)}
            placeholder="Add a reply..."
            className="border border-gray-300 p-3 rounded-lg w-full h-24 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <button
            type="submit"
            className="mt-3 bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition"
          >
            Reply
          </button>
        </form>
          {discussion.comments && discussion.comments.length > 0 ? (
            <div className="space-y-6">
              {discussion.comments.map((comment) => (
                <div
                  key={comment._id}
                  className="flex items-start space-x-4 p-4 border-b border-gray-200"
                >
                  {/* User Avatar */}
                  <img
                    src={comment.user?.image || "/default-avatar.png"}
                    alt={`${comment.user?.firstName}'s avatar`}
                    className="w-12 h-12 rounded-full object-cover"
                  />

                  {/* Comment Content */}
                  <div className="flex flex-col">
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold">
                        {comment.user
                          ? `${comment.user.firstName} ${comment.user.lastName}`
                          : "Anonymous"}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {new Date(comment.createdAt).toLocaleString()}
                      </span>
                    </div>
                    <p className="text-gray-700 mt-1">{comment.content}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No comments yet.</p>
          )}
        </div>
      </div>
        <Widgets/>
      <Footer />
    </div>
  );
};

export default DiscussionDetail;
