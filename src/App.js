import React from "react";
import { Steps } from "element-react";
import "element-theme-default";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Element-react</h1>
        <Steps space={200} active={1}>
            <Steps.Step title="Step 1" description="Some description"></Steps.Step>
            <Steps.Step title="Step 2" description="Some description"></Steps.Step>
            <Steps.Step title="Step 3" description="Some description"></Steps.Step>
          </Steps>
      </header>
    </div>
  );
}

export default App;
