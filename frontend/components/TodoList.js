import React from 'react'

export default class TodoList extends React.Component {
  render() {
    return (
      <li>
        {
          this.state.todos.map(tdo => {
            return <div key={tdo.id}>{tdo.name}</div>
          })
        }
      </li>
    )
  }
}
