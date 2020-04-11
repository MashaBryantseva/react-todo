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
    todoList: [],
    searchValue: '',
    selectedFilter: 'All',
  };

  deleteItem = (id) => {
    this.setState(({ todoList }) => ({
      todoList: todoList.filter(item => item.id !== id),
    }));
  };

  addItem = (label) => {
    this.setState(({ todoList }) => {
      const ids = todoList.map(item => item.id);
      const maxId = ids.length ? Math.max(...ids) : 0;

      return {
        todoList: [
          ...todoList,
          {
            label,
            id: maxId + 1,
            important: false,
          }
        ],
      };
    });

    if (this.state.searchValue) {
      this.onSearch(''); // reset search
    }
  };

  toggleItemProp = (id, propName) => {
    this.setState(({ todoList }) => ({
      todoList: todoList.map(item => ({
        ...item,
        ...(item.id === id && ({
          [propName]: !item[propName],
        }))
      })),
    }));
  };

  onToggleItemDone = (id) => {
    this.toggleItemProp(id, 'done');
  };

  onToggleItemImportant = (id) => {
    this.toggleItemProp(id, 'important');
  };

  onSearch = (text) => {
    this.setState(state => ({ searchValue: text }));
  };

  onFilterSelect = () => {

  };

  filterTodos = (todoList, searchValue) =>
    todoList.filter(item => item.label.includes(searchValue));

  render() {
    const { todoList, searchValue } = this.state;
    const doneCount = todoList.filter(item => item.done).length;
    const activeCount = todoList.length - doneCount;
    const filteredList = this.filterTodos(todoList, searchValue);

    return (
      <div className="todo-app">
        <AppHeader
          activeCount={activeCount}
          doneCount={doneCount}
        />

        <div className="top-panel d-flex justify-content-between align-items-center">
          <SearchPanel
            searchValue={searchValue}
            onSearch={this.onSearch}
          />
          <ItemStatusFilter />
        </div>

        <ToDoList
          todos={filteredList}
          onDeleted={this.deleteItem}
          onToggleItemDone={this.onToggleItemDone}
          onToggleItemImportant={this.onToggleItemImportant}
        />

        <NewElementPanel addItem={this.addItem} />
      </div>
    );
  }
}