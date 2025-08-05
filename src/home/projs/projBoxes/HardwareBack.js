import React from 'react'
import {SiJava, SiJavascript} from 'react-icons/si'

const BlogApp = () => {
  return (
    <div className="proj-container">
      <div className="proj-container-header">
        <div className="proj-title">
          <a
            href="https://github.com/GabrielSilva117/hardware-today-back"
            className="link-option"
          >
            <h1>Hardware Today</h1>
          </a>
          <small>Back End</small>
        </div>
        <div className="proj-icon">
          <SiJava size={'1.5rem'} />
        </div>
      </div>
      <p>
          Hardware_today é um e-commerce voltado para o público tech
          e gamer, focado na venda de hardware e periféricos. No projeto,
          estou responsável pela implementação das regras de negócio e da
          infraestrutura de comunicação entre serviços, utilizando tecnologias
          como Spring Boot, Spring Cloud, Spring Security, Hibernate e Java.
          Também integro o sistema com RabbitMQ para mensageria, Keycloak para
          autenticação e autorização, Docker para conteinerização e AWS S3 para
          o armazenamento de arquivos.
      </p>
    </div>
  )
}

export default BlogApp
