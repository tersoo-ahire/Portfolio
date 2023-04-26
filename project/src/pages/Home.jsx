import React from "react";
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import "../styles/App.css";
import Button from "../components/Button";
import Project from "../components/Project";
import tersoo from "../assets/tersoo.png";
import {SkillcardOne, SkillcardTwo} from "../components/Skillcard";
import skilldata1 from "../data/skill1";
import skilldata2 from "../data/skill2";

function Home(){
    const skillcard1 = skilldata1.map(item => {return (<SkillcardOne key = {item.id} {...item}/>)})
    const skillcard2 = skilldata2.map(item => {return (<SkillcardTwo key = {item.id} {...item}/>)})
    
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
                    <p className="hero-p1">— Introducing</p>
                    <h1 className="hero-h1">Hello I’m Tersoo Ahire</h1>
                    <p className="hero-p2">
                        I am a talented web developer and UI designer with a strong portfolio of successful projects. 
                        I have a keen eye for detail and a passion for creating intuitive, user-friendly designs. 
                        Hire me for your next web project and watch your vision come to life.
                    </p>
                    <Button/>
                </div>
                <div className="hero-right">
                    <img src={tersoo} alt="Image of Tersoo" style={{width:"70%", height:"auto"}}/>
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
                    <p className="section-one-right-p1">— My Skills</p>
                    <h1 className="section-one-right-h2">Why Hire Me For Your Next Project?</h1>
                    <p className="section-one-right-p2">
                        I am an experienced web developer and designer with a proven track record of delivering successful web projects 
                        for a range of clients. With strong problem-solving skills and attention to detail, I am able to take a project 
                        from concept to completion, ensuring that the end result meets the client's needs and expectations. I am a strong 
                        communicator and work effectively as part of a team or individually to complete projects on time and to the highest standard. 
                        My skills, experience, and dedication to delivering high-quality work make me an ideal candidate for your next project.
                    </p>
                    <a href="https://docs.google.com/document/d/1d70hhmP38scN1eyA8mEXu8ZOGEkOeVp7zc6Z7q5U2QQ/edit#" target="_blank">
                        <button className="button-two">Download CV</button>
                    </a>
                </div>
            </div>

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
                        <div className="card-p1">10</div>
                        <div className="card-p2">Happy clients</div>
                    </div>
                    <div className="card2">
                        <div className="card-p1">5</div>
                        <div className="card-p2">Projects Done</div>
                    </div>
                </div>
                <div className="section-three-right">
                    <div className="card3">
                        <div className="card-p1">7</div>
                        <div className="card-p2">Award Winnings</div>
                    </div>
                    <div className="card4">
                        <div className="card-p1">3</div>
                        <div className="card-p2">Years Experience</div>
                    </div>
                </div>
                <div className="card-circle2">
                    <div className="card-circle2-inner"></div>
                </div>
            </div>

            {/* <Testimonials/> */}

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
                <img src="https://img.icons8.com/bubbles/70/null/whatsapp.png" alt="Whatsapp Icon" width="70px" className="whatsapp" />
            </a>
        </>
    )
}

export default Home;