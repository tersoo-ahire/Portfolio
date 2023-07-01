import React from "react";
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import "../styles/App.css";
import "../styles_mobile/App.css";
import "../styles_tablet_small/App.css";
import "../styles_tablet_large/App.css";
import Button from "../components/Button";
import Project from "../components/Project";
import Testimonial from "../components/Testimonial";
import tersoo from "../assets/tersoo.png";
import whatsapp from "../assets/whatsapp2.png";
import {SkillcardOne, SkillcardTwo} from "../components/Skillcard";
import skilldata1 from "../data/skill1";
import skilldata2 from "../data/skill2";
import projectdata from "../data/project";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import javascript from "../assets/javascript.svg";
import python from "../assets/python.svg";
import django from "../assets/django.svg";
import git from "../assets/git.svg";
import figma from "../assets/figma.svg";
import bootstrap from "../assets/bootstrap.svg";
import react from "../assets/react.svg";
import nodejs from "../assets/nodejs.svg";
import typescript from "../assets/typescript.svg";
import scss from "../assets/scss.svg";
import photoshop from "../assets/photoshop2.svg";
import wordpress from "../assets/wordpress.svg";
import vscode from "../assets/vscode.svg";



function Home(){
    const skillcard1 = skilldata1.map(item => {return (<SkillcardOne key = {item.id} {...item}/>)})
    const skillcard2 = skilldata2.map(item => {return (<SkillcardTwo key = {item.id} {...item}/>)})
    
    const projects = projectdata.map(item => {return (<Project key = {item.id} {...item}/>)})

    // For transitioning skillcards
    useEffect(() => {
        const sectionOne = document.querySelector('.section-one');
      
        const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.querySelector('.section-one-left').classList.add('show');
              observer.unobserve(entry.target);
            }
          });
        });
      
        observer.observe(sectionOne);
    }, []);
    
    return (
        <>
            <div className="hero">
                <div className="hero-left">
                    <p className="hero-p1">— About me</p>
                    <h1 className="hero-h1">Hello I’m Tersoo Ahire</h1>
                    <p className="hero-p2">
                        A web developer with a keen eye for detail and a passion for creating intuitive, user-friendly designs and web applications. 
                        Hire me for your next web project and watch your vision come to life.
                    </p>
                    <Button/>
                </div>
                <div className="hero-right">
                    <img src={tersoo} alt="Image of Tersoo"/>
                </div>
            </div>


            <div className="section-one">
                <div className="section-one-left">
                    <div className="section-one-left-sub">
                        {skillcard1}
                    </div>
                    <div className="section-one-left-sub">
                        {skillcard2}
                    </div>
                </div>
                <div className="section-one-right">
                    <h1 className="section-one-right-h2">Why Hire Me For Your Next Project?</h1>
                    <p className="section-one-right-p2">
                        With strong problem-solving skills and an attention to detail, I am able to take a project 
                        from concept to completion, ensuring that the end result meets your needs and expectations. 
                        <br /><br />
                        I am a strong communicator and able to work effectively as part of a team or individually to complete projects on time and to the highest standard. 
                        My skills, experience, and dedication to delivering high-quality work makes me an ideal candidate for your next project.
                    </p>
                    <a href="https://drive.google.com/file/d/1jYB_CscaFw-kDKBr4Nq4I_esCTsM13MR/view?usp=sharing" target="_blank">
                        <button className="button-two">Download CV</button>
                    </a>
                </div>
            </div>

            <div className="technologies-container">
                <p className="section-one-right-p1">— My Skills</p>
                <div className="technologies-container-sub">
                    <div className="tool-bg">
                        <img src={html} alt="Html Icon" />
                        <b>HTML</b>
                    </div>
                    <div className="tool-bg">
                        <img src={css} alt="CSS Icon" />
                        <b>CSS</b>
                    </div>
                    <div className="tool-bg">
                        <img src={javascript} alt="Javascript Icon" />
                        <b>JAVASCRIPT</b>
                    </div>
                </div>

                <div className="technologies-container-sub">
                    <div className="tool-bg">
                        <img src={react} alt="React Icon" />
                        <b>REACT</b>
                    </div>
                    <div className="tool-bg">
                        <img src={nodejs} alt="Node Icon" />
                        <b>NODEJS</b>
                    </div>
                    <div className="tool-bg">
                        <img src={typescript} alt="TypeScript Icon" />
                        <b>TYPESCRIPT</b>
                    </div>
                </div>

                <div className="technologies-container-sub">
                    <div className="tool-bg">
                        <img src={python} alt="Python Icon" />
                        <b>PYTHON</b>
                    </div>
                    <div className="tool-bg">
                        <img src={django} alt="Django Icon" />
                        <b>DJANGO</b>
                    </div>
                    <div className="tool-bg">
                        <img src={scss} alt="SCSS Icon" />
                        <b>SCSS</b>
                    </div>
                </div>

                <div className="technologies-container-sub">
                    <div className="tool-bg">
                        <img src={bootstrap} alt="Bootstrap Icon" />
                        <b>BOOTSTRAP</b>
                    </div>
                    <div className="tool-bg">
                        <img src={figma} alt="Figma Icon" />
                        <b>FIGMA</b>
                    </div>
                    <div className="tool-bg">
                        <img src={photoshop} alt="Photoshop Icon" />
                        <b>PHOTOSHOP</b>
                    </div>
                </div>

                <div className="technologies-container-sub">
                    <div className="tool-bg">
                        <img src={git} alt="Git Icon" />
                        <b>GIT</b>
                    </div>
                    <div className="tool-bg">
                        <img src={vscode} alt="VS Code Icon" />
                        <b>VS CODE</b>
                    </div>
                    <div className="tool-bg">
                        <img src={wordpress} alt="Wordpress Icon" />
                        <b>WORDPRESS</b>
                    </div>
                </div>
            </div>

            <div className="section-two">
                {projects}
                <button className="viewall">
                    <Link to="/portfolio">View All</Link>
                </button>
            </div>

            <div className="section-three">
                <div className="card-circle1">
                    <div className="card-circle1-inner"></div>
                </div>

                <div className="section-three-left">
                    <div className="card1">
                        <div className="card-p1">3</div>
                        <div className="card-p2">Happy clients</div>
                    </div>
                    <div className="card2">
                        <div className="card-p1">5</div>
                        <div className="card-p2">Projects Done</div>
                    </div>
                </div>

                <div className="section-three-right">
                    <div className="card3">
                        <div className="card-p1">2</div>
                        <div className="card-p2">Award Winnings</div>
                    </div>
                    <div className="card4">
                        <div className="card-p1">1</div>
                        <div className="card-p2">Year of Experience</div>
                    </div>
                </div>

                <div className="card-circle2">
                    <div className="card-circle2-inner"></div>
                </div>
            </div>

            <Testimonial/>

            <div className="section-five">
                <div className="shape1"></div>
                <hr className=""/>
                <h4 className="section-five-h4">Lets Work Together</h4>
                <p className="section-five-p">
                    Hire me to bring your project to life. 
                    My attention to detail and ability to deliver high-quality 
                    work makes me the ideal choice for your next project.
                </p>
                <Button/>
                <div className="shape2"></div>
            </div>

            <a href="https://wa.link/e3eb3c" target="_blank">
                <img src={whatsapp} alt="Whatsapp Icon" className="whatsapp" />
            </a>
        </>
    )
}

export default Home;