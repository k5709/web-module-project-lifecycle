import React from 'react'

export default class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.onTodoFormSubmit}>

        <input
          value={this.props.todoInput}
          type='text'
          placeholder='type todo'
          onChange={this.props.onTodoNameInput} ></input>

        <button onClick={this.props.addTodo}>Add Todo</button>
        <button onClick={this.props.toggleDisplayCompleted}>{this.props.displayCompleted ? 'Hide' : 'Show'}</button>
      </form>)
  }
}