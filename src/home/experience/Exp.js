import React from 'react'
import wegLogo from '../../assets/images/weg-logo-1.png'
import geoLogo from '../../assets/images/download.jpeg'
import './exp.css'

const Exp = () => {
  return (
    <div className="exp-container" data-aos="fade-up" data-aos-delay="400">
      <div className="subtitle">
        <h4>Experiência</h4>
      </div>
      <section>
        <div className="exp-content-box">
          <div className="exp-icon-row">
            <img src={geoLogo} alt="Company logo" className="company-logo" />
          </div>
          <div className="exp-text-row">
            <div className="exp-text-header">
              <h2>Desenvolvedor Full Stack -</h2>
              <p>Full Time - Júnior</p>
            </div>
            <div className="exp-text-body">
              <p>
                Atuo colaborando com o desenvolvimento e manutenção das
                aplicações e projetos da empresa, onde pratico e utilizo: Vue,
                Java, Vaadin, PHP, Node, TypeScript, e PostgreSQL.
              </p>
              <small>06/23 - trabalho aqui atualmente</small>
            </div>
          </div>
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
                Atuei auxiliando tanto no desenvolvimento Full Stack quanto na
                manutenção das aplicações da empresa, onde eu aplico as
                tecnologias de: Angular, Node, TypeScript, Sequelize, Express,
                MySQL
              </p>
              <small>03/23 - 06/23</small>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Exp
