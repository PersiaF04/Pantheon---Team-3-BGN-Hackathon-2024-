import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ArticleDetail = () => {
  const { id } = useParams(); // Get the article ID from the URL
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/articles/${id}`);
        setArticle(response.data);
      } catch (error) {
        console.error("Fetch article details failed:", error);
      }
    };

    fetchArticle();
  }, [id]);

  if (!article) return <div>Loading...</div>;

  return (
    <div>
      <h1>{article.title}</h1>
      <img src={article.thumbnail} alt={article.title} className="w-full h-auto object-cover" />
      <p>{article.content}</p>
    </div>
  );
};

export default ArticleDetail;
