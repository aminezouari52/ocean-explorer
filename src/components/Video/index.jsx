import "./style.css";
import React, { useState, useEffect, useRef } from "react";

const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [origin, setOrigin] = useState(null);
  const [computedImageSrc, setComputedImageSrc] = useState("image.jpg");
  const [computedImageSrcSet, setComputedImageSrcSet] = useState("image.jpg");
  const [computedVideoSrc, setComputedVideoSrc] = useState("video.mp4");

  const videoElement = useRef(null);
  const dialogElement = useRef(null);

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  useEffect(() => {
    setIsPlaying(true && !prefersReducedMotion);
  }, []);

  useEffect(() => {
    const trimmedSource = computedImageSrc.trim();
    let computedSource = trimmedSource;
    let computedSourceSet = "";

    if (trimmedSource.includes(" ")) {
      [computedSource] = trimmedSource.split(" ");
      computedSourceSet = trimmedSource;
    }

    setComputedImageSrc(computedSource);
    setComputedImageSrcSet(computedSourceSet);
  }, [computedImageSrc]);

  useEffect(() => {
    const srcVideo = "video.mp4";
    if (srcVideo.includes("youtube") || srcVideo.includes("youtu.be")) {
      setOrigin("youtube");
      setComputedVideoSrc("https://youtube.com/embed/sample_video_id");
    } else if (srcVideo.includes("youku")) {
      setOrigin("youku");
      setComputedVideoSrc("https://player.youku.com/embed/sample_video_id");
    } else {
      setOrigin("native");
      setComputedVideoSrc("video.mp4");
    }
  }, []);

  const handlePlayPause = () => {
    if (videoElement.current.paused) {
      videoElement.current.play();
      setIsPlaying(true);
    } else {
      videoElement.current.pause();
      setIsPlaying(false);
    }
  };

  const handleCloseDialog = () => {
    if (dialogElement.current) {
      dialogElement.current.close();
    }
  };

  const handleOpenDialog = () => {
    if (dialogElement.current) {
      dialogElement.current.showModal();
    }
  };

  return (
    <div className="video-container">
      {origin === "native" ? (
        <div className="video-wrapper">
          <video
            aria-label="Sample video"
            muted={false}
            autoPlay={true && !prefersReducedMotion}
            loop={false}
            ref={videoElement}
            poster={computedImageSrc}
            onClick={handlePlayPause}
            className="video-element"
          >
            <track default kind="captions" srcLang="en" src="subtitles.vtt" />
            <source src={computedVideoSrc} type="video/mp4" />
            Your browser does not support the video.
          </video>
          <button
            aria-label={`Play video`}
            onClick={handlePlayPause}
            className="play-pause-button"
          >
            {isPlaying ? "Pause" : "Play"}
          </button>
        </div>
      ) : (
        <div className="modal-container">
          <img
            loading="lazy"
            srcSet={computedImageSrcSet}
            src={computedImageSrc}
            alt="Video thumbnail"
            onClick={handleOpenDialog}
            className="modal-image"
          />
          <dialog
            ref={dialogElement}
            aria-labelledby="Sample video"
            className="modal-dialog"
          >
            <button
              aria-label="Close video modal"
              onClick={handleCloseDialog}
              className="close-button"
            >
              Close
            </button>
            <iframe
              sandbox="allow-same-origin allow-presentation allow-scripts allow-popups"
              src={computedVideoSrc}
              title={`${origin} video player`}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="video-iframe"
            />
          </dialog>
          <button
            aria-label="Open video modal"
            onClick={handleOpenDialog}
            className="open-modal-button"
          >
            {isPlaying ? "Pause" : "Play"}
          </button>
        </div>
      )}
      <div className="overlay"></div>
    </div>
  );
};

export default Video;
