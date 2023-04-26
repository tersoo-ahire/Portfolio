import React from "react";
import LALMButtons from "../components/LiveApp-LearnMore";


export default function Project(){
    return (
        <>
        <div className="project-container">
            <div className="project-left">
                <p className="project-p1">— Project 1</p>
                <h3 className="project-h3">Chunkfile</h3>
                <p className="project-p2">
                    ChunkFile is an online platform that allows individuals to upload large CSV or 
                    JSON files and split the dataset in the uploaded CSV or JSON file into multiple files.
                </p>
                <p className="project-p3">
                    Technologies used: 
                </p>
                <LALMButtons/>
            </div>
            <div className="project-right">
                <div className="project-right-sub1"></div>
                <div className="project-right-sub2"></div>
            </div>
        </div>
        </>
    )
}
