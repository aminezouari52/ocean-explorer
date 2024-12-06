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
        <a className="img-link" href="/" aria-label="page d'acceil">
          <img className="logo" src={logo} alt="Logo Explorateur Oceanique" />
        </a>
        <nav aria-label="Main menu">
          <ul className="list">
            <NavItem href="intro" title="intro" />
            <NavItem href="animals" title="animals" />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
