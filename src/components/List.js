import React, { useState, useEffect } from "react";
import ListItem from "./ListItem";

function List(props) {
  const [campuses, setCampuses] = useState([]);

  // Faz algo assim que o componente é renderizado
  // Equivalente ao componentDidMount
  useEffect(() => {
    setCampuses([...props.campuses]);
    console.log("List was mounted!");
  }, [props.campuses]);

  // Faz algo toda vez que o state for alterado
  // Equivalente ao componentDidUpdate
  useEffect(() => {
    console.log("List was updated!");
    console.log(campuses);
  }, [campuses]);

  // Faz algo toda vez que as props forem alteradas
  // Equivalente ao componentDidUpdate
  useEffect(() => {
    console.log("List had its props updated!");
  }, [props]);

  const handleClick = () => {
    setCampuses((prevState) => [...prevState.sort()]);
  };

  const handleDeleteClick = (event) => {
    const tempArray = [...campuses];
    tempArray.splice(event.currentTarget.name, 1);

    setCampuses([...tempArray]);
  };

  return (
    <div>
      <ul>
        {campuses.map((campus, i) => (
          <ListItem handleDeleteClick={handleDeleteClick} index={i} key={i}>
            {campus}
          </ListItem>
        ))}
      </ul>
      <button onClick={handleClick}>Sort!</button>
    </div>
  );
}

export default List;
