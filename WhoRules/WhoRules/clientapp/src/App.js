import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'tachyons-components'
const Button = styled('button')`
  f6 f5-ns fw6 dib ba
  b--black-20 bg-blue white
  ph3 ph4-ns pv2 pv3-ns br2
  grow no-underline
`;
function App() {
  return (
      <div className="App">
          <Button mr2>Hello</Button>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
