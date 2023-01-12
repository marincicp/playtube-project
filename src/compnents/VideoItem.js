import "../compnents/scss/style.scss";
import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  console.log(video, "vidoe");
  return (
    <div onClick={() => onVideoSelect(video)} className="videoItem">
      <img
        alt={video.snippet.title}
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
        <div className="publisher">{video.snippet.channelTitle}</div>
      </div>
    </div>
  );
};

export default VideoItem;
