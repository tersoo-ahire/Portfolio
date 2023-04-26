import React from "react";
import { Link } from "react-router-dom";
import "../styles/App.css"

export default function Button(){
    return (
        <Link to="/contact">
            <button>Contact Me</button>
        </Link>
    )
}
