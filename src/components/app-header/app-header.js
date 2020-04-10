import React from 'react';

import './app-header.css';

const AppHeader = ({ activeCount, doneCount }) => {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <h1>My ToDo List</h1>
      <p className="app-header-counter">{activeCount} more to do, {doneCount} done</p>
    </div>
  );
};

export default AppHeader;
