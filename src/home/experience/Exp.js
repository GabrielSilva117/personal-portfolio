import React from 'react'
import wegLogo from '../../assets/images/weg-logo-1.png'
import './exp.css'

const Exp = () => {
  return (
    <div className="exp-container">
      <div className="subtitle">
        <h4>Experiência</h4>
      </div>
      <div className="exp-content-box">
        <div className="exp-icon-row">
          <img src={wegLogo} alt="Company logo" className="company-logo" />
        </div>
        <div className="exp-text-row">
          <div className="exp-text-header">
            <h2>Desenvolvedor Full Stack -</h2>
            <p>Estágio</p>
          </div>
          <div className="exp-text-body">
            <p>
              Atuo auxiliando tanto no desenvolvimento Full Stack quanto na
              manutenção das aplicações da empresa, onde eu aplico as
              tecnologias de: com Angular, Node, TypeScript, Sequelize, Express,
              MySQL
            </p>
            <small>03/23 - trabalho aqui atualmente</small>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Exp
