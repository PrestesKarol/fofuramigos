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
     
      <ItemListContainer greeting="Bem-vindo à nossa loja!" />
      <NavBar />
    </div>
  );
}

export default App;
