import React from 'react'
import { SiReact } from 'react-icons/si'

const TodoList = () => {
  return (
    <div className="proj-container">
      <div className="proj-container-header">
        <div className="proj-title">
          <a
            href="https://github.com/GabrielSilva117/todo_list"
            className="link-option"
          >
            <h1>Todo List</h1>
          </a>
          <small>Front End</small>
        </div>
        <div className="proj-icon">
          <SiReact size={'1.5rem'} />
        </div>
      </div>
      <p>
        O projeto consiste em uma lista de afazeres, onde o usuário consegue
        realizar ações CRUD para manipular suas "tarefas" e filtrar as mesma,
        para obter apenas as que estão a fazer ou feitas. O projeto foi
        iteiramente desenvolvido utilizando React.
      </p>
    </div>
  )
}

export default TodoList
