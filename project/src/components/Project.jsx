import React from "react";
import LALMButtons from "./LiveApp-LearnMore";
import Image from "./Image";


export default function Project(props){
    const projectImages = props.technology.map((image, index) => (
        <Image key={index} technology={image} />
    ));

    return (
        <>
            <div className="project-container">
                <div className="project-left">
                    <p className="project-p1">— Project {props.id}</p>
                    <h3 className="project-h3">{props.project_name}</h3>
                    <p style={{ whiteSpace: 'pre-line' }} className="project-p2">{props.project_description}</p>
                    <div className="project-icons">
                        <p className="project-p3-text">Technologies used:</p> 
                        {projectImages}
                    </div>
                    <LALMButtons
                        live_link={props.live_link}
                        figma_link={props.figma_link}
                    />
                </div>
                <div className="project-right">
                    <div className="project-right-sub1"></div>
                    <img src={props.project_image} className="project-right-sub2" alt="project hero banner" />
                </div>
            </div>
            
            <div className="circles-container">
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
