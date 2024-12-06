import "./style.css";
import Tab from "../Tab";
import { useEffect, useRef, useState } from "react";
import Panel from "../Panel";

const Tabbar = () => {
  const tabbarRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0); // Track the active tab index

  useEffect(() => {
    const handleKeyDown = (e) => {
      const tabs = Array.from(
        tabbarRef.current.querySelectorAll("[role='tab']")
      );
      const panels = document.querySelectorAll("[role='tabpanel']");
      const currentIndex = tabs.indexOf(document.activeElement);

      let newIndex = currentIndex;
      switch (e.key) {
        case "ArrowRight":
        case "ArrowDown":
          e.preventDefault();
          newIndex = (currentIndex + 1) % tabs.length;
          break;

        case "ArrowLeft":
        case "ArrowUp":
          e.preventDefault();
          newIndex = (currentIndex - 1 + tabs.length) % tabs.length;
          break;

        case "Home":
          e.preventDefault();
          newIndex = 0;
          break;

        case "End":
          e.preventDefault();
          newIndex = tabs.length - 1;
          break;

        default:
          return;
      }

      tabs[newIndex].focus(); // Move focus to the new tab
      setActiveIndex(newIndex); // Update active tab index
    };

    const tabbar = tabbarRef.current;
    tabbar?.addEventListener("keydown", handleKeyDown);

    return () => {
      tabbar?.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleTabClick = (index) => {
    const tabs = Array.from(tabbarRef.current.querySelectorAll("[role='tab']"));
    const panels = document.querySelectorAll("[role='tabpanel']");

    tabs.forEach((tab, i) => {
      const isActive = i === index;
      tab.setAttribute("aria-selected", isActive);
      tab.tabIndex = isActive ? "0" : "-1";
      panels[i].hidden = !isActive;
    });
  };

  return (
    <ul
      class="tabbar-ul"
      ref={tabbarRef}
      role="tablist"
      aria-label="Ocean Life Tabs"
    >
      <div
        ref={tabbarRef}
        role="tablist"
        aria-label="Accessible Tabs"
        style={{
          display: "flex",
          gap: "4px",
        }}
      >
        {["Penguin", "Jellyfish", "Orca"].map((label, index) => (
          <Tab
            label={label}
            key={index}
            id={`tab${index}`}
            panel={`panel${index}`}
            selected={activeIndex === index}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>

      {[
        {
          src: "https://images.pexels.com/photos/3347323/pexels-photo-3347323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          alt: "Penguin Photo",
          href: "https://en.wikipedia.org/wiki/Penguin",
        },
        {
          src: "https://images.pexels.com/photos/7868341/pexels-photo-7868341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          alt: "Jellyfish Photo",
          href: "https://kids.nationalgeographic.com/animals/invertebrates/facts/jellyfish",
        },

        {
          src: "https://images.pexels.com/photos/10305575/pexels-photo-10305575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          alt: "Orca Photo",
          href: "https://en.wikipedia.org/wiki/Orca",
        },
      ].map((content, index) => (
        <Panel
          key={index}
          id={`panel${index}`}
          labeledBy={`tab${index}`}
          hidden={activeIndex !== index}
        >
          <div class="content">
            <img src={content.src} alt={content.alt} />
            <a href="" target="_blank" class="content-link">
              read more
            </a>
          </div>
        </Panel>
      ))}
    </ul>
  );
};

export default Tabbar;
