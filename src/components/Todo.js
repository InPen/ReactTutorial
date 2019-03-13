import React, { Component } from 'react';

class Todo extends Component {
  render() {
    return <li>
    <input type='checkbox' onChange= {this.props.handleChange} checked= {this.props.completed} />
    {this.props.title}
    </li>
  }
}

export default Todo;
