// src/components/Skills/Skills.tsx
import React from "react";
import styles from "../styles/Skills.module.scss";

const colors = [
  "#4a6e4d", // Vert forêt mat
  "#6a8b74", // Vert olive mat
  "#9aab90", // Vert mousse mat
  "#6b4f4f", // Rouge brique mat
  "#8a6a6a", // Rouge terre mat
  "#b9a1a1", // Rouge pâle mat
  "#b8a65e", // Jaune moutarde mat
  "#d4c27c", // Jaune pâle mat
  "#f0e4a7", // Jaune crème mat
  "#4a5c6c", // Bleu gris mat
  "#6e7b8c", // Bleu acier mat
  "#9fb4c6", // Bleu poudre mat
];

// Fonction pour obtenir une couleur bleue aléatoire parmi les teintes définies
const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

interface Skill {
  name: string;
  percentage: number;
}

interface SkillsProps {
  skills: Skill[];
  title?: string; // Ajout d'une prop pour le titre
}

const Skills: React.FC<SkillsProps> = ({ skills, title }) => {
  // Séparer les compétences en deux colonnes
  const half = Math.ceil(skills.length / 2);
  const firstColumnSkills = skills.slice(0, half);
  const secondColumnSkills = skills.slice(half);

  return (
    <div className={styles.skillsContainer}>
      {title && <h3 className={styles.title}>{title}</h3>}
      <div className={styles.columns}>
        <div className={styles.column}>
          {firstColumnSkills.map((skill) => (
            <div key={skill.name} className={styles.skill}>
              <div className={styles.skillLabel}>{skill.name}</div>
              <div className={styles.progressBar}>
                <div
                  className={styles.progressBarFill}
                  style={{
                    width: `${skill.percentage}%`,
                    backgroundColor: getRandomColor(), // Couleur aléatoire
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.column}>
          {secondColumnSkills.map((skill) => (
            <div key={skill.name} className={styles.skill}>
              <div className={styles.skillLabel}>{skill.name}</div>
              <div className={styles.progressBar}>
                <div
                  className={styles.progressBarFill}
                  style={{
                    width: `${skill.percentage}%`,
                    backgroundColor: getRandomColor(), // Couleur aléatoire
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
