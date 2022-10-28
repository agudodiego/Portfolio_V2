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
          I was born in Carlos Tejedor, a small town located in the northwest of Buenos Aires, 500km. away from C.A.B.A,
          where I moved after finishing Highschool. <br />
          Although I earned my bachelorś degree as an Industrial Designer (UBA), i am currently pursuing a career as a developer <br />
          I am inherently curious, that's why i believe everything we encounter embodies a learning experience and that there is always
          room for self-improvement. It was my curiosity tht led me to live in the United States (N.Y) and South Korea (Seoul)
          where I worked and studied respectively. <br />
          Through these multicultural experiences I improved my ability to adapt to different environments and heterogeneous work groups
          and, most importantly, i gained a new perspective of the world we are inmersed in.
        </p>
      </div>
      <div className="skills col-md-6 d-flex flex-column justify-content-between">
        <Skills />
      </div>
    </motion.div>
  )
}

export default About