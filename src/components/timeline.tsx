import React, { useState } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

type TimelineExpItemProps = {
  type: "experience";
  entreprise: string;
  localisation: string;
  poste: string;
  debut?: string;
  fin?: string;
  duree?: string;
  missions: string[];
  langages: string[];
  position: "left" | "right";
};

type TimelineFormItemProps = {
  type: "formation";
  formation: string;
  localisation: string;
  quand: string;
  option?: string;
  position: "left" | "right";
};

type TimelineItemProps = TimelineExpItemProps | TimelineFormItemProps;

const TimelineItem: React.FC<TimelineItemProps> = (props) => {
  const [ref, isVisible] = useIntersectionObserver();
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  if (props.type === "experience") {
    return (
      <div
        ref={ref}
        className={`timeline-item timeline-item-${props.position} ${
          isVisible ? "show" : ""
        }`}
      >
        <div className="card">
          <h3>
            {props.poste} chez {props.entreprise} ({props.localisation})
          </h3>
          <button className="toggle-btn" onClick={toggleExpand}>
            {isExpanded ? "-" : "+"}
          </button>
          {isExpanded && (
            <div>
              {props.duree ? (
                <p className="date">
                  {props.debut} - {props.fin} ({props.duree})
                </p>
              ) : (
                <p className="date">
                  {props.debut} et {props.fin}
                </p>
              )}
              <div className="missions">
                {props.missions.map((mission, indexMission) => (
                  <p key={`map-${indexMission}`}>{mission}</p>
                ))}
              </div>
            </div>
          )}
          {props.langages.map((langage, indexLangage) => (
            <i key={`map-${indexLangage}`}>
              {langage}
              {indexLangage < props.langages.length - 1 && ", "}
            </i>
          ))}
        </div>
      </div>
    );
  } else if (props.type === "formation") {
    return (
      <div
        ref={ref}
        className={`timeline-item timeline-item-${props.position} ${
          isVisible ? "show" : ""
        }`}
      >
        <div className="card">
          <h3>
            {props.formation} ({props.localisation})
          </h3>
          <button className="toggle-btn" onClick={toggleExpand}>
            {isExpanded ? "-" : "+"}
          </button>
          {isExpanded && (
            <div>
              <p className="date">{props.quand}</p>
              {props.option ? (
                <p className="option">Option {props.option}</p>
              ) : null}
            </div>
          )}
        </div>
      </div>
    );
  }
  return null; 
};

export default TimelineItem;
