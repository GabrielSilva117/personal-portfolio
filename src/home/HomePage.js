import React from 'react'
import './header/header.css'
import HeaderBar from './header/HeaderBar'
import InfoContainer from './info/InfoContainer'
const HomePage = () => {
  return (
    <div>
      <section className="header-section">
        <HeaderBar />
      </section>
      <section>
        <InfoContainer />
      </section>
    </div>
  )
}

export default HomePage
