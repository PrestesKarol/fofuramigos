import React from 'react';
import NavBar from './components/NavBar';
import CartWidget from './components/CartWidget'; // Importe o CartWidget
import ItemListContainer from './components/ItemListContainer'; // Importe o ItemListContainer
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
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
      <ItemListContainer greeting="Bem-vindo à nossa loja!" />
      <NavBar />
    </div>
  );
}

export default App;
