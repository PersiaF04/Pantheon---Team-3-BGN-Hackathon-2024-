import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Banner from "./banner";
import Footer from "./Footer";
import Widgets from "./Widget";

const VideoDetail = () => {
  const { id } = useParams(); // Get the video ID from the URL
  const [video, setVideo] = useState(null);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        console.log("test ID", id);
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/videos/${id}`,
        );
        setVideo(response.data.video);
        console.log("test", video);
      } catch (error) {
        console.error("Fetch video details failed:", error);
      }
    };

    if (id) {
      fetchVideo();
    }
  }, [id]);

  return (
    <div className="flex flex-col min-h-screen">
      <Banner />

      <div className="flex-grow p-4">
        <h1 className="text-2xl font-bold mb-4 text-center">{video?.title}</h1>

        <div className="my-4 w-full max-w-4xl mx-auto aspect-video">
          <iframe
            src={`https://www.youtube.com/embed/${video?.url.split("=")[1]}`}
            title={video?.title}
            width="100%"
            height="100%"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <p className="text-gray-700 mt-4 text-center">{video?.description}</p>
      </div>
      <Widgets />
      <Footer />
    </div>
  );
};

export default VideoDetail;
