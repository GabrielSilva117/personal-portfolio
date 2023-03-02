import React from 'react'
import { SiJavascript } from 'react-icons/si'

const BlogApp = () => {
  return (
    <div className="proj-container">
      <div className="proj-container-header">
        <div className="proj-title">
          <a
            href="https://github.com/GabrielSilva117/blog-prod"
            className="link-option"
          >
            <h1>BlogApp</h1>
          </a>
          <small>Full Stack</small>
        </div>
        <div className="proj-icon">
          <SiJavascript size={'1.5rem'} />
        </div>
      </div>
      <p>
        Projeto desenvolvido em um curso de Node, onde o mesmo resulta em um
        Blog que provem aos usuário um ambiente responsivo para leitura,
        criação, deleção e edição de postagens e categorias. Para o
        desenvolvimento do mesmo, foi utilizado: JavaScript, Node, Express,
        MongoDB, Mongoose, Handlebars, Bootstrap, HTML e CSS
      </p>
    </div>
  )
}

export default BlogApp
