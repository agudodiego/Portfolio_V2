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
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >

      <div className="foto_contenedor col-md-5 d-flex flex-column align-items-center">
        <div className="foto ">
          <img src={diego} className="w-100" />
        </div>
        <p className="texto_foto text-light text-center">
          I was born in Carlos Tejedor, a small town in the northwest of Buenos Aires, about 500 km from Buenos Aires City (C.A.B.A.), 
          where I moved after finishing high school. <br />
          Although I earned a bachelor’s degree in Industrial Design from the University of Buenos Aires (UBA), 
          I’m currently building a career as a developer. <br />
          I’m naturally curious, which is why I believe every experience offers something to learn and that there’s always room for personal growth.
          That curiosity led me to live in the United States (New York) and South Korea (Seoul), where I worked and studied, respectively.
          These multicultural experiences helped me become more adaptable to different environments and diverse teams, and most importantly, they gave me a broader perspective on the world we live in.
        </p>
      </div>
      <div className="skills col-md-6 d-flex flex-column justify-content-between">
        <Skills />
      </div>
    </motion.div>
  )
}

export default About