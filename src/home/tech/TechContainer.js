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
  SiHtml5,
  SiCss3,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiBootstrap,
  SiHandlebarsdotjs,
  SiMongodb,
  SiGit,
  SiJsonwebtokens,
  SiJson,
  SiVaadin,
  SiVuedotjs,
  SiAngular
} from 'react-icons/si'
import { TbApi } from 'react-icons/tb'
import { DiJava } from 'react-icons/di'
import './tech.css'

const TechContainer = () => {
  const iconSize = '1.5rem'

  const skills = [
    {
      icon: <SiJavascript size={iconSize} />,
      name: "JavaScript",
      level: "Intermediário",
      experience: "2 anos"
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
      experience: "0/1 ano"
    },
    {
      icon: <SiPython size={iconSize} />,
      name: "Python",
      level: "Básico",
      experience: "0/1 ano"
    },
    {
      icon: <SiReact size={iconSize} />,
      name: "React",
      level: "Intermediário",
      experience: "0/1 ano"
    },
    {
      icon: <SiAngular size={iconSize} />,
      name: "Angular",
      level: "Intermediário",
      experience: "0/1 ano"
    },
    {
      icon: <SiVuedotjs size={iconSize} />,
      name: "Vue",
      level: "Intermediário",
      experience: "0/1 ano"
    },
    {
      icon: <SiVaadin size={iconSize} />,
      name: "Vaadin",
      level: "Intermediário",
      experience: "0/1 ano"
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
      icon: <SiHtml5 size={iconSize} />,
      name: "HTML5",
      level: "Intermediário",
      experience: "2 anos"
    },
    {
      icon: <SiCss3 size={iconSize} />,
      name: "CSS3",
      level: "Intermediário",
      experience: "2 anos"
    },
    {
      icon: <SiBootstrap size={iconSize} />,
      name: "Bootstrap",
      level: "Intermediário",
      experience: "2 anos"
    },
    {
      icon: <SiHandlebarsdotjs size={iconSize} />,
      name: "Handlebars",
      level: "Básico",
      experience: "0/1 ano"
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
      experience: "1/2 anos"
    },
    {
      icon: <img src={typeorm} alt="" style={{ width: '1.5rem', height: '1.5rem' }} />,
      name: "TypeORM",
      level: "Intermediário",
      experience: "1/2 anos"
    },
    {
      icon: <img src={mongoose} alt="" style={{ width: '1.5rem', height: '1.5rem' }} />,
      name: "Mongoose",
      level: "Intermediário",
      experience: "1/2 anos"
    },
    {
      icon: <SiGit size={iconSize} />,
      name: "Git",
      level: "Intermediário",
      experience: "2 anos"
    },
    {
      icon: <SiJson size={iconSize} />,
      name: "Json",
      level: "Intermediário",
      experience: "2 anos"
    },
    {
      icon: <SiJsonwebtokens size={iconSize} />,
      name: "Json Web Tokens",
      level: "Intermediário",
      experience: "2 anos"
    },
    {
      icon: <TbApi size={iconSize} />,
      name: "REST API",
      level: "Intermediário",
      experience: "2 anos"
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
