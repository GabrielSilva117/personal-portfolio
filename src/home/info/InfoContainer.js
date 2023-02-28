import React from 'react'
import pic from '../../assets/images/92172232.jpeg'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { SiGmail } from 'react-icons/si'
import './info.css'

const InfoContainer = () => {
  return (
    <div className="info-section">
      <div className="info-profile-img">
        <figure>
          <img src={pic} alt="" className="prof-pic" />
        </figure>
      </div>
      <div className="info-text">
        <h1>Gabriel Ferreira Silva</h1>
        <h2>{'>'} Desenvolvedor FullStack </h2>
      </div>
      <div className="info-skills">
        <div className="info-skill-box">
          <BsGithub />
          <a href="https://github.com/GabrielSilva117">GabrielSilva117</a>
        </div>
        <div className="info-skill-box">
          <BsLinkedin />
          <a href="https://www.linkedin.com/in/gabriel-ferreira-554842217/">
            Gabriel Ferreira
          </a>
        </div>
        <div className="info-skill-box">
          <SiGmail />
          <a href="gabriel.f.silva117@gmail.com">
            gabriel.f.silva117@gmail.com
          </a>
        </div>
      </div>
    </div>
  )
}

export default InfoContainer
