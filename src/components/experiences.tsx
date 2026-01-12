// src/components/Experience.tsx
import React from "react";
import TimelineItem from "./timeline";
interface ExperienceItem {
  entreprise: string;
  localisation?: string;
  poste: string;
  debut?: string;
  fin?: string;
  duree?: string;
  missions: string[];
  langages: string[];
}

const experiences: ExperienceItem[] = [
    {
    entreprise: "Qualiscope",
    poste: "Bénévole développeur front-end",
    debut: "Janvier 2026",
    missions: [
      "Améliortations visuelles",
      "Corrections des bugs",
      "tests"
    ],
    langages: ["HTML", "CSS", "JS"],
  },{
    entreprise: "3dbytim",
    poste: "Micro-entrepeneur - impression 3D",
    debut: "Aout 2025",
    missions: [
      "Modélisation 3D",
      "Impression 3D",
      "Calibrtion des imprimantes et sélection des filaments selon l'usage",
      "Facturation"
    ],
    langages: ["Fusion 360", "BambuStudio"],
  },
  {
    entreprise: "Hexaom - siège",
    localisation: "Alençon (61)",
    poste: "Développeur full-stack",
    debut: "Avril 2016",
    fin: "Juin 2024",
    duree: "8 ans et 3 mois",
    missions: [
      "Développement et maintenance d’un ERP",
      "Développement et maintenance d’application interne",
      "Assistance de niveau 1 et 2",
    ],
    langages: [
      "PHP 7/8",
      "HTML",
      "CSS",
      "Javascript",
      "jQuery",
      "Symfony 7",
      "Typescript",
      "ReactJs",
      "Git",
      "Gitlab",
      "SVN",
      "SQL",
      "PostgreSQL",
      "formation aux utilisateurs"
    ],
  },
  {
    entreprise: "Nerepix",
    localisation: "Caen (14)",
    poste: "Stage développeur et intégrateur web",
    debut: "Mai",
    fin: "Aout",
    duree : "4 mois",
    missions: [
      "Développement de fonctionnalités",
      "Création de structure",
      "Intégration",
      "Tests",
      "Débug",
    ],
    langages: ["PHP", "HTML", "CSS", "Sass", "Javascript", "jQuery", "SVN"],
  },
  {
    entreprise: "Keolis",
    localisation: "Caen (14)",
    poste: "2 stages Service informatique",
    debut: "2011",
    fin: "2012",
    duree: "1 mois",
    missions: [
      "Développement d’un outil de gestion pour les ressources humaines",
      "Développement d’un script de connexion en Kixtart",
    ],
    langages: ["HTML", "CSS", "Kixtart"],
  },
];

const Experience: React.FC = () => {
  return (
    <div id="experience">
      <div className="container">
        <div className="content">
          <h2>Éxperiences</h2>
          <div className="timeline">
            {experiences.map((exp, index) => (
              <TimelineItem
                type="experience"
                key={index} 
                entreprise={exp.entreprise}
                localisation={exp.localisation}
                poste={exp.poste}
                debut={exp.debut}
                fin={exp.fin}
                duree={exp.duree}
                missions={exp.missions}
                langages={exp.langages}
                position={index % 2 === 0 ? "left" : "right"}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
