import React from "react";
import '../styles/navbar.css'
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/tersoo-logo.svg";
import github from "../assets/github.svg";
import Button from "./Button";

export default function Navbar(){
    const location = useLocation();

    return (
        <nav>
            <div>
              <Link to="/"> <img src={logo} alt="Tersoo Logo" width="150px" /></Link>
            </div>
            <div className="nav-center">
                <div className={location.pathname === "/" ? "active" : ""}>
                    <Link to="/">Home</Link>
                </div>
                <div className={location.pathname === "/portfolio" ? "active" : ""}>
                    <Link to="/portfolio">Portfolio</Link>
                </div>
                <div className={location.pathname === "/contact" ? "active" : ""}>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
            <div className="nav-right">
                <a href="https://github.com/tersoo-ahire" target="_blank" rel="noopener noreferrer" className="github-container">
                    <img src={github} alt="Github Logo" width="30px"/>
                </a>
                <Button />
            </div>
        </nav>
    )
}
