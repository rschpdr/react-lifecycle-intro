import React, { Component } from "react";
import ListItem from "./ListItem";

class List extends Component {
  state = {
    campuses: [],
  };

  componentDidMount() {
    console.log("List is mounted!");
    this.setState({ campuses: [...this.props.campuses] });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("List was updated!");
    console.log(prevProps);
    console.log("prev state => ", prevState);
    if (prevState.campuses !== this.state.campuses) {
    }
  }

  handleClick = () => {
    this.setState((prevState) => ({ campuses: prevState.campuses.sort() }));
  };

  handleDeleteClick = (event) => {
    console.log(event.currentTarget.name);
    const tempArray = [...this.state.campuses];
    tempArray.splice(event.currentTarget.name, 1);

    this.setState({ campuses: [...tempArray] });
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.campuses.map((campus, i) => (
            <ListItem
              handleDeleteClick={this.handleDeleteClick}
              index={i}
              key={i}
            >
              {campus}
            </ListItem>
          ))}
        </ul>
        <button onClick={this.handleClick}>Sort!</button>
      </div>
    );
  }
}

export default List;
