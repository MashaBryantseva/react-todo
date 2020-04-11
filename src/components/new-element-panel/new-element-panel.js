import React, { Component } from 'react';

import './new-element-panel.css';

export default class NewElementPanel extends Component {
  state = {
    label: ''
  };

  onLabelChange = (event) => {
    this.setState({
      label: event.target.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();

    this.props.addItem(this.state.label);
    this.setState({
      label: '',
    });
  };

  render() {
    const { label } = this.state;

    return (
      <form
        className="new-element-panel d-flex"
        onSubmit={this.onSubmit}
      >
        <input
          className="new-element-input form-control"
          onChange={this.onLabelChange}
          value={label}
          placeholder="Type new task name here"
        />
        <button className="btn btn-outline-secondary">Add</button>
      </form>
    );
  }
}
