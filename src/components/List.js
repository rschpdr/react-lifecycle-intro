import React, { Component } from "react";
import ListItem from "./ListItem";

class List extends Component {
  state = {
    campuses: [],
  };

  // Todos os lifecycle methods são herdados da classe Component que estamos extendendo, portando só podem ser usados em componentes de classe

  // Este método é executado automaticamente quando o componente termina de ser renderizado pela primeira vez no navegador
  componentDidMount() {
    console.log("List is mounted!");
    this.setState({ campuses: [...this.props.campuses] });
  }

  // Este método é executado automaticamente toda vez que ocorre uma re-renderizaçāo, ou seja, em cada alteraçāo no state ou nas props.
  componentDidUpdate(prevProps, prevState) {
    console.log("List was updated!");
    console.log(prevProps);
    console.log("prev state => ", prevState);
    if (prevState.campuses !== this.state.campuses) {
    }
  }

  // Ordena alfabeticamente a lista de campus quando o usuário clicar no botão "Sort!"
  handleClick = () => {
    this.setState((prevState) => ({ campuses: prevState.campuses.sort() }));
  };

  // Deleta o campus da lista
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
