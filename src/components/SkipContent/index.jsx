import "./style.css";

const SkipContent = () => {
  const skipMainContentHandler = (event) => {
    event.preventDefault();
    const mainContent = document.querySelector("main");
    if (mainContent) {
      mainContent.setAttribute("tabindex", "-1");
      mainContent.focus({ preventScroll: true });
    }
  };

  return (
    <button
      type="button"
      role="link"
      className="skip-content"
      onClick={skipMainContentHandler}
    >
      Passer au contenu principal
    </button>
  );
};

export default SkipContent;
