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
      todoInput: '',
      displayCompleted: true
    }
  }
  onTodoNameInput = (evt) => {
    const { value } = evt.target
    this.setState({
      ...this.state,
      todoInput: value
    })
  }

  toggleDisplayCompleted = (evt) => {
    evt.preventDefault()
    this.setState({ ...this.state, displayCompleted: !this.state.displayCompleted })
  }

  resetForm = () => this.setState({ ...this.state, todoInput: '' })

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
  toggleCompleted = id => () => {
    axios.patch(`${URL}/${id}`)
      .then(res => {
        this.setState({
          ...this.state, todos: this.state.todos.map(tdo => {
            if (tdo.id !== id) return tdo;
            return res.data.data;
          })
        })
      }).catch(err => {
        console.error('err')
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
        <TodoList
          toggleCompleted={this.toggleCompleted}
          todos={this.state.todos}
        />
        {/* <h2>Todos:</h2>
        {
          this.state.todos.map(tdo => {
            return <div onClick={this.toggleCompleted(tdo.id)} key={tdo.id}>{tdo.name}{tdo.completed ? ' ✔' : ''}</div>
          })
        } */}
        <Form
          onTodoFormSubmit={this.onTodoFormSubmit}
          onTodoNameInput={this.onTodoNameInput}
          toggleDisplayCompleted={this.toggleDisplayCompleted}
          addTodo={this.addTodo}
          displayCompleted={this.state.displayCompleted}
        />
      </>
    )
  }
}

