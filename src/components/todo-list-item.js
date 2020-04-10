import React from 'react';

const ToDoListItem = ({ label, important = false }) => {
  const itemStyle = {
    color: important ? 'tomato' : 'black',
  };

  return <span style={itemStyle}>{ label }</span>;
};

export default ToDoListItem;