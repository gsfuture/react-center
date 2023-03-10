import React from 'react';
import logo from './logo.svg';
import './App.css';
import {HelloA,helloConstA} from "@lerna-good/lerna-module-a";
import { HelloDemo } from './HelloDemo';

function App() {
  console.log("----- App helloConstA",helloConstA);
  let helloA = new HelloA()
  helloA.print();
  let helloDemo = new HelloDemo();
  helloDemo.print();
  // console.log("-----helloA",helloA);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
