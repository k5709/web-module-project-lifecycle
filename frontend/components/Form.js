import React from 'react'

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      input: ''
    }
  }

  handleAdd = (e) => {
    e.preventDefault()
    this.setState({
      ...this.state,
      input: e.target.value
    })
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      input: e.target.value
    })
  }

  render() {
    return (
      <form>
        <input placeholder="-todos" onChange={this.handleChange} />
        <button onClick={this.handleAdd}>Add Todo</button>
        <button>Clear Todo</button>
      </form>
    )
  }
}
