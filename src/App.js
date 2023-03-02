import AOS from 'aos'
import { useState } from 'react'
import { BsMoonFill, BsSunFill } from 'react-icons/bs'
import ReactSwitch from 'react-switch'
import './App.css'
import HomePage from './home/HomePage'

function App() {
  AOS.init({
    once: true
  })

  const [dark, setDark] = useState('true')

  return (
    <div className="App" id={dark === 'true' ? 'dark' : 'light'}>
      <div className="header-section" data-aos="fade-down">
        <div>
          <BsSunFill />
        </div>
        <ReactSwitch
          onChange={() => setDark(dark === 'true' ? 'false' : 'true')}
          checked={dark === 'true' ? true : false}
        />
        <div>
          <BsMoonFill />
        </div>
      </div>
      <HomePage />
    </div>
  )
}

export default App
