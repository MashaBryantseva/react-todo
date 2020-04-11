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
    selectedFilter: 'all',
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

    // reset search
    if (this.state.searchValue) {
      this.onSearch('');
    }

    // reset filter
    if (this.state.selectedFilter !== 'all') {
      this.onFilter('all');
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
    this.setState({ searchValue: text });
  };

  onFilter = (selectedFilter) => {
    this.setState({ selectedFilter });
  };

  filterTodos = (todoList, searchValue, selectedFilter) => {
    const filteredBySearchValue =
      todoList.filter(item => item.label.toLowerCase().includes(searchValue.toLowerCase()));

    switch (selectedFilter) {
      case 'active':
        return filteredBySearchValue.filter(item => !item.done);
        break;
      case 'done':
        return filteredBySearchValue.filter(item => item.done);
        break;
      default:
        return filteredBySearchValue;
    }
  };

  render() {
    const { todoList, searchValue, selectedFilter } = this.state;
    const doneCount = todoList.filter(item => item.done).length;
    const activeCount = todoList.length - doneCount;
    const filteredList = this.filterTodos(todoList, searchValue, selectedFilter);

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
          <ItemStatusFilter
            selectedFilter={selectedFilter}
            onFilter={this.onFilter}
          />
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