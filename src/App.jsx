import React, { useState } from "react";
import "./styles/App.css";

const App = () => {
  return (
    <div className="App">
      <div className="post">
        <div className="post__content">
          <strong>1. JavaScript</strong>
          <div>JavaSctipt - язые программирования</div>
        </div>
        <div className="post__btns">
          <button>Удалить</button>
        </div>
      </div>
    </div>
  );
};

export default App;
