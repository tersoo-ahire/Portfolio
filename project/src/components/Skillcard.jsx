import React from "react";
import "../styles/App.css";

export function SkillcardOne(props){
    return (
        <div className="skillcard">
            <div className="skillcard-icon-container">
                <img src={props.icon} alt="Skill Icon"/>
                <img src={props.iconalt} alt="Skill Icon" className="hover-image"/>
            </div>
            <p className="skillcard-p1">{props.title}</p>
            <p className="skillcard-p2">{props.description}</p>
        </div>
    )
}

export function SkillcardTwo(props){
    return (
        <div className="skillcard">
            <div className="skillcard-icon-container">
                <img src={props.icon} alt="Skill Icon" />
                <img src={props.iconalt} alt="Skill Icon" className="hover-image"/>
            </div>
            <p className="skillcard-p1">{props.title}</p>
            <p className="skillcard-p2">{props.description}</p>
        </div>
    )
}
