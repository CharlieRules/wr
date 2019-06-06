import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'tachyons-components';
import {DefaultRoute} from './components/routeTemplates/defaultRoute';

const Button = styled('button')`
  f6 f5-ns fw6 dib ba
  b--black-20 bg-blue white
  ph3 ph4-ns pv2 pv3-ns br2
  grow no-underline
`;

const StyledApp = styled('div')`flex`;
const StyledRoute = styled('DefaultRoute')`flex`;

function App() {
  return (
      <StyledApp className="App">

          <DefaultRoute exact path="/" body={Button}/>
      </StyledApp>
  );
}

export default App;

/*
  <div className="App">
          <header/>

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
 */