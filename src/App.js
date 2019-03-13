import React, { Component } from 'react';
import ListOfThingsTodo from './components/Todos';
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Start washer',
        completed: false
      },
      {
        id: 2,
        title: 'Wash dishes',
        completed: false
      },
      {
        id: 3,
        title: 'Walk Snooky',
        completed: false
      }
    ]
  }
  render() {
    // console.log(this.state.todos)
    return (
      <div className="App">
        <ListOfThingsTodo items={this.state.todos} toggleItem={
          (item) => {
            const newState = this.state.todos.map((todoItem) => {
              if (todoItem.id === item.id) {
                return {
                  ...item,
                  completed:!item.completed
                }
              }else {
                return todoItem
              }
            })
            this.setState({todos:newState})
          }
        } />
      </div>
    );
  }
}

export default App;
