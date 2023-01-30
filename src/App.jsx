import React, { useState } from "react";
import Counter from "./components/Counter";

const App = () => {
  const [value, setValue] = useState("Text");

  return (
    <div>
      <Counter />
    </div>
  );
};

export default App;
