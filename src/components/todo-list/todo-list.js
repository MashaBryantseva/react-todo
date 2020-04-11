import React from 'react';

import ToDoListItem from '../todo-list-item';
import './todo-list.css';

const ToDoList = ({todos, onDeleted, onToggleItemDone, onToggleItemImportant }) => {
  return (
    <ul className="todo-list list-group">
      {
        todos.map(({ id, ...data }) => (
          <li className="todo-list-element list-group-item" key={id}>
            <ToDoListItem
              { ...data }
              onDeleted={() => onDeleted(id)}
              onToggleItemDone={() => onToggleItemDone(id)}
              onToggleItemImportant={() => onToggleItemImportant(id)}
            />
          </li>
        ))
      }
    </ul>
  );
};

export default ToDoList;
