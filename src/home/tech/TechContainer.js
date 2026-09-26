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

const getYearsSince = (sinceDate) => {
  const startDate = new Date(sinceDate);
  const curDate = new Date();

  let years = curDate.getFullYear() - startDate.getFullYear();

  const monthDiff = curDate.getMonth() - startDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && curDate.getDate() < startDate.getDate())) {
    years--;
  }

  return Math.max(years, 0);
}

const formatExperience = (sinceDate, approx = false) => {
  const years = getYearsSince(sinceDate);
  const label = years === 1 ? 'ano' : 'anos';

  return `${years} ${label}`;
}

const TechContainer = () => {
  const iconSize = '1.5rem'

  const skills = [
    {
      icon: <SiJavascript size={iconSize} />,
      name: "JavaScript",
      level: "Intermediário",
      since: "2023-09-26"
    },
    {
      icon: <SiTypescript size={iconSize} />,
      name: "TypeScript",
      level: "Intermediário",
      since: "2024-09-26"
    },
    {
      icon: <DiJava size={iconSize} />,
      name: "Java",
      level: "Intermediário",
      since: "2024-09-26"
    },
    {
      icon: <DiPhp size={iconSize} />,
      name: "PHP",
      level: "Intermediário",
      since: "2025-09-26"
    },
    {
      icon: <SiPython size={iconSize} />,
      name: "Python",
      level: "Básico",
      since: "2025-09-26",
      approx: true
    },
    {
      icon: <SiReact size={iconSize} />,
      name: "React",
      level: "Intermediário",
      since: "2025-09-26",
      approx: true
    },
    {
      icon: <SiAngular size={iconSize} />,
      name: "Angular",
      level: "Intermediário",
      since: "2024-09-26"
    },
    {
      icon: <SiVuedotjs size={iconSize} />,
      name: "Vue",
      level: "Intermediário",
      since: "2025-09-26"
    },
    {
      icon: <SiNodedotjs size={iconSize} />,
      name: "NodeJs",
      level: "Intermediário",
      since: "2024-09-26"
    },
    {
      icon: <SiExpress size={iconSize} />,
      name: "Express",
      level: "Intermediário",
      since: "2024-09-26"
    },
    {
      icon: <SiPostgresql size={iconSize} />,
      name: "PostgreSQL",
      level: "Intermediário",
      since: "2024-09-26"
    },
    {
      icon: <SiMysql size={iconSize} />,
      name: "MySQL",
      level: "Intermediário",
      since: "2024-09-26"
    },
    {
      icon: <SiMongodb size={iconSize} />,
      name: "MongoDB",
      level: "Intermediário",
      since: "2024-09-26",
      approx: true
    },
    {
      icon: <img src={typeorm} alt="" style={{ width: '1.5rem', height: '1.5rem' }} />,
      name: "TypeORM",
      level: "Intermediário",
      since: "2024-09-26",
      approx: true
    },
    {
      icon: <img src={mongoose} alt="" style={{ width: '1.5rem', height: '1.5rem' }} />,
      name: "Mongoose",
      level: "Intermediário",
      since: "2024-09-26",
      approx: true
    },
    {
      icon: <SiGit size={iconSize} />,
      name: "Git",
      level: "Intermediário",
      since: "2023-09-26"
    },
    {
      icon: <SiJsonwebtokens size={iconSize} />,
      name: "Json Web Tokens",
      level: "Intermediário",
      since: "2024-09-26"
    },
    {
      icon: <SiSpringboot size={iconSize} />,
      name: "Spring Boot",
      level: "Intermediário",
      since: "2024-09-26"
    },
      {
          icon: <SiSpringsecurity size={iconSize} />,
          name: "Spring Security",
          level: "Intermediário",
          since: "2025-09-26",
          approx: true
      },
    {
      icon: <SiHibernate size={iconSize} />,
      name: "Hibernate",
      level: "Intermediário",
      since: "2024-09-26"
    },
      {
          icon: <SiRabbitmq size={iconSize} />,
          name: "RabbitMQ",
          level: "Intermediário",
          since: "2025-09-26",
          approx: true
      },
      {
          icon: <TbDevicesPc size={iconSize} />,
          name: "Microserviços",
          level: "Intermediário",
          since: "2025-09-26",
          approx: true
      },
      {
          icon: <SiDocker size={iconSize} />,
          name: "Docker",
          level: "Intermediário",
          since: "2025-09-26",
          approx: true
      },
      {
          icon: <DiAws size={iconSize} />,
          name: "AWS",
          level: "Intermediário",
          since: "2025-09-26",
          approx: true
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
                <th>{formatExperience(skill.since, skill.approx)}</th>
              </tr>
          ))
        }

        </tbody>
      </Table>
    </div>
  )
}

export default TechContainer
