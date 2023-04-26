import React from "react";
import "../styles/App.css";
import message from "../assets/message.svg"
import { Link } from "react-router-dom";

function Thankyou(){
    return (
        <div className="thankyou-container">
            <img src={message} alt="Image of Message" width="20%" style={{marginBottom:"30px"}}/>
            <h2 className="thankyou-h2"><span style={{color: "#58D898"}}>Thank you</span> for reaching out!</h2>
            <p className="thankyou-p">I will respond to you within <span style={{color: "#58D898"}}>24 hours.</span></p>
            <Link to="/">
                <button>Back</button>
            </Link>
        </div>
    )
}

export default Thankyou;