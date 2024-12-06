import React from "react";
import Video from "@/components/Video";
import "./style.css";

const Block = () => {
  const mainTitle = "Plongez dans les Profondeurs";
  const subtitle = "Découvrez les Merveilles de l'Océan";
  const description =
    "Explorez les mystères de la mer bleue profonde. Des récifs coralliens vibrants à la majestueuse vie marine, embarquez pour une aventure sous-marine inoubliable.";
  const descriptionList = [
    "Apprenez la conservation des océans",
    "Vivez des visuels sous-marins à couper le souffle",
    "Soutenez des écosystèmes marins durables",
  ];
  const kicker = "L'Aventure Vous Attend !";

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
          aria-label="Boutons d'appel à l'action"
        >
          <a
            href="/learn-more"
            className="cta-button cta-button--link"
            role="button"
            aria-label="En savoir plus sur nos aventures océaniques"
          >
            En savoir plus
          </a>
          <button
            className="cta-button cta-button--primary"
            aria-label="Commencez votre voyage maintenant"
            onClick={() => alert("Commencer le voyage!")}
          >
            Commencer
          </button>
        </div>
      </div>
    </section>
  );
};

export default Block;
