import React from "react";
import LALMButtons from "../components/LiveApp-LearnMore";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import javascript from "../assets/javascript.svg";
import git from "../assets/git.svg";
import django from "../assets/django.svg";
import python from "../assets/python.svg";
import pythonanywhere from "../assets/pythonanywhere.svg";
import vite from "../assets/vite.svg";
import react from "../assets/react.svg";
import node from "../assets/nodejs.svg";

export default function Project(props){
    return (
        <>
            <div className="project-container">
                <div className="project-left">
                    <p className="project-p1">— Project {props.id}</p>
                    <h3 className="project-h3">{props.project_name}</h3>
                    <p className="project-p2">{props.project_description}</p>
                    <div className="project-icons">
                        <p className="project-p3-text">Technologies used:</p> 
                        <img src={props.technologies} alt="" />
                        {/* <img src={css} alt="" />
                        <img src={javascript} alt="" />
                        <img src={git} alt="" />
                        <img src={django} alt="" />
                        <img src={python} alt="" />
                        <img src={pythonanywhere} alt="" />
                        <img src={vite} alt="" />
                        <img src={react} alt="" />
                        <img src={node} alt="" /> */}
                    </div>
                    <LALMButtons/>
                </div>
                <div className="project-right">
                    <div className="project-right-sub1"></div>
                    <div className="project-right-sub2"></div>
                </div>
            </div>
            
            <div>
                <div className={props.display1}>
                    <div className="outercircle1">
                        <div className="innercircle1"></div>
                    </div>
                </div>
                <div className={props.display2}>
                    <div className="outercircle2">
                        <div className="innercircle2"></div>
                    </div>
                </div>
            </div>
        </>
    )
}
