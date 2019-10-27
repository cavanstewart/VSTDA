import React, { Component } from "react";
import Editor from "./Editor";

class Lister extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header">View Todos</div>
        <div className="card-body">
          {this.props.list.map((item, index) => (
            <Editor
              key={index}
              description={item.description}
              priority={item.priority}
              id={item.id}
              handleStateDelete={this.props.handleStateDelete}
              handleStateEdit={this.props.handleStateEdit}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Lister;
