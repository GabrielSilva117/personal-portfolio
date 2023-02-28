import React from 'react'
import AboutMe from './aboutMe/AboutMe'
import './header/header.css'
import HeaderBar from './header/HeaderBar'
import InfoContainer from './info/InfoContainer'
import TechContainer from './tech/TechContainer'

const HomePage = () => {
  return (
    <div>
      <section className="header-section">
        <HeaderBar />
      </section>
      <section>
        <InfoContainer />
      </section>
      <section className="aboutme-section">
        <AboutMe />
      </section>
      <section className="tech-section">
        <TechContainer />
      </section>
    </div>
  )
}

export default HomePage
