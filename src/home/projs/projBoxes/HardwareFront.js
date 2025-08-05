import React from 'react'
import {SiAngular, SiReact} from 'react-icons/si'

const HardwareFront = () => {
  return (
    <div className="proj-container">
      <div className="proj-container-header">
        <div className="proj-title">
          <a
            href="https://github.com/GabrielSilva117/hardware-today-front"
            className="link-option"
          >
            <h1>Hardware Today</h1>
          </a>
          <small>Front End</small>
        </div>
        <div className="proj-icon">
          <SiAngular size={'1.5rem'} />
        </div>
      </div>
      <p>
          No frontend, desenvolvo a interface
          do e-commerce utilizando Angular e TypeScript, com foco
          em responsividade, usabilidade e performance. Utilizo Angular
          Material e Bootstrap para compor o design e garantir uma
          experiência moderna e consistente ao usuário.
      </p>
    </div>
  )
}

export default HardwareFront
