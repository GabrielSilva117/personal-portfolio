import React from 'react'
import { SiReact } from 'react-icons/si'

const Freelancer = () => {
  return (
    <div className="proj-container">
      <div className="proj-container-header">
        <div className="proj-title">
          <h1>Freelancer</h1>
          <small>Front End</small>
        </div>
        <div className="proj-icon">
          <SiReact size={'1.5rem'} />
        </div>
      </div>
      <p>
        Área dedicada ao projeto realizado para uma startup de eventos, onde a
        entrega culminou em uma aplicação com um ambiente responsivo e amigável
        para clientes do nicho da mesma. Para o desevolvimento do projeto, foram
        utilizadas as tecnologias: React, Bootstrap.
      </p>
    </div>
  )
}

export default Freelancer
