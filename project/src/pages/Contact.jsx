import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/App.css";
import "../styles_mobile/App.css";
import "../styles_tablet_small/App.css";
import phone from "../assets/phone.svg";
import email from "../assets/email.svg";

function Contact(){
    const [formData, setFormData] = React.useState({
        fullName: "",
        email: "",
        message: ""
    })

    const navigate = useNavigate();

    function handleChange(event) {
        setFormData((prevState) => ({
          ...prevState,
          [event.target.name]: event.target.value,
        }));
    }
      
    async function submitFormData(event) {
        event.preventDefault();
      
        try {
            const response = await axios.post("https://api.emailjs.com/api/v1.0/email/send", {
            service_id: "service_8id31pw",
            template_id: "template_ffbrc8n",
            user_id: "zcTWJ57n54eYiLV5L",
            template_params: {
                from_name: formData.fullName,
                from_email: formData.email,
                message: formData.message,
            },
        });
      
        if (response.status === 200) {
            navigate("/thankyou");
        }   else {
                alert("Failed to send email. Please try again later.");
        }
        }   catch (error) {
                alert("Failed to send email. Please try again later.");
        }
    }
      
    return (
        <>
            <div className="contact-container">
                <div className="contact-container-left">
                    <div>
                        <p className="hero-p1">— Contact Me</p>
                        <h4 className="contact-container-left-h4">Get in Touch With Me</h4>
                        <p className="contact-container-left-p">
                            Have a question or want to work together? 
                            Leave your details and I'll get back to you as soon as possible.
                        </p>
                    </div>

                    <div className="phone-container">
                        <div className="contact-bg">
                            <img src={phone} alt="phone icon" />
                        </div>
                        <div>
                            <p className="contact-title">Phone</p>
                            <p className="contact-detail">+234 813 226 0584</p>
                            <p className="contact-detail">+234 845 984 0967</p>
                        </div>
                    </div>

                    <div className="email-container">
                        <div className="contact-bg">
                            <img src={email} alt="email icon" />
                        </div>
                        <div>
                            <p className="contact-title">Email</p>
                            <p className="contact-detail">tersooahire15@gmail.com</p>
                            <p className="contact-detail">tersooahire21@gmail.com</p>
                        </div>
                    </div>
                </div>

                <form className="contact-container-right" onSubmit={submitFormData}>
                    <div className="top">
                        <input 
                            type="text" 
                            name="fullName" 
                            placeholder="Full Name"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                        />
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <textarea 
                        cols="30" 
                        rows="10"
                        name="message" 
                        placeholder="Message*"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    >
                    </textarea>
                    <button type="submit">Send to Me</button>
                </form>
            </div>
        </>
    )
}

export default Contact;
