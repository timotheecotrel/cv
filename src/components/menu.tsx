// src/components/Header.tsx
import React, { useState, useEffect } from "react";

const Menu: React.FC = () => {
  type MenuItem = {
    text: string;
    href: string;
  };

  // L'état pour suivre l'élément actif
  const [activeIndex, setActiveIndex] = useState<string | null>("accueil");

  // Les éléments du menu
  const menuItems: MenuItem[] = [
    { text: "accueil", href: "accueil" },
    { text: "experiences", href: "experience" },
    { text: "formations & diplômes", href: "formations" },
    { text: "compétences", href: "competences" },
    { text: "à propos de moi", href: "about" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleItemClick = () => {
    setIsOpen(false); // referme le menu après un clic
  };

  // Gérer le changement d'item actif au scroll
  useEffect(() => {
    const handleScroll = () => {
      let currentSection = activeIndex;

      menuItems.forEach((section) => {
        const element = document.getElementById(section.href);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section.href;
          }
        }
      });

      setActiveIndex(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div id="menu">
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <h1>Timothée COTREL</h1>
          </div>
          <div
            className={`menu-toggle ${isOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
            {" "}
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={item.href === activeIndex ? "active" : ""}
              >
                <a href={`#${item.href}`} onClick={handleItemClick}>{item.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
