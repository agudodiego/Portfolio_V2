import "../styles/About.css"
import { useEffect, useState } from "react";
// import mySkills from "../skills.json"
import html from "../images/logos/html.png";
import css from "../images/logos/css.png";
import bootstrap from "../images/logos/bootstrap.png";
import git from "../images/logos/git.png";
import javascript from "../images/logos/javascript.png";
import react from "../images/logos/react.png";
import java from "../images/logos/java.png";
import spring from "../images/logos/spring.png";
import blender from "../images/logos/blender.png";
import solidworks from "../images/logos/solidworks.png";
import freeCad from "../images/logos/freeCad.png";
import photoshop from "../images/logos/photoshop.png";
import illustrator from "../images/logos/illustrator.png";
import gimp from "../images/logos/gimp.png";
import inkscape from "../images/logos/inkscape.png";

const Skills = () => {

  const mySkills = [
    {
      categoria: "Development",
      iconos: [html, css, bootstrap, git, javascript, react, java, spring],
      descripcion: "At present I am studying the Bachelor of Systems (UNLu). There, I learned some of these technologies and tools but I have also incorporated knowledge through courses on various platforms as well as in a self-taught way."
    },
    {
      categoria: "Design & 3D Modeling",
      iconos: [blender,solidworks,freeCad],
      descripcion: "3d modeling and rendering software accompanied me from the beginning of my studies and during the development of my profession as a Designer. Today they are a perfect complement to show my ideas."
    },
    {
      categoria: "Graphic Design",
      iconos: [photoshop,illustrator,gimp,inkscape],
      descripcion: "I have experience in handling both, bitmaps and vector images software for retouching, logo generation, iconography, etc."
    }
  ]

  return (
    mySkills.map(((skill,index) => {
      return (
        <div key={index} >

          <div className="skill_card text-center text-light">
            <h5 className="skill_title text-ligth">{skill.categoria}</h5>
            <div className="skill_icons mb-3">
              {
                skill.iconos.map((icono, index) => {
                  return(
                    <img key={index} className="sk_icon mx-2" src={icono} />
                  )
                })
              }
            </div>
            <div className="skill_text p-1">
              <p>{skill.descripcion}</p>
            </div>
          </div>

        </div>
      )
    }))
  )
}

export default Skills;