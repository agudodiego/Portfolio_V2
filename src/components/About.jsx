import React from "react";
import "../styles/About.css"
import diego from "../images/img/diegoAgudocircle.png";
import Skills from "./Skills";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div className="about_container container d-sm-flex justify-content-between"
      //Framer Motion attributes
      initial={{ opacity: 0 }}
      animate={{ opacity: 1}}
      exit={{ opacity: 0 }}
    >

      <div className="foto_contenedor col-md-5 d-flex flex-column align-items-center">
        <div className="foto ">
          <img src={diego} className="w-100" />
        </div>
        <p className="texto_foto text-light text-center">
          I was born in a small town located in the northwest of the Buenos Aires province,
          where I lived until finishing High School. <br />
          Then I moved to Buenos Aires city to study Industrial Design at UBA University,
          although I am currently focusing on my career as a developer <br />
          I consider myself a curious person, with a self-improvement desire and committed with continuous learning,
          both characteristics that led me to live in the United States (N.Y) and South Korea (Seoul)
          where I worked and studied respectively. <br />
          Through these experiences I acquired a multicultural vision of the world that surrounds us,
          also improving my ability to adapt to different environments and heterogeneous work groups.
        </p>
      </div>
      <div className="skills col-md-6 d-flex flex-column justify-content-between">
        <Skills />
      </div>
    </motion.div>
  )
}

export default About