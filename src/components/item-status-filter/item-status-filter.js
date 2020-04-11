import React, { Component } from 'react';

const ItemStatusFilter = ({ selectedFilter, onFilter }) => {
  const buttons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'done', label: 'Done' },
  ];

  return (
    <div className="btn-group">
      {
        buttons.map(({ name, label }) => (
          <button
            key={name}
            className={`btn ${ selectedFilter === name ? 'btn-info' : 'btn-outline-secondary' }`}
            onClick={() => onFilter(name)}
          >
            { label }
          </button>
        ))
      }
    </div>
  );
};

export default ItemStatusFilter;
