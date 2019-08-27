import React from 'react';
import './App.css';
import AwesomeComp from "./components/AwesomeComp";

function App() {
  return (
    <div className="App">
        <AwesomeComp myProp={1}/>
    </div>
  );
}

export default App;
