import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Banner from './banner';
import Footer from './Footer';
import Widgets from './Widget';

const ArticleDetail = () => {
  const { id } = useParams(); // Get the article ID from the URL
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/articles/${id}`);
        console.log("Article response:", response.data); // Log the response data
        setArticle(response.data.article); // Set the article state
      } catch (error) {
        console.error("Fetch article details failed:", error);
        setError("Failed to fetch article details.");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchArticle();
    }
  }, [id]);

  // Add a log statement for article state to check its value
  useEffect(() => {
    console.log("Current article state:", article);
  }, [article]);

  if (loading || !article) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="flex flex-col min-h-screen">
      <Banner />
      <div className="flex-grow p-4">
        <h1 className="text-2xl font-bold mb-4 text-center">{article.title}</h1>
        <img src={article.thumbnail} alt={article.title} className="w-full h-auto object-cover mb-4" />
        <p className="text-gray-700 mt-4">{article.description}</p> {/* Use description instead of content */}
      </div>
      <Widgets />
      <Footer />
    </div>
  );
};

export default ArticleDetail;
