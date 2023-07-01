import React, { useEffect, useState } from "react";
import quote from "../assets/quote.svg";
import arumun from "../assets/arumun.png";
import instagram from "../assets/IG.svg";
import carnage from "../assets/carnage.png";
import linkedin from "../assets/LnkdIn.svg";

export default function Testimonial() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const testimonials = [
        {
            id: 1,
            image: arumun,
            text:
            `Working with Tersoo was an exceptional experience. Despite the tight deadline, 
            he was able to deliver a visually stunning and fully functional website in time for our annual conference. 
            I am thrilled with the outcome and highly recommend him for his talent and dedication.`,
            author: "Arumun Mee",
            icon: instagram,
            icon_link: "https://www.instagram.com/meearumun/",
            company: "President of Africa Students Association in Russia ",
        },
        {
            id: 2,
            image: carnage,
            text:
            `It was an absolute pleasure collaborating with Tersoo as a colleague and team lead on the ChunkFile project. 
            His leadership skills and technical expertise, ensured the smooth execution and timely delivery of the project. 
            I highly recommend Tersoo as a valuable asset to any team`,
            author: "Ezekiel Okebule",
            icon: linkedin,
            icon_link: "https://www.linkedin.com/in/ezekiel-okebule/",
            company: "Zuri Team 50",
        },
        ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((currentSlide + 1) % testimonials.length);
        }, 5000);
            return () => clearInterval(interval);
        }, [currentSlide]);

    function handleNavClick(index) {
        setCurrentSlide(index);
    }

    return (
        <section>
            <div className="testimonial-container">
                <div className="testimonial-left">
                    <div className="img-bg"></div>
                    <div className="img-con">
                        <img src={testimonials[currentSlide].image} alt="sample image" />
                    </div>
                </div>
                <div className="testimonial-right">
                    <img src={quote} alt="Left Quote Icon" width="75px" />
                    <p className="test-p1" data-testimonial={testimonials[currentSlide].id}>
                        {testimonials[currentSlide].text}
                    </p>
                    <hr className="hr2"/>
                    <div>
                        <a className="test-p2-container" href={testimonials[currentSlide].icon_link} target="_blank">
                            <img className="test-p2"src={testimonials[currentSlide].icon}  alt="Social Icon"/>
                            <p className="test-p2">{testimonials[currentSlide].author}</p>
                        </a>
                    </div>
                    <p className="test-p3">{testimonials[currentSlide].company}</p>
                </div>
            </div>
            <div className="test-nav">
                {testimonials.map((testimonial, index) => (
                <div
                    key={testimonial.id}
                    className={`nav-circle ${currentSlide === index ? "active2" : ""}`}
                    data-testimonial-nav={testimonial.id}
                    onClick={() => handleNavClick(index)}
                ></div>
                ))}
            </div>
        </section>
    );
}
