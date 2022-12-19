import React from 'react'

export default class TodoList extends React.Component {
  render() {
    return (
      <div id='todo-list'>
        <h2>Todos:</h2>
        {
          this.props.todos.map(tdo => {
            return <div onClick={this.props.toggleCompleted(tdo.id)} key={tdo.id}>{tdo.name}{tdo.completed ? ' ✔' : ''}</div>
          })
        }
      </div>)
  }
}