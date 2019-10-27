import React, { Component } from "react";
import Adder from "./Adder";
import Lister from "./Lister";

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: []
    };

    this.handleStateAdd = this.handleStateAdd.bind(this);
    this.handleStateDelete = this.handleStateDelete.bind(this);
    this.handleStateEdit = this.handleStateEdit.bind(this);
  }

  handleStateAdd(value) {
    let list = this.state.items;
    list.push(value);
    this.setState({ items: list });
  }

  handleStateDelete(itemId) {
    let list = this.state.items.filter(item => item.id !== itemId);
    this.setState({ items: list });
  }

  handleStateEdit(item) {
    for (let i = 0; i < this.state.items.length; i++) {
      if (this.state.items[i].id == item.id) {
        this.state.items[i] = item;
      }
    }
  }

  render() {
    return (
      <div className="container">
        <div className="main-title">
          <h4>Very Simple Todo App</h4>
          <h6>Track all of the things</h6>
        </div>
        <div className="row">
          <div className="col-4">
            <Adder handleStateAdd={this.handleStateAdd} />
          </div>
          <div className="col-8">
            <Lister
              list={this.state.items}
              handleStateDelete={this.handleStateDelete}
              handleStateEdit={this.handleStateEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
