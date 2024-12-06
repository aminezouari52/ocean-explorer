import "./style.css";

const NavItem = ({ title, href }) => {
  const handleScrollToSection = (href) => {
    const el = document.getElementById(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      el.focus();
    }
  };

  return (
    <li className="li-nav-item" role="tab">
      <a
        aria-label={title}
        className="tabs-item"
        tabIndex={0}
        onClick={() => handleScrollToSection(href)}
      >
        <div className="tab">{title}</div>
        <div className="line"></div>
      </a>
    </li>
  );
};

export default NavItem;
