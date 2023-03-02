import React from 'react'
import { SiTypescript } from 'react-icons/si'

const MoneySaver = () => {
  return (
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
        financeira, onde os usuário poderam, salvar e organizar seus gastos
        mensais e notas fiscais, em um ambiente direcionado para a organização.
        Tecnologias utilizadas: TypeScript, Node, Express, TypeORM, PostgreSQL e
        JWT
      </p>
    </div>
  )
}

export default MoneySaver
