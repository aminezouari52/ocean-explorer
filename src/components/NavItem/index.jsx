import "./style.css";

const NavItem = ({ title, href }) => {
  return (
    <li className="li-nav-item">
      <a
        aria-label={title}
        className="tabs-item"
        tabIndex={0}
        href={`#${href}`}
      >
        <div className="tab">{title}</div>
        <div className="line"></div>
      </a>
    </li>
  );
};

export default NavItem;
