import React from "react";
import Skills from "./Skill";

interface Skill {
  name: string;
  percentage: number;
}

const SkillInformatiques: Skill[] = [
  { name: "PHP", percentage: 80 },
  { name: "HTML", percentage: 80 },
  { name: "CSS/SASS", percentage: 75 },
  { name: "Javascript", percentage: 70 },
  { name: "ReactJS", percentage: 35 },
  { name: "POO", percentage: 60 },
  { name: "SQL", percentage: 85 },
  { name: "Typescript", percentage: 30 },
  { name: "Symfony", percentage: 25 },
  { name: "Git/Gitlab", percentage: 30 },
];

const SkillBDD: Skill[] = [
  { name: "MySQL", percentage: 80 },
  { name: "PostgreSQL", percentage: 60 },
];

const SkillLogiciels: Skill[] = [
  { name: "PHPStorm", percentage: 80 },
  { name: "VS Code", percentage: 70 },
  { name: "SSMS", percentage: 60 },
  { name: "Suite Office", percentage: 70 },
  { name: "Microsoft Teams", percentage: 70 },
  { name: "Outil de ticketing (JIRA par exemple)", percentage: 80 },
];

const Competences: React.FC = () => {
  return (
    <div id="competences">
      <div className="container">
        <div className="content">
          <h2>Compétences</h2>
          <Skills skills={SkillInformatiques} title="Langages Informatiques" />
          <Skills skills={SkillBDD} title="Base de données" />
          <Skills skills={SkillLogiciels} title="Logiciels" />
        </div>
      </div>
    </div>
  );
};

export default Competences;
