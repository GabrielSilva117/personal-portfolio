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
  SiJson
} from 'react-icons/si'
import { TbApi } from 'react-icons/tb'
import './tech.css'

const TechContainer = () => {
  const iconSize = '1.5rem'
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
          <tr>
            <th>
              <SiJavascript size={iconSize} />
            </th>
            <th>JavaScript</th>
            <th>Intermediário</th>
            <th>1/2 anos</th>
          </tr>
          <tr>
            <th>
              <SiTypescript size={iconSize} />
            </th>
            <th>TypeScript</th>
            <th>Intermediário</th>
            <th>1/2 anos</th>
          </tr>
          <tr>
            <th>
              <SiReact size={iconSize} />
            </th>
            <th>React</th>
            <th>Intermediário</th>
            <th>0/1 ano</th>
          </tr>
          <tr>
            <th>
              <SiPython size={iconSize} />
            </th>
            <th>Python</th>
            <th>Básico</th>
            <th>0/1 ano</th>
          </tr>
          <tr>
            <th>
              <SiNodedotjs size={iconSize} />
            </th>
            <th>NodeJs</th>
            <th>Intermediário</th>
            <th>1/2 anos</th>
          </tr>
          <tr>
            <th>
              <SiExpress size={iconSize} />
            </th>
            <th>Express</th>
            <th>Intermediário</th>
            <th>1/2 anos</th>
          </tr>
          <tr>
            <th>
              <SiHtml5 size={iconSize} />
            </th>
            <th>HTML5</th>
            <th>Intermediário</th>
            <th>1/2 anos</th>
          </tr>
          <tr>
            <th>
              <SiCss3 size={iconSize} />
            </th>
            <th>CSS3</th>
            <th>Intermediário</th>
            <th>1/2 anos</th>
          </tr>
          <tr>
            <th>
              <SiBootstrap size={iconSize} />
            </th>
            <th>Bootstrap</th>
            <th>Intermediário</th>
            <th>1/2 anos</th>
          </tr>
          <tr>
            <th>
              <SiHandlebarsdotjs size={iconSize} />
            </th>
            <th>Handlebars</th>
            <th>Básico</th>
            <th>0/1 ano</th>
          </tr>
          <tr>
            <th>
              <SiPostgresql size={iconSize} />
            </th>
            <th>PostgreSQL</th>
            <th>Intermediário</th>
            <th>1/2 anos</th>
          </tr>
          <tr>
            <th>
              <SiMysql size={iconSize} />
            </th>
            <th>MySQL</th>
            <th>Básico</th>
            <th>0/1 ano</th>
          </tr>
          <tr>
            <th>
              <SiMongodb size={iconSize} />
            </th>
            <th>MongoDB</th>
            <th>Intermediário</th>
            <th>1/2 anos</th>
          </tr>
          <tr>
            <th>
              <img
                src={typeorm}
                alt=""
                style={{
                  width: '1.5rem',
                  heigth: '1.5rem'
                }}
              />
            </th>
            <th>TypeORM</th>
            <th>Intermediário</th>
            <th>1/2 anos</th>
          </tr>
          <tr>
            <th>
              <img
                src={mongoose}
                alt=""
                style={{
                  width: '1.5rem',
                  heigth: '1.5rem'
                }}
              />
            </th>
            <th>Mongoose</th>
            <th>Intermediário</th>
            <th>1/2 anos</th>
          </tr>
          <tr>
            <th>
              <SiGit size={iconSize} />
            </th>
            <th>Git</th>
            <th>Intermediário</th>
            <th>1/2 anos</th>
          </tr>
          <tr>
            <th>
              <SiJson size={iconSize} />
            </th>
            <th>Json</th>
            <th>Intermediário</th>
            <th>1/2 anos</th>
          </tr>
          <tr>
            <th>
              <SiJsonwebtokens size={iconSize} />
            </th>
            <th>Json Web Tokens</th>
            <th>Intermediário</th>
            <th>0/1 ano</th>
          </tr>
          <tr>
            <th>
              <TbApi size={iconSize} />
            </th>
            <th>REST API</th>
            <th>Intermediário</th>
            <th>1/2 anos</th>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default TechContainer
