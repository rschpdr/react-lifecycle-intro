import React, { Component } from "react";

class ListItem extends Component {
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
