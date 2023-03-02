import React from 'react'
import { SiReact } from 'react-icons/si'

const TechOver = () => {
  return (
    <div className="proj-container">
      <div className="proj-container-header">
        <div className="proj-title">
          <a
            href="https://github.com/GabrielSilva117/tech-overview-server"
            className="link-option"
          >
            <h1>Tech Overview</h1>
          </a>
          <small>Full Stack</small>
        </div>
        <div className="proj-icon">
          <SiReact size={'1.5rem'} />
        </div>
      </div>
      <p>
        O projeto consiste em um blog MERN com tema geek, onde usuários possuem
        funcionalidades CRUD para manipular postagens, além de poder interagir
        com outros usuários através de discussões em outros posts. Para o
        desenvolvimento do projeto, as seguintes tecnologias foram utilizadas:
        MongoDB, Express, React, Node, Mongoose e Bootstrap.
      </p>
    </div>
  )
}

export default TechOver
