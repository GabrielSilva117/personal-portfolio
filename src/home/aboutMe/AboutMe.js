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
        {/* <p>
          Sou Gabriel, tenho 20 anos e sempre fui fascinado por tecnologia e
          pela área de TI, atualmente estou cursando Engenharia de Software no
          <strong> Quarto semestre</strong> e estudo programação há mais de um
          ano, nunca trabalhei e não possuo experiência na área, entretanto
          desenvolvi diversos projetos pessoais e um projeto FrontEnd como
          freelancer para uma empresa de eventos, onde, durante essa jornada,
          aprendi e utilizei as tecnologias abaixo.
        </p> */}
        {/* <p>
          Sou Gabriel, tenho 20 anos e sempre fui fascinado por tecnologia e
          pela área de TI, atualmente estou cursando Engenharia de Software no
          Quarto semestre, já trabalhei em um projeto Front End como freelancer
          para uma empresa de eventos, e no momento atuo na área como
          Desenvolvedor Full Stack para a WEG, onde auxilio no desenvolvimento e
          na manutenção das aplicações da mesma. Possuo conhecimento tanto em
          programação funcional quando em POO, e já desenvolvi/trabalhei com
          aplicações envolvendo as tecnologia citadas na tabela abaixo.
        </p> */}
        <p>
          Sou Gabriel tenho 20 anos e sempre fui fascinado por tecnologia e pela
          área de TI, atualmente estou cursando Engenharia de Software no Quinto
          semestre e atuo como desenvolvedor Full Stack Júnior na GEOvendas,
          onde colaboro no desenvolvimento e na manutenção das aplicações da
          mesma. Possuo conhecimento tanto em programação funcional quanto em
          POO e já desenvolvi/trabalhei com aplicações envolvendo as tecnologia
          citadas na tabela abaixo.
        </p>
      </div>
    </div>
  )
}

export default AboutMe
