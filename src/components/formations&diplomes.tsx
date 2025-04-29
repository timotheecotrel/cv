// src/components/Experience.tsx
import React from "react";
import TimelineItem from "./timeline";
interface FormationItem {
  formation: string;
  localisation: string;
  quand: string;
  option?: string;
}

const formations: FormationItem[] = [
  {
    formation: "Licence pro ATC Webmestre",
    localisation: "Faculté de Caen (14)",
    quand: "2014 - 2015",
    option: "Développement",
  },
  {
    formation: "Licence informatique",
    localisation: "Faculté de Caen (14)",
    quand: "2012 - 2014",
  },
  {
    formation: "BTS Informatique de gestion",
    localisation: "Lycée Sainte-Ursule à Caen (14)",
    quand: "2010 - 2012",
    option: "Développeur d’applications",
  },
  {
    formation: "BAC Scientifique",
    localisation: "Lycée Malherbe à Caen (14)",
    quand: "2010",
    option: "Physique/chimie",
  },
];

const Formations: React.FC = () => {
  return (
    <div id="formations">
      <div className="container">
        <div className="content">
          <h2>Formations & Diplômes</h2>
          <div className="timeline">
            {formations.map((form, index) => (
              <TimelineItem
                type="formation"
                key={index}
                formation={form.formation}
                localisation={form.localisation}
                quand={form.quand}
                option={form.option}
                position={index % 2 === 0 ? "left" : "right"}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formations;
