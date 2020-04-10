import React from 'react';
import ReactDOM from 'react-dom';

// Components
import AppHeader from './components/header';
import SearchPanel from './components/search-panel';
import ToDoList from './components/todo-list';

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
    <div>
      <AppHeader />
      <SearchPanel />
      <ToDoList todos={toDoData}  />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));