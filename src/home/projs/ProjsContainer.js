import React from 'react'
import { SiJavascript, SiReact, SiTypescript } from 'react-icons/si'
import APIs from './projBoxes/APIs'
import BlogApp from './projBoxes/HardwareBack'
import Freelancer from './projBoxes/Freelancer'
import MoneySaver from './projBoxes/MoneySaver'
import TechOver from './projBoxes/TechOver'
import TodoList from './projBoxes/HardwareFront'
import './projs.css'
import ProjsSm from './ProjsSm'
import HardwareBack from "./projBoxes/HardwareBack";
import HardwareFront from "./projBoxes/HardwareFront";

const ProjsContainer = () => {
  return (
    <div
      className="projs-container"
      data-aos="fade-up"
      data-aos-placement="tech-section"
    >
      <div className="subtitle">
        <h4>Projetos</h4>
      </div>
      <div className="projs-row">
        <div className="row-1">
          <TechOver />
          <Freelancer />
        </div>
        <div className="row-1">
          <HardwareBack />
          <HardwareFront />
        </div>
        <div className="row-1">
          <MoneySaver />
          <APIs />
        </div>
      </div>
      <div className="projs-sm-row">
        <ProjsSm />
      </div>
    </div>
  )
}

export default ProjsContainer
