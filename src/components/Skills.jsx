import "../styles/About.css"
import mySkills from "../skillsData.json"

const Skills = () => {

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
                    <img key={index} className="sk_icon mx-2" src={require(`../images/logos/${icono}.png`)} />
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