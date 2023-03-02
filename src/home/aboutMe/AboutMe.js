import React from 'react'
import './aboutme.css'

const AboutMe = () => {
  return (
    <div
      className="aboutme-container"
      data-aos="fade-right"
      data-aos-delay="300"
    >
      <div className="subtitle">
        <h4>Sobre Mim</h4>
      </div>
      <div className="aboutme-text">
        <p>
          Sou Gabriel, tenho 20 anos e sempre fui fascinado por tecnologia e
          pela área de TI, atualmente estou cursando Engenharia de Software no
          <strong> Quarto semestre</strong> e estudo programação há mais de um
          ano, nunca trabalhei e não possuo experiência na área, entretanto
          desenvolvi diversos projetos pessoais e um projeto FrontEnd como
          freelancer para uma empresa de eventos, onde, durante essa jornada,
          aprendi e utilizei as tecnologias abaixo.
        </p>
      </div>
    </div>
  )
}

export default AboutMe
