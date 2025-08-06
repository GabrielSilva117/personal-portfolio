import React from 'react'
import { Table } from 'react-bootstrap'
import mongoose from '../../assets/images/mongoose.png'
import typeorm from '../../assets/images/typeorm-icon.svg'
import {
    SiJavascript,
    SiTypescript,
    SiReact,
    SiPython,
    SiNodedotjs,
    SiExpress,
    SiPostgresql,
    SiMysql,
    SiMongodb,
    SiGit,
    SiJsonwebtokens,
    SiVuedotjs,
    SiAngular,
    SiRabbitmq,
    SiSpringboot,
    SiSpringsecurity,
    SiDocker, SiHibernate,
} from 'react-icons/si'
import {TbApi, TbDevicesPc} from 'react-icons/tb'
import {DiJava, DiPhp, DiAws} from 'react-icons/di'
import './tech.css'

const TechContainer = () => {
  const iconSize = '1.5rem'

  const skills = [
    {
      icon: <SiJavascript size={iconSize} />,
      name: "JavaScript",
      level: "Intermediário",
      experience: "3 anos"
    },
    {
      icon: <SiTypescript size={iconSize} />,
      name: "TypeScript",
      level: "Intermediário",
      experience: "2 anos"
    },
    {
      icon: <DiJava size={iconSize} />,
      name: "Java",
      level: "Intermediário",
      experience: "2 anos"
    },
    {
      icon: <DiPhp size={iconSize} />,
      name: "PHP",
      level: "Intermediário",
      experience: "1 ano"
    },
    {
      icon: <SiPython size={iconSize} />,
      name: "Python",
      level: "Básico",
      experience: ">1 ano"
    },
    {
      icon: <SiReact size={iconSize} />,
      name: "React",
      level: "Intermediário",
      experience: ">1 ano"
    },
    {
      icon: <SiAngular size={iconSize} />,
      name: "Angular",
      level: "Intermediário",
      experience: "1 ano"
    },
    {
      icon: <SiVuedotjs size={iconSize} />,
      name: "Vue",
      level: "Intermediário",
      experience: "1 ano"
    },
    {
      icon: <SiNodedotjs size={iconSize} />,
      name: "NodeJs",
      level: "Intermediário",
      experience: "2 anos"
    },
    {
      icon: <SiExpress size={iconSize} />,
      name: "Express",
      level: "Intermediário",
      experience: "2 anos"
    },
    {
      icon: <SiPostgresql size={iconSize} />,
      name: "PostgreSQL",
      level: "Intermediário",
      experience: "2 anos"
    },
    {
      icon: <SiMysql size={iconSize} />,
      name: "MySQL",
      level: "Intermediário",
      experience: "2 anos"
    },
    {
      icon: <SiMongodb size={iconSize} />,
      name: "MongoDB",
      level: "Intermediário",
      experience: ">2 anos"
    },
    {
      icon: <img src={typeorm} alt="" style={{ width: '1.5rem', height: '1.5rem' }} />,
      name: "TypeORM",
      level: "Intermediário",
      experience: ">2 anos"
    },
    {
      icon: <img src={mongoose} alt="" style={{ width: '1.5rem', height: '1.5rem' }} />,
      name: "Mongoose",
      level: "Intermediário",
      experience: ">2 anos"
    },
    {
      icon: <SiGit size={iconSize} />,
      name: "Git",
      level: "Intermediário",
      experience: "3 anos"
    },
    {
      icon: <SiJsonwebtokens size={iconSize} />,
      name: "Json Web Tokens",
      level: "Intermediário",
      experience: "2 anos"
    },
    {
      icon: <SiSpringboot size={iconSize} />,
      name: "Spring Boot",
      level: "Intermediário",
      experience: "2 anos"
    },
      {
          icon: <SiSpringsecurity size={iconSize} />,
          name: "Spring Security",
          level: "Básico",
          experience: ">1 ano"
      },
    {
      icon: <SiHibernate size={iconSize} />,
      name: "Hibernate",
      level: "Intermediário",
      experience: "2 anos"
    },
      {
          icon: <SiRabbitmq size={iconSize} />,
          name: "RabbitMQ",
          level: "Básico",
          experience: ">1 ano"
      },
      {
          icon: <TbDevicesPc size={iconSize} />,
          name: "Microserviços",
          level: "Básico",
          experience: ">1 ano"
      },
      {
          icon: <SiDocker size={iconSize} />,
          name: "Docker",
          level: "Básico",
          experience: ">1 ano"
      },
      {
          icon: <DiAws size={iconSize} />,
          name: "AWS",
          level: "Básico",
          experience: ">1 ano"
      }
  ];

  return (
    <div
      className="table-container"
      data-aos-placement="facul-section"
      data-aos="fade-up"
      data-aos-delay="600"
    >
      <div className="subtitle">
        <h4>Tecnologias</h4>
      </div>
      <Table className="table-container" hover>
        <thead>
          <tr>
            <th>Ícone</th>
            <th>Nome</th>
            <th>Nível</th>
            <th>Tempo de proficiência</th>
          </tr>
        </thead>
        <tbody>
        {
          skills.map((skill, index) => (
              <tr key={index}>
                <th>{skill.icon}</th>
                <th>{skill.name}</th>
                <th>{skill.level}</th>
                <th>{skill.experience}</th>
              </tr>
          ))
        }

        </tbody>
      </Table>
    </div>
  )
}

export default TechContainer
