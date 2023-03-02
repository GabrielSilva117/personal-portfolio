import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import APIs from './projBoxes/APIs'
import BlogApp from './projBoxes/BlogApp'
import Evengration from './projBoxes/Freelancer'
import MoneySaver from './projBoxes/MoneySaver'
import TechOver from './projBoxes/TechOver'
import TodoList from './projBoxes/TodoList'

const ProjsSm = () => {
  return (
    <Carousel
      className="proj-slide"
      prevLabel=""
      nextLabel=""
      indicators={false}
    >
      <Carousel.Item className="proj-slid-page">
        <div className="row-1">
          <TechOver />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="row-1">
          <BlogApp />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="row-1">
          <Evengration />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="row-1">
          <TodoList />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="row-1">
          <MoneySaver />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="row-1">
          <APIs />
        </div>
      </Carousel.Item>
    </Carousel>
  )
}

export default ProjsSm
