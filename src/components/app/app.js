import React from 'react';

// Components
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ToDoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';

// Style
import './app.css';

const App = () => {
  const toDoData = [
    {
      label: 'Drink coffee',
      important: false,
      id: 1,
    },
    {
      label: 'Make awesome app',
      important: true,
      id: 2,
    },
    {
      label: 'Have a lunch',
      important: false,
      id: 3,
    },
  ];

  return (
    <div className="todo-app">
      <AppHeader activeCount={3} doneCount={0} />
      <div className="top-panel d-flex justify-content-between align-items-center">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <ToDoList todos={toDoData}  />
    </div>
  );
};

export default App;