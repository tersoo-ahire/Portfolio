import React from "react";
import quote from "../assets/quote.svg";
import sample from "../assets/lady.png";

export default function Testimonial(){
    return (
        <section>
            <div className="testimonial-container">
                <div className="testimonial-left">
                    <div className="img-bg"></div>
                    <div className="img-con"><img src={sample} alt="sample image" /></div>
                </div>
                <div className="testimonial-right">
                    <img src={quote} alt="Left Quote Icon" width="75px"/>
                    <p className="test-p1">
                        The technological revolution is changing aspect of our lives, 
                        and the fabric of society itself. it's also changing the way we 
                        learn and what we learn. Factual knowledge is less prized when 
                        everything you ever need to know can be found on your phone. 
                    </p>
                    <p className="test-p2">Yasmine Nurudeen</p>
                    <p className="test-p3">CEO of Dunya Ventures</p>
                </div>
            </div>
            <div className="test-nav">
                <div className="nav-circle"></div>
                <div className="nav-circle"></div>
                <div className="nav-circle"></div>
            </div>
        </section>
    )
} 
