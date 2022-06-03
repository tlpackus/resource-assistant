import logo from './logo.svg';
import './App.css';
import Copper from "./Copper";
import { useState } from 'react';

function App() {
  const [getContext, handleGetContext] = useState(false);
    return (
    <div className="App">
    {getContext ? (
      <Copper />
    ) : (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button style={{border: '1px solid #fff'}} onClick={() => handleGetContext(true)}></button>
      </header>
    )}
    </div>
  );
}

export default App;
