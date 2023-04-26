import React from "react";
import "../styles/App.css";
import Project from "../components/Project";


function Portfolio(){
    return (
        <div className="section-two">
            <Project/>
            <div className="outercircle1">
                <div className="innercircle1"></div>
            </div>
            <Project/>
            <div className="outercircle2">
                <div className="innercircle2"></div>
            </div>
            <Project/>
        </div>
    )
}

export default Portfolio;