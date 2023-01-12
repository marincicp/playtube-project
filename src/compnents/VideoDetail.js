import React from "react";

const VideoDetail = ({ video }) => {
  console.log(video);

  if (!video) {
    return (
      <div className="message">
        <ion-icon name="search"></ion-icon> Search for a video !
      </div>
    );
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className="videoDetail-container">
      <div className="ui embed">
        <iframe title="video player" src={videoSrc} />
      </div>

      <div className="video-info">
        <div className="info-box">
          <h4 className="title">{video.snippet.title} </h4>

          <div className="publisher">
            <span className="icon">
              <ion-icon name="person"></ion-icon>
            </span>
            <span className="publisher-name">{video.snippet.channelTitle}</span>
          </div>
        </div>

        <div className="description-box">
          <p>Description: </p> <span>{video.snippet.description}</span>
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
