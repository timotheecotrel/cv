// src/components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          &copy; {new Date().getFullYear()} Timothée COTREL. Tous droits
          réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
