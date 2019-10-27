import React, { Component } from "react";

const priorityColors = {
  high: "alert-danger",
  medium: "alert-warning",
  low: "alert-success"
};

class Editor extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      description: "",
      priority: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
      this.setState({
          description: this.props.description,
          priority: this.props.priority,
      })
  }

  handleChange(e) {
    const value = e.target.value;
    this.setState({
      [e.target.name]: value
    });
  }

  handleClick(e) {
      let editItem = {
          id: this.props.id,
          description: this.state.description,
          priority: this.state.priority
      };

      this.props.handleStateEdit(editItem);
      this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  }

  render() {
    return (
      <div className={`alert ${priorityColors[this.state.priority]}`}>
        {this.state.isOpen ? (
          <div>
            <h6>Description</h6>
            <textarea
              onChange={this.handleChange}
              name="description"
            >{this.state.description}</textarea>
            <h6>Priority</h6>
            <select
              onChange={this.handleChange}
              name="priority"
              defaultValue={this.state.priority}
              className="browser-default custom-select"
            >
              <option>low</option>
              <option>medium</option>
              <option>high</option>
            </select>
            <button onClick={this.handleClick} className="btn btn-success">
              Submit
            </button>
          </div>
        ) : (
          <text>{this.state.description}</text>
        )}

        <div className="icon-buttons">
          <i
            onClick={() =>
              this.setState(prevState => ({ isOpen: !prevState.isOpen }))
            }
            className="fa fa-pencil-square-o"
          ></i>
          <i
            onClick={() => this.props.handleStateDelete(this.props.id)}
            className="fa fa-trash-o"
          ></i>
        </div>
      </div>
    );
  }
}

export default Editor;
