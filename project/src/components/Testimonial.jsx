import React, { useEffect, useState } from "react";
import quote from "../assets/quote.svg";
// import sample from "../assets/lady.png";

export default function Testimonial() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const testimonials = [
        {
            id: 1,
            image: "/arumun.png",
            text:
            `Working with Tersoo was an exceptional experience. Despite the tight deadline, 
            he was able to deliver a visually stunning and fully functional website. 
            I am thrilled with the outcome and highly recommend him for his talent and dedication.`,
            author: "Arumun Mee",
            company: "President of Africa Students Association in Russia ",
        },
        {
            id: 2,
            image: "/lady.png",
            text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nunc sapien, vehicula non eleifend non, interdum at lectus. Fusce quis blandit dolor. Nam vel risus purus.",
            author: "Jane Smith",
            company: "CTO of XYZ Corp",
        },
        // {
        //     id: 3,
        //     image: "/lady.png",
        //     text:
        //     "Sed auctor imperdiet augue, at convallis magna. Duis pharetra, tortor vel malesuada tincidunt, quam mi vulputate ex, et scelerisque diam diam non nulla.",
        //     author: "Jane Smith",
        //     company: "Marketing Director at ABC Inc",
        // },
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
                    <p className="test-p2">{testimonials[currentSlide].author}</p>
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
