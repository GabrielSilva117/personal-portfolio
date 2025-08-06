import React from 'react'
import logo from '../../assets/images/universidade-anhanguera-logo-1.png'
import './facul.css'

const Facul = () => {
  return (
    <div
      className="facul-container"
      data-aos-placement="aboutme-section"
      data-aos-delay="500"
      data-aos="fade-up"
    >
      <div className="subtitle">
        <h4>Formação</h4>
      </div>
      <div className="facul-text">
        <div className="facul-icon">
          <img
            src={logo}
            alt=""
            style={{
              width: '75px',
              height: 'auto'
            }}
          />
        </div>
        <div className="facul-text-row">
          <p>
            {'> '}Engenharia de Software - Anhanguera
          </p>
        </div>
      </div>
    </div>
  )
}

export default Facul
