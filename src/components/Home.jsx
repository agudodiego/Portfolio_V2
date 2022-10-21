import React from "react";
import '../styles/Home.css'
import a3d from "../images/img/A3D.png";
import pdfEng from "../assets/CV_diegoAgudo_eng.pdf";
import pdfEsp from "../assets/CV_diegoAgudo.pdf";

const Home = () => {
    return (
        <main className="home_container container position-absolute top-50 start-50 translate-middle">
            <div className="row d-flex align-items-center">
                <div className="col-lg-6 caratula_izquierda">
                    <p className="home_texto1 text-light m-0">Hi, my name is</p>
                    <h1 className="home_texto2 text-light m-0">Diego Agudo</h1>
                    <p className="home_texto3 text-light m-0">Welcome to my<span className="home_texto3--rojo"> <i>PORTFOLIO</i> </span>.</p>
                    <a className="menu_enlace m-2 btn btn-sm-lg btn-danger" href={pdfEng} target="blank">CV 🇺🇸</a>
                    <a className="menu_enlace m-2 btn btn-sm-lg btn-danger" href={pdfEsp} target="blank">CV 🇪🇸</a>
                </div>
                <img className="A3D col-lg-6" src={a3d} alt="" />
            </div>
        </main>
    )
}

export default Home