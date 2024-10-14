import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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
    <div className="flex flex-col p-4">
      <h1 className="text-2xl font-bold">{discussion.name}</h1>
      <img
        src={discussion.thumbnail}
        alt={discussion.name}
        className="w-full h-auto object-cover mb-4"
      />
      <p className="mb-4">{discussion.description}</p>

      <div>
        <h2 className="text-lg font-semibold">Comments</h2>
        {discussion.comments && discussion.comments.length > 0 ? (
          <ul className="list-disc pl-5">
            {discussion.comments.map((comment) => (
              <li key={comment._id} className="mb-4">
                {/* User information */}
                <div className="flex items-center mb-2">
                  <img
                    src={comment.user?.image || "/default-avatar.png"}
                    alt={`${comment.user?.firstName}'s avatar`}
                    className="w-10 h-10 rounded-full mr-2"
                  />
                  <p>
                    <strong>{comment.user ? `${comment.user.firstName} ${comment.user.lastName}` : "Anonymous"}</strong>
                  </p>
                </div>
                {/* Comment content */}
                <p>{comment.content}</p>
                <span className="text-gray-500 text-sm ml-2">
                  {new Date(comment.createdAt).toLocaleString()}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p>No comments yet.</p>
        )}
      </div>

      <form onSubmit={handleNewComment} className="mt-4">
        <textarea
          value={reply}
          onChange={(e) => setReply(e.target.value)}
          placeholder="Add a reply..."
          className="border border-gray-300 p-2 w-full h-24"
          required
        />
        <button
          type="submit"
          className="mt-2 bg-blue-500 text-white py-2 px-4 rounded"
        >
          Reply
        </button>
      </form>
    </div>
  );
};

export default DiscussionDetail;
