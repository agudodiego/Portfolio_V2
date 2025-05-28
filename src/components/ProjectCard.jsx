import React from 'react';
import '../styles/ProjectCard.css'


const CardBody = ({ project }) => {
  return (
    <>
      <div className='cardSup p-1 rounded-top' style={{ backgroundColor: `${project.color}` }}>
        <div className='setIcons p-2 bg-dark rounded-3'>
          {
            project.icons.map((icono, index) => {
              return (
                <img key={index} className="pr_icon mx-2" src={require(`../images/logos/${icono}.png`)} />
              )
            })
          }
        </div>
        <p className="pDescription p-2">{project.description} <span className='pSource'>{project.source}</span></p>
      </div>
      <div className='cardInf d-flex justify-content-around align-items-center bg-dark p-1'>
        <h3 className='pText' style={{ color: `${project.color}` }}>{project.category}</h3>
        <h3 className='pText' style={{ color: project.color }}>
          {project.linkGithub !== "" && (
          <a className='linkgit' href={project.linkGithub} target="_blank" rel="noopener noreferrer">
            <img src={require('../images/logos/linkgithub.png')} alt="GitHub" style={{ height: '24px' }} />
          </a>
          )}
        </h3>
        <h2 className='pNumber' style={{ color: `${project.color}` }}>{project.number}</h2>
      </div>
    </>
  )
}

const ProjectCard = ({ project, handleCardClick }) => {

  return (
    project.category != '3D Modeling' ?
      (<a href={project.url} target="blank" className='pCard m-3 fill-1'>
        <CardBody project={project} />
      </a>) :
      (<div className='pCard m-3 fill-1' onClick={() => handleCardClick(project)}>
        <CardBody project={project} />
      </div>)
  );
}

export default ProjectCard;
