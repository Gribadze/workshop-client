import React from 'react';
import './App.css';
import AwesomeComp from "./components/AwesomeComp";
import UserList from "./components/UserList";

function App() {
  return (
    <div className="App">
        <AwesomeComp myProp={1}/>
        <hr />
        <UserList />
    </div>
  );
}

export default App;
