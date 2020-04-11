import React, { Component } from 'react';

// Components
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ToDoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import NewElementPanel from '../new-element-panel';

// Style
import './app.css';

export default class App extends Component {
  state = {
    toDoData: [
      {
        id: 1,
        label: 'Drink coffee',
        important: false,
        done: false,
      },
      {
        id: 2,
        label: 'Make awesome app',
        important: false,
        done: false,
      },
      {
        id: 3,
        label: 'Have a lunch',
        important: false,
        done: false,
      },
    ],
  };

  deleteItem = (id) => {
    this.setState(({ toDoData }) => ({
      toDoData: toDoData.filter(item => item.id !== id),
    }));
  };

  addItem = (label) => {
    this.setState(({ toDoData }) => {
      const ids = toDoData.map(item => item.id);
      const maxId = ids.length ? Math.max(...ids) : 1;

      return {
        toDoData: [
          ...toDoData,
          {
            label,
            id: maxId + 1,
            important: false,
          }
        ],
      };
    });
  };

  onToggleItemDone = (id) => {
    this.setState(({ toDoData }) => ({
      toDoData: toDoData.map(item => ({
        ...item,
        ...(item.id === id && ({
          done: !item.done,
        }))
      })),
    }));
  };

  onToggleItemImportant = (id) => {
    this.setState(({ toDoData }) => ({
      toDoData: toDoData.map(item => ({
        ...item,
        ...(item.id === id && ({
          important: !item.important,
        }))
      }))
    }));
  };

  render() {
    const { toDoData } = this.state;
    const doneCount = toDoData.filter(item => item.done).length;
    const activeCount = toDoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader activeCount={activeCount} doneCount={doneCount} />
        <div className="top-panel d-flex justify-content-between align-items-center">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <ToDoList
          todos={toDoData}
          onDeleted={this.deleteItem}
          onToggleItemDone={this.onToggleItemDone}
          onToggleItemImportant={this.onToggleItemImportant}
        />
        <NewElementPanel addItem={this.addItem} />
      </div>
    );
  }
}