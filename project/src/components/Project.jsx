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
                    <img src={html} alt="" />
                    <img src={css} alt="" />
                    <img src={javascript} alt="" />
                    <img src={git} alt="" />
                    <img src={django} alt="" />
                    <img src={python} alt="" />
                    <img src={pythonanywhere} alt="" />
                    <img src={vite} alt="" />
                    <img src={react} alt="" />
                    <img src={node} alt="" />
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
