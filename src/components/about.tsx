// src/components/Skills/Skills.tsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGamepad,
  faUtensils,
  faFutbol,
  faCoffee,
  faTv,
  faPhone,
  faAt,
  faPrint
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const loisirsItems = [
  { icon: faGamepad, label: "Jeux Vidéo" },
  { icon: faUtensils, label: "Cuisine" },
  { icon: faFutbol, label: "Football" },
  { icon: faCoffee, label: "Café" },
  { icon: faTv, label: "Séries TV" },
  { icon: faPrint, label: (
          <>Impression 3D <br/> <a href="https://www.instagram.com/3dbytim/" target="_blank">@3dbytim</a></>) 
        },
];

const contactsItems = [
  {
    icon: faLinkedin,
    href: "https://www.linkedin.com/in/timothée-cotrel",
    label: "LinkedIn",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  { icon: faAt, href: "mailto:timothee.cotrel@gmail.com", label: "Email" },
  { icon: faPhone, href: "tel:+0787024119", label: "Téléphone" },
];

const compPersoItems = [
  {
    competence: "Optimiste",
    emoji: "💪🏻",
  },
  {
    competence: "Objectif",
    emoji: "🎯",
  },
  {
    competence: "Esprit d'équipe",
    emoji: "🤝🏻",
  },
  {
    competence: "Autodidacte/autonome",
    emoji: "🧠",
  },
  {
    competence: "Sens de l'observation",
    emoji: "🔎",
  },
  {
    competence: "Analyser, vérifier, résoudre",
    emoji: "🧩",
  },
  
];


const About: React.FC = () => {
  return (
    <div id="about">
      <div className="container">
        <div className="content">
          <h2>À propos de moi</h2>
          <div className="aproposdemoi">
            <h3>Quelques mots sur moi</h3>
            <p>
              Développeur informatique depuis plus de 8 ans, j’ai acquis des
              compétences <b>solides</b> dans l’informatique et sur moi-même (autonomie,
              l’esprit d’équipe, etc...). <br />
              <br />
              Aujourd’hui je recherche de nouveaux challenges et de nouveaux
              projets à développer. <br />
              Je suis une personne <b>motivée</b> et qui a toujours soif d'apprendre,
              que ce soit via des formations ou en autodidacte.
              <br /> Je suis aussi bien à l’aise en <u>présentiel</u> qu’en <u>télétravail</u>.
              <br />
              <br />
              Je suis disponible dès <b>maintenant</b> pour une prise de poste
              et mon périmètre de recherche s'étend dans un rayon de 50km autour
              d'Alençon mais je suis également ouvert à faire du full-remote.
            </p>
            <h3>Personellement je suis comment ?</h3>
            <p><ul>
                {compPersoItems.map((item, index) => (
                  <li key={index}>{item.emoji} {item.competence}</li>
              ))}
            </ul>
            </p>
            <h3>Loisirs</h3>
            <div className="loisir-container">
              
              {loisirsItems.map((item, index) => (
                <div key={index} className="loisir-item">
                  <FontAwesomeIcon icon={item.icon} size="5x" />
                  <div className="loisir-label">{item.label}</div>
                </div>
              ))}
            </div>
            <h3>Contactez moi !</h3>
            <div className="loisir-container">
              <div className="loisir-item">
                Si vous êtes intéressé, si vous souhaitez échanger ou me laisser
                un message, n'hésitez pas :
                <div className="contact-container">
                  {contactsItems.map((contact, index) => (
                    <a
                      key={index}
                      href={contact.href}
                      target={contact.target}
                      rel={contact.rel}
                      className="contact-item"
                    >
                      <FontAwesomeIcon icon={contact.icon} size="3x" />
                      <div className="contact-label">{contact.label}</div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
