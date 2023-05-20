import React from "react";

export default function LiveAppLearnMore(props){
    return (
        <div className="project-button">
            <div id="button-three">
                <a href={props.live_link}>LIVE APP</a>
            </div>
            <div id="button-three">
                <a href={props.figma_link}>FIGMA LINK</a>
            </div>
        </div>
    )
}
