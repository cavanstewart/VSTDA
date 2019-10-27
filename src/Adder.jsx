import React, { Component } from "react";

class Adder extends Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      description: "",
      priority: "low"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    const value = e.target.value;
    this.setState({
      [e.target.name]: value
    });
  }

  handleClick(e) {
    let newItem = {
      id: this.state.id,
      description: this.state.description,
      priority: this.state.priority
    };

    this.props.handleStateAdd(newItem);
    this.state.id++;
  }
  render() {
    return (
      <div className="card">
        <div className="card-header">Add New Todo</div>
        <div className="card-body">
          <h6>I want to..</h6>
          <textarea
            name="description"
            className="create-todo-text"
            onChange={this.handleChange}
          >
            {this.state.description}
          </textarea>
          <h6>How much of a priority is this?</h6>
          <select
            name="priority"
            onChange={this.handleChange}
            className="browser-default custom-select"
          >
            <option>low</option>
            <option>medium</option>
            <option>high</option>
          </select>
        </div>
        <div className="card-footer">
          <button
            onClick={this.handleClick}
            className="btn btn-default"
          >
            Add
          </button>
        </div>
      </div>
    );
  }
}

export default Adder;
