import React from 'react';

import './new-element-panel.css';

const NewElementPanel = ({ addItem }) => {
  return (
    <div className="new-element-panel d-flex">
      <input className="new-element-input form-control" />
      <button
        className="btn btn-outline-secondary"
        onClick={() => addItem('Lala')}>Add</button>
    </div>
  );
};

export default NewElementPanel;
