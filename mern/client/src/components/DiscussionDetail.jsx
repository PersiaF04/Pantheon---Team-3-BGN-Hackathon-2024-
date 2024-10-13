import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DiscussionDetail = () => {
  const { id } = useParams(); // Get the discussion ID from the URL
  const [discussion, setDiscussion] = useState(null);

  useEffect(() => {
    const fetchDiscussion = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/discussion/${id}`);
        setDiscussion(response.data);
      } catch (error) {
        console.error("Fetch discussion details failed:", error);
      }
    };

    fetchDiscussion();
  }, [id]);

  if (!discussion) return <div>Loading...</div>;

  return (
    <div>
      <h1>{discussion.name}</h1>
      <img src={discussion.thumbnail} alt={discussion.name} className="w-full h-auto object-cover" />
      <p>{discussion.description}</p>
      <div>
        <h2>Comments</h2>
        {discussion.comments && discussion.comments.length > 0 ? (
          <ul>
            {discussion.comments.map((comment, index) => (
              <li key={index}>{comment.text}</li>
            ))}
          </ul>
        ) : (
          <p>No comments yet.</p>
        )}
      </div>
    </div>
  );
};

export default DiscussionDetail;
