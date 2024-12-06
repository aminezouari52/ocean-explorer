import "./style.css";
import logo from "../../images/logo.png";
import NavItem from "../NavItem";
import { useEffect, useState } from "react";

const Header = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY <= 5);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={isAtTop ? "" : "shadow"}>
      <div className="start">
        <a className="img-link" href="www.example.com">
          <img className="se-logo" src={logo} alt="Schneider Electric" />
        </a>
        <nav aria-label="Main menu">
          <ul className="list">
            <NavItem title="one" />
            <NavItem title="two" />
            <NavItem title="three" />
            <NavItem title="four" />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
