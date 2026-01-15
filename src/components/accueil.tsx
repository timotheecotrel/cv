// src/components/Header.tsx
import React from "react";

const Accueil: React.FC = () => {
  const calculerAge = (dateNaissance :string) => {
    const today = new Date();
    const birthDate = new Date(dateNaissance);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    // Si le mois actuel est avant celui de l'anniversaire, ou que c'est le mois de l'anniversaire mais avant le jour, on enlève 1
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    
    return age;
  };

  const monAge = calculerAge('1990-11-27'); 

  return (
    <div id="accueil">
      <div className="container">
        <div className="content">
          <div className="hexagon">
            <img src={process.env.PUBLIC_URL + '/images/profile.jpg'} alt="" />
          </div>
          <div className="quisuisje">
            <h2>Timothée (mais je préfère Tim), j'ai {monAge} ans, </h2>
            <p>
            je suis <b>développeur fullstack</b>, le back ou le front ça me parle !
            </p>
            <p>
            Ma devise ? <i>Il n'y a pas de problème, il n'y a que des solutions.</i>
            </p>
            <p>
            Je suis peut-être la solution à votre problème alors <a href={process.env.PUBLIC_URL + '/pdf/CV_COTREL_Timothee_dev.pdf'} target="blank"> téléchargez mon cv au format PDF!
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accueil;
