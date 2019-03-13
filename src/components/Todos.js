import React, { Component } from 'react';
import Todo from './Todo'
class ListOfThingsTodo extends Component {
  render() {
    return (
      <div>
        <h1>To Do</h1>
        <ul>
          {this.props.items.map((todo) => {
            return <Todo
              key={todo.id}
              title={todo.title}
              handleChange={() => {
                this.props.toggleItem(todo)
              }}
              completed= {todo.completed}
            />
          })}
        </ul>
      </div>
    );
  }
}

export default ListOfThingsTodo;
