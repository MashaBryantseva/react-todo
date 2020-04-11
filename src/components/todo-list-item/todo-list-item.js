import React from 'react';

import './todo-list-item.css';

const ToDoListItem = (props) => {
  const {
    label,
    important,
    done,
    onDeleted,
    onToggleItemDone,
    onToggleItemImportant,
  } = props;
  const classNames = `todo-list-item ${done && 'done'} ${important && 'important'}`;

  return (
    <span className={classNames}>
      <span
        className="todo-list-item-label"
        onClick={onToggleItemDone}
      >
        {label}
      </span>

      <button
        className="todo-list-item-btn btn btn-outline-success btn-sm float-right"
        onClick={onToggleItemImportant}
      >
        <i className="fa fa-exclamation" />
      </button>

      <button
        className="todo-list-item-btn btn btn-outline-danger btn-sm float-right"
        onClick={onDeleted}
      >
        <i className="fa fa-trash-o" />
      </button>
    </span>
  );
};

export default ToDoListItem;
