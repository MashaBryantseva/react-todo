import React from 'react';

import ToDoListItem from '../todo-list-item';
import './todo-list.css';

const ToDoList = ({ todos }) => {
  return (
    <ul className="todo-list list-group">
      {
        todos.map(({ id, ...data }) => (
          <li className="todo-list-element list-group-item" key={id}>
            <ToDoListItem { ...data } />
          </li>
        ))
      }
    </ul>
  );
};

export default ToDoList;
