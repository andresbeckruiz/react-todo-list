import React, { Component } from 'react';
import {v4 as uuidv4} from 'uuid';
import TodoInput from './components/TodoInput';
import Orange from './components/TodoList';

uuidv4();
export default class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <TodoInput></TodoInput>
            <Orange></Orange>
          </div>
        </div>
      </div>
    )
  }
}

