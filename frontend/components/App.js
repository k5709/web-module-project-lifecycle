import React from 'react'
import axios from 'axios'

import Form from './Form'
import TodoList from './TodoList'

const URL = 'http://localhost:9000/api/todos'


export default class App extends React.Component {
  constructor() {
    console.log("constructor ran")
    super();
    this.state = {
      todos: [],
      todoInput: ''
    }
  }
  onTodoNameInput = (evt) => {
    const { value } = evt.target
    this.setState({
      ...this.state,
      todoInput: value
    })
  }

  addTodo = () => {
    axios.post(URL, { name: this.state.todoInput }).then(res => {
      debugger
    })
      .catch(err => {
        debugger
      })
  }

  onTodoFormSubmit = (evt) => {
    evt.preventDefault
    this.newTodo()
  }

  fetchTodos = () => {
    axios.get(URL)
      .then(res => {
        this.setState({ ...this.state, todos: res.data.data })
      })
      .catch(err => {
        this.setState({ ...this.state, error: err.response.data.message })
      })
  }
  componentDidMount() {
    console.log("CDM");
    this.fetchTodos()
  }
  render() {
    console.log("render ran")
    return (
      <>
        <h2>Todos:</h2>
        {
          this.state.todos.map(tdo => {
            return <div key={tdo.id}>{tdo.name}</div>
          })
        }
        {/* <Form onSubmit={this.onTodoFormSubmit} /> */}
        <form>
          <input
            value={this.state.todoInput}
            type='text'
            placeholder='type todo'
            onChange={this.onTodoNameInput} ></input>
          <button onClick={this.addTodo}>Add Todo</button>
          <button>Clear Todo</button>
        </form>
      </>
    )
  }
}

