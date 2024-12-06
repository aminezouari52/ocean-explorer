import "./style.css";

const SkipContent = () => {
  const skipMainContentHandler = (event) => {
    event.preventDefault();
    const main = document.querySelector("main");
    if (main) {
      const firstFocusable = main.querySelector(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (firstFocusable) {
        firstFocusable.focus();
      }
    }
  };

  return (
    <button
      type="button"
      role="link"
      className="skip-content"
      aria-label="passer au contenu principal"
      onClick={skipMainContentHandler}
    >
      Passer au contenu principal
    </button>
  );
};

export default SkipContent;
