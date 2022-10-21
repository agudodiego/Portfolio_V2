import React, { useState } from "react";
import { TiArrowBack } from "react-icons/ti";
import ProjectCard from "./ProjectCard";
import html from "../images/logos/html.png";
import css from "../images/logos/css.png";
import bootstrap from "../images/logos/bootstrap.png";
import javascript from "../images/logos/javascript.png";
import react from "../images/logos/react.png";
import blender from "../images/logos/blender.png";
import solidworks from "../images/logos/solidworks.png";
import photoshop from "../images/logos/photoshop.png";
import render01 from "../images/img/render01.jpg";
import render02 from "../images/img/render02.jpg";
import render03 from "../images/img/render03.jpg";

const Projects = () => {

  const [showRender, setShowRender] = useState(false);
  const [render, setRender] = useState(null);

  const myProjects = [
    {
      description: "Web Layout",
      source: "- Udemy",
      color: "#FFC300",
      category: "Training",
      number: "01",
      icons: [html, css],
      url: "https://agudodiego.github.io/Maqueta1Curso/"
    },
    {
      description: "Web Layout",
      source: "- Udemy",
      color: "#FFC300",
      category: "Training",
      number: "02",
      icons: [html, css],
      url: "https://agudodiego.github.io/Maqueta2Curso/"
    },
    {
      description: "Web Layout (Rock Band)",
      source: "- YouTube",
      color: "#FFC300",
      category: "Training",
      number: "03",
      icons: [html, css],
      url: "https://agudodiego.github.io/Maquetacion-web-Banda/"
    },
    {
      description: "Web Layout (Yoga Studio)",
      source: "- YouTube",
      color: "#FFC300",
      category: "Training",
      number: "04",
      icons: [html, css],
      url: "https://agudodiego.github.io/Maquetacion-web-Yoga-/"
    },
    {
      description: "Teams App",
      source: "- FreeCodeCamp",
      color: "#FFC300",
      category: "Training",
      number: "05",
      icons: [react, bootstrap],
      url: "https://agudodiego.github.io/teams_React/"
    },
    {
      description: "Meals App",
      source: "- FreeCodeCamp",
      color: "#FFC300",
      category: "Training",
      number: "06",
      icons: [react, bootstrap],
      url: "https://agudodiego.github.io/meals_React/"
    },
    {
      description: "Training HTML + CSS + JS",
      source: "",
      color: "#FF5733",
      category: "Personal Project",
      number: "01",
      icons: [html, css, javascript],
      url: "https://agudodiego.github.io/Practica_JS/"
    },
    {
      description: "Asistente de Preguntas para Trivias",
      source: "",
      color: "#FF5733",
      category: "Personal Project",
      number: "02",
      icons: [html, css, javascript],
      url: "https://agudodiego.github.io/Asistente_Trivias/"
    },
    {
      description: "Simon-Says",
      source: "",
      color: "#FF5733",
      category: "Personal Project",
      number: "03",
      icons: [html, css, javascript],
      url: "https://agudodiego.github.io/Simon_says/"
    },
    {
      description: "Ochenta3d",
      source: "(in progress)",
      color: "#FF5733",
      category: "Personal Project",
      number: "04",
      icons: [html, css, javascript, bootstrap],
      url: "https://agudodiego.github.io/ochenta3d_V2/"
    },
    {
      description: "Tetris Shop",
      source: "CUCH - UNTREF",
      color: "#FF5733",
      category: "Personal Project",
      number: "05",
      icons: [html, css, javascript, bootstrap],
      url: "https://agudodiego.github.io/TetrisShop/"
    },
    {
      description: "Playmovil",
      source: "",
      color: "#C70039",
      category: "3D Modeling",
      number: "01",
      icons: [solidworks, blender, photoshop],
      url: "render01"
    },
    {
      description: "Truck Crane",
      source: "- Mis Ladrillos",
      color: "#C70039",
      category: "3D Modeling",
      number: "02",
      icons: [blender, photoshop],
      url: "render02"
    },
    {
      description: "Video Game Console",
      source: "",
      color: "#C70039",
      category: "3D Modeling",
      number: "03",
      icons: [solidworks, blender, photoshop],
      url: "render03"
    }
  ]

  const handleCardClick = (project) => {
    setShowRender(true);
    setRender(project.url)
  }

  const closeModal = () => {
    setShowRender(false);
  }

  if (!showRender) {
    return (
      <div className="container d-flex flex-wrap justify-content-center p-5 text-center">
        {
          myProjects.map((project, index) => {
            return (
              <ProjectCard key={index} project={project} handleCardClick={handleCardClick} />
            )
          })
        }
      </div>
    )
  } else {
    return (
      <div className="container mt-5">
        <div className="renderModal d-flex flex-column align-items-center">
          <img src={require(`../images/img/${render}.jpg`)} className="renderImg w-75" />
          <button className="btnModal btn btn-danger btn-sm m-2" onClick={closeModal}><TiArrowBack size={25} /></button>
        </div>
      </div>
    )
  }
}

export default Projects