import React from "react";
import List from "./List";

const ironhackCampuses = [
  "Sāo Paulo",
  "Miami",
  "Mexico City",
  "Barcelona",
  "Berlin",
];

function App() {
  return (
    <div>
      <List campuses={ironhackCampuses} />
    </div>
  );
}

export default App;
