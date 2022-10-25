import React, { useState } from "react";
import { TiArrowBack } from "react-icons/ti";
import ProjectCard from "./ProjectCard";
import myProjects from "../projectsData.json";
import { motion } from "framer-motion";


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
      <motion.div className="container d-flex flex-wrap justify-content-center p-5 text-center"
        //Framer Motion attributes
        key={showRender} // uso una key cuando renderizo a traves de un estado
        initial={{ opacity: 0 }}
        animate={{ opacity: 1}}
        exit={{ opacity: 0 }}
      >
        {
          myProjects.map((project, index) => {
            return (
              <ProjectCard key={index} project={project} handleCardClick={handleCardClick} />
            )
          })
        }
      </motion.div>
    )
  } else {
    return (
      <motion.div className="container mt-5"
        //Framer Motion attributes
        key={showRender}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="renderModal d-flex flex-column align-items-center">
          <img src={require(`../images/img/${render}.jpg`)} className="renderImg w-75" />
          <button className="btnModal btn btn-danger btn-sm m-2" onClick={closeModal}><TiArrowBack size={25} /></button>
        </div>
      </motion.div>
    )
  }
}

export default Projects