import React from "react";
import Video from "@/components/Video";
import "./style.css";

const Block = () => {
  const mainTitle = "Dive Into the Depths";
  const subtitle = "Discover the Wonders of the Ocean";
  const description =
    "Explore the mysteries of the deep blue sea. From vibrant coral reefs to majestic marine life, embark on an unforgettable underwater adventure.";
  const descriptionList = [
    "Learn about ocean conservation",
    "Experience breathtaking underwater visuals",
    "Support sustainable marine ecosystems",
  ];
  const kicker = "The Adventure Awaits!";
  const videoSrc = "https://sample-videos.com/video123/mp4/720/ocean-view.mp4";

  return (
    <section aria-label={mainTitle} className="block-hero">
      {/* Video as background */}
      <Video
        src={videoSrc}
        autoPlay
        loop
        muted
        aria-label={mainTitle}
        className="block-hero__video"
      />

      {/* Content over the video */}
      <div className="block-hero__content">
        <span className="block-hero__kicker">{kicker}</span>
        <h1 className="block-hero__title">{mainTitle}</h1>
        <h2 className="block-hero__subtitle">{subtitle}</h2>
        <p className="block-hero__description">{description}</p>
        <ul className="block-hero__description-list">
          {descriptionList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div
          className="cta-container"
          role="group"
          aria-label="Call to action buttons"
        >
          <a
            href="/learn-more"
            className="cta-button cta-button--link"
            role="button"
            aria-label="Learn more about our ocean adventures"
          >
            Learn More
          </a>
          <button
            className="cta-button cta-button--primary"
            aria-label="Start your journey now"
            onClick={() => alert("Starting your journey!")}
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Block;
