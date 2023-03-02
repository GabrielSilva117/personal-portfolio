import { useState } from 'react'
import { BsMoonFill, BsSunFill } from 'react-icons/bs'
import ReactSwitch from 'react-switch'
import './App.css'
import HomePage from './home/HomePage'

function App() {
  const [dark, setDark] = useState('true')

  return (
    <div className="App" id={dark === 'true' ? 'dark' : 'light'}>
      <div className="header-section">
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
