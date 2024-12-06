import "./style.css";

const NavItem = ({ title }) => {
  return (
    <li className="li-nav-item" role="tab">
      <a className="tabs-item" href="#section-id">
        <div className="tab">{title}</div>
        <div className="line"></div>
      </a>
    </li>
  );
};

export default NavItem;
