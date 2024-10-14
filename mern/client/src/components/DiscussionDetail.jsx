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
      setDiscussion(response.data.discussion);
    } catch (error) {
      console.error("Fetch discussion details failed:", error);
    }
  };
  const handleNewComment = (content) => {
    try {
      const url = `${import.meta.env.VITE_BASE_URL}/users/comment`;
      const token = localStorage.getItem("token");
      axios.post(
        url,
        {
          topicId: id || discussion.topic._id,
          content,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      fetchDiscussion();
    } catch (error) {
      console.error("Failed to submit comment:", error);
    }
  };
  useEffect(() => {
    if (id) {
      fetchDiscussion();
    }
  }, [id]);

  // Handle reply submission
  const handleReplySubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    if (reply.trim()) {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_BASE_URL}/discussion/${id}/reply`,
          { text: reply },
        );
        setDiscussion((prevDiscussion) => ({
          ...prevDiscussion,
          comments: [...response.data.comments, response.data.comment], // Add the new comment to the discussion state
        }));
        setReply(""); // Clear the reply input
      } catch (error) {
        console.error("Failed to submit reply:", error);
      }
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
            {discussion.comments.map((comment, index) => (
              <li key={index} className="mb-2">
                {comment.text}
              </li>
            ))}
          </ul>
        ) : (
          <p>No comments yet.</p>
        )}
      </div>

      <form onSubmit={handleReplySubmit} className="mt-4">
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
