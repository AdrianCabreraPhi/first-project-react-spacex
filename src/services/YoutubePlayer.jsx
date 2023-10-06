import React from "react";

const YouTubePlayer = ({ videoId }) => {
  return (
    <iframe
      width="640"
      height="320"
      src={`https://www.youtube.com/embed/${videoId}`}
      frameBorder="0"
      allowFullScreen
      title="YouTube Video"
    ></iframe>
  );
};

export default YouTubePlayer;
