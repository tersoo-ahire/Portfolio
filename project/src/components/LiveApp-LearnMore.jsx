import React from "react";

export default function LiveAppLearnMore(props){
    return (
        <div className="project-button">
            <div id="button-three">
                <a href={props.live_link} target="_blank">LIVE APP</a>
            </div>
            <div id="button-three">
                <a href={props.figma_link} target="_blank">FIGMA LINK</a>
            </div>
        </div>
    )
}
