import React, { Component } from "react";

class ListItem extends Component {
  // Este método é executado automaticamente toda vez que o componente vai "sumir" da tela, ou seja, quando é removido do DOM
  componentWillUnmount() {
    console.log("ListItem will unmount");
  }

  render() {
    return (
      <li>
        <span>{this.props.children}</span>
        <button name={this.props.index} onClick={this.props.handleDeleteClick}>
          Delete
        </button>
      </li>
    );
  }
}

export default ListItem;
