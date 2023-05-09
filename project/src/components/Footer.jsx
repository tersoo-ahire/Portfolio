import React from "react";
import '../styles/footer.css';
import '../styles_mobile/footer.css';
import { Link } from "react-router-dom";
import logo from "../assets/tersoo-logo.svg";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import twitter from "../assets/twitter.svg";
import behance from "../assets/behance.svg";

export default function Footer(){
    return (
        <footer>
            <div>
              <Link to="/"> <img src={logo} alt="Tersoo Logo" width="150px" className="image" /></Link>
            </div>
            
            <em className="email">tersooahire21@gmail.com</em>
            
            <p className="freelance1">© 2022 Freelancer - Ahire Tersoo David. All rights reserved.</p>
            
            <div className="socials-container">
                <a href="https://github.com/tersoo-ahire" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <img src={github} alt="Github Icon"/>
                </a>
                <a href="https://www.linkedin.com/in/tersooahire/" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <img src={linkedin} alt="Linkedin Icon"/>
                </a>
                <a href="https://twitter.com/tersoo_ahire" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <img src={twitter} alt="Twitter Icon"/>
                </a>
                <a href="https://www.behance.net/tersooahire1" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <img src={behance} alt="Behance Icon"/>
                </a>
            </div>
            
            <p className="title">QUICK LINKS</p>

            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/contact">Contact</Link>
            </div>

            <p className="freelance2">© 2022 Freelancer - Ahire Tersoo David. All rights reserved.</p>
        </footer>
    )
}
