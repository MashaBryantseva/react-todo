import React from 'react';

// Components
import ToDoListItem from './todo-list-item';

const ToDoList = ({ todos }) => {
  return (
    <ul>
      {
        todos.map(({ id, ...data }) => (
          <li key={id}>
            <ToDoListItem { ...data } />
          </li>
        ))
      }
    </ul>
  );
};

export default ToDoList;