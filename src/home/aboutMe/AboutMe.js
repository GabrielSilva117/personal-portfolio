import React from 'react'
import './aboutme.css'

const getAge = (tDate) => {
  const birthDate = new Date(tDate);
  const curDate = new Date();

  let age = curDate.getFullYear() - birthDate.getFullYear();

  if (curDate.getMonth() < birthDate.getMonth()) {
    age--;
  }

  return age;
}

const AboutMe = () => {
  const myAge = getAge('2002-09-09');

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
          Sou Gabriel tenho {myAge} anos e sempre fui fascinado por tecnologia e pela
          área de TI, atualmente estou cursando Engenharia de Software no Setimo
          semestre e atuo como desenvolvedor Full Stack na Xiraba Sistemas,
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
