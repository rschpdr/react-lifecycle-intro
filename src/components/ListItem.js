import React, { useEffect } from "react";

function ListItem(props) {
  // Faz algo toda vez que o componente vai ser removido do DOM
  // Equivalente ao componentWillUnmount
  // A funçāo retornada pela callback do useEffect costuma ser chamada de cleanup function
  useEffect(() => () => console.log("ListItem will be unmounted"));

  return (
    <li>
      <span>{props.children}</span>
      <button name={props.index} onClick={props.handleDeleteClick}>
        Delete
      </button>
    </li>
  );
}

export default ListItem;
