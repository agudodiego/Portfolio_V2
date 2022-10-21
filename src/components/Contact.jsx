import React from "react";
import '../styles/contact.css'
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

const Contact = ()=> {
    return (
        <div className="banner_container container-fluid d-flex flex-column align-items-center justify-content-center position-absolute top-50 start-50 translate-middle" >
            <div className="row">
                <div className="banner">
                    <a href="https://linkedin.com/in/agudodiego" target="_blank"><BsLinkedin className="logo_redes"/></a>
                    <a href="https://github.com/agudodiego" target="_blank"><BsGithub className="logo_redes"/> </a>
                </div>
            </div>
            <div className="row">
                <h3>agudod@hotmail.com</h3>
            </div>
        </div>
    )
}

export default Contact