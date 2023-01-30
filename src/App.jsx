import React, { useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";

const App = () => {
  return (
    <div>
      <Counter />
      <ClassCounter />
    </div>
  );
};

export default App;
