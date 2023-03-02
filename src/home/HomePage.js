import React from 'react'
import AboutMe from './aboutMe/AboutMe'
import Facul from './facul/Facul'
import InfoContainer from './info/InfoContainer'
import ProjsContainer from './projs/ProjsContainer'
import TechContainer from './tech/TechContainer'

const HomePage = () => {
  return (
    <div>
      <section>
        <InfoContainer />
      </section>
      <section className="aboutme-section">
        <AboutMe />
      </section>
      <section>
        <Facul />
      </section>
      <section className="tech-section">
        <TechContainer />
      </section>
      <section>
        <ProjsContainer />
      </section>
    </div>
  )
}

export default HomePage
