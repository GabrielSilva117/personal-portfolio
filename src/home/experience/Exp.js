import React from 'react'
import wegLogo from '../../assets/images/weg-logo-1.png'
import geoLogo from '../../assets/images/download.jpeg'
import xirabaLogo from '../../assets/images/xiraba.jpeg'
import './exp.css'
import ExperienceBox from "./Components/ExperienceBox";

const Exp = () => {
  const experiences = [
    // {
    //   logo: xirabaLogo,
    //   role: 'Desenvolvedor Full Stack -',
    //   type: 'Full Time',
    //   description: 'Possuo como responsabilidade o desenvolvimento e suporte do projeto WBS fornecido para a Weg, ' +
    //       'onde desenvolvo utilizando Javascript na plataforma do Service Now',
    //   duration: '07/24 - trabalho aqui atualmente'
    // },
    {
      logo: geoLogo,
      role: 'Desenvolvedor Full Stack -',
      type: 'Full Time',
      description: 'Atuo colaborando com o desenvolvimento e manutenção dos projetos da empresa,' +
          'onde pratico e utilizo: Vue, Java, Vaadin, Spring Boot, Hibernate, JPA, PHP, C#, TypeScript,' +
          ' Javascript, JQuery, BootStrap, PostgreSQL e MariaDB.',
      duration: '06/23 - trabalho aqui atualmente',
    },
    {
      logo: wegLogo,
      role: 'Desenvolvedor Full Stack -',
      type: 'Estágio',
      description: 'Atuei auxiliando tanto no desenvolvimento Full Stack quanto na manutenção das aplicações da empresa, onde eu ' +
          'apliquei as tecnologias de: Angular, Node, TypeScript, Sequelize, Express, MySQL',
      duration: '03/23 - 06/23',
    },
  ];

  return (
    <div className="exp-container" data-aos="fade-up" data-aos-delay="400">
      <div className="subtitle">
        <h4>Experiência</h4>
      </div>
      <section>
        {experiences.map((experience, index) => (
            <ExperienceBox key={index} experience={experience} />
        ))}
      </section>
    </div>
  )
}

export default Exp
