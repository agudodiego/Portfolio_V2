import React, { useState } from "react";
import { TiArrowBack } from "react-icons/ti";
import ProjectCard from "./ProjectCard";
import myProjects from "../projectsData.json";

const Projects = () => {

  const [showRender, setShowRender] = useState(false);
  const [render, setRender] = useState(null);

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