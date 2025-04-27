// src/components/Header.tsx
import React from "react";

const Accueil: React.FC = () => {
  return (
    <div id="accueil">
      <div className="container">
        <div className="content">
          <div className="hexagon">
            <img src="../../images/profile.jpg" alt="" />
          </div>
          <div className="quisuisje">
            <h2>Je suis Timothée, j'ai 33 ans</h2>
            <p>
              je suis développeur Web avec une préférence pour le back-end !
            </p>
            <p>
              Ma devise ?{" "}
              <i>Il n'y a pas de problème, il n'y a que des solutions.</i>
            </p>
            <p>
              Je suis peut-être la solution à votre problème alors{" "}
              <a href="../../pdf/CV_COTREL_Timothee_dev.pdf" target="blank">
                téléchargez mon cv !
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accueil;
