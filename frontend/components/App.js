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
  onTodoNameInput = () => {
    const { value } = evt.target
    this.setState({
      ...this.state,
      todoInput: value
    })
  }

  addTodo = () => {
    axios.post(URL, { name: this.state.todoInput })
  }

  fetchTodos = () => {
    axios.get(URL)
      .then(res => {
        this.setState({ ...this.state, todos: res.data.data })
      })
      .catch(err => {
        debugger
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
        <Form />
        {/* <form>
          <input />
          <button>Add Todo</button>
          <button>Clear Todo</button>
        </form> */}
      </>
    )
  }
}

