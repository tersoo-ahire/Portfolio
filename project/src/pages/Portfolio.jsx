import React from "react";
import "../styles/App.css";
import Project from "../components/Project";
import projectdata from "../data/project";

function Portfolio(){
    const projects = projectdata.map(item => {return (<Project key = {item.id} {...item}/>)})

    return (
        <div className="section2">
            {projects}
        </div>
    )
}

export default Portfolio;