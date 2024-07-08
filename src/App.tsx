import React from "react";

import Title from "./components/Title";
import { DragDrop } from "./components/DragDrop";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="globalWrap">
        <Title />
        <div>
          <DragDrop />
        </div>
      </div>
    </div>
  );
}

export default App;
