import React from 'react'
import { SiJavascript, SiReact, SiTypescript } from 'react-icons/si'
import './projs.css'

const ProjsContainer = () => {
  return (
    <div
      className="projs-container"
      data-aos="fade-up"
      data-aos-placement="tech-section"
    >
      <div className="subtitle" style={{ width: '1200px' }}>
        <h4>Projetos</h4>
      </div>
      <div className="projs-row">
        <div className="row-1">
          <div className="proj-container">
            <div className="proj-container-header">
              <div className="proj-title">
                <a
                  href="https://github.com/GabrielSilva117/tech-overview-server"
                  className="link-option"
                >
                  <h1>Tech Overview</h1>
                </a>
                <small>Full Stack</small>
              </div>
              <div className="proj-icon">
                <SiReact size={'1.5rem'} />
              </div>
            </div>
            <p>
              O projeto consiste em um blog MERN com tema geek, onde usuários
              possuem funcionalidades CRUD para manipular postagens, além de
              poder interagir com outros usuários através de discussões em
              outros posts. Para o desenvolvimento do projeto, as seguintes
              tecnologias foram utilizadas: MongoDB, Express, React, Node,
              Mongoose e Bootstrap.
            </p>
          </div>
          <div className="proj-container">
            <div className="proj-container-header">
              <div className="proj-title">
                <a
                  href="https://github.com/GabrielSilva117/blog-prod"
                  className="link-option"
                >
                  <h1>BlogApp</h1>
                </a>
                <small>Full Stack</small>
              </div>
              <div className="proj-icon">
                <SiJavascript size={'1.5rem'} />
              </div>
            </div>
            <p>
              Projeto desenvolvido em um curso de Node, onde o mesmo resulta em
              um Blog que provem aos usuário um ambiente responsivo para
              leitura, criação, deleção e edição de postagens e categorias. Para
              o desenvolvimento do mesmo, foi utilizado: JavaScript, Node,
              Express, MongoDB, Mongoose, Handlebars, Bootstrap, HTML e CSS
            </p>
          </div>
        </div>
        <div className="row-1">
          <div className="proj-container">
            <div className="proj-container-header">
              <div className="proj-title">
                <h1>Evengration</h1>
                <small>Front End</small>
              </div>
              <div className="proj-icon">
                <SiReact size={'1.5rem'} />
              </div>
            </div>
            <p>
              Projeto realizado para uma empresa de eventos, onde a entrega
              culminou em aplicação com um ambiente responsivo e amigável para
              clientes do nicho da mesma. Para o desevolvimento do projeto,
              foram utilizadas as tecnologias: React, Bootstrap.
            </p>
          </div>
          <div className="proj-container">
            <div className="proj-container-header">
              <div className="proj-title">
                <a
                  href="https://github.com/GabrielSilva117/todo_list"
                  className="link-option"
                >
                  <h1>Todo List</h1>
                </a>
                <small>Front End</small>
              </div>
              <div className="proj-icon">
                <SiReact size={'1.5rem'} />
              </div>
            </div>
            <p>
              O projeto consiste em uma lista de afazeres, onde o usuário
              consegue realizar ações CRUD para manipular suas "tarefas" e
              filtrar as mesma, para obter apenas as que estão a fazer ou
              feitas. O projeto foi iteiramente desenvolvido utilizando React.
            </p>
          </div>
        </div>
        <div className="row-1">
          <div className="proj-container">
            <div className="proj-container-header">
              <div className="proj-title">
                <a
                  href="https://github.com/GabrielSilva117/money_saver_server"
                  className="link-option"
                >
                  <h1>Money Saver</h1>
                </a>
                <small>Back End</small>
              </div>
              <div className="proj-icon">
                <SiTypescript size={'1.5rem'} />
              </div>
            </div>
            <p>
              O projeto consiste em um REST API para uma aplicação de gestão
              financeira, onde os usuário poderam, salvar e organizar seus
              gastos mensais e notas fiscais, em um ambiente direcionado para a
              organização. Tecnologias utilizadas: TypeScript, Node, Express,
              TypeORM, PostgreSQL e JWT
            </p>
          </div>
          <div className="proj-container">
            <div className="proj-container-header">
              <div className="proj-title">
                <h1>APIs</h1>
                <small>Back End</small>
              </div>
              <div className="proj-icon">
                <SiTypescript size={'1.5rem'} />
              </div>
            </div>
            <p>
              Área reservada para os diversos APIs menores e mais simples que
              desenvolvi durante minha curva de aprendizado, onde exercitei as
              tecnologias de: TypeORM, Mongoose, PostgreSQL, MySQL, MongoDB,
              Node, Express, JavaScript, TypeScript, JWT, etc.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjsContainer
