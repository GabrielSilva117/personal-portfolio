import React from 'react'
import { SiTypescript } from 'react-icons/si'

const APIs = () => {
  return (
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
        tecnologias de: TypeORM, Mongoose, PostgreSQL, MySQL, MongoDB, Node,
        Express, JavaScript, TypeScript, JWT, etc.
      </p>
    </div>
  )
}

export default APIs
