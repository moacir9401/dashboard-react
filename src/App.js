import React from 'react';
import logo from './logo.svg';
import './App.css';
import Resumo from './components/resumo/resumo';
import MenuSuperior from './components/menuSuperior/menuSuperior';
function App() {
  return (
    <div>
     <MenuSuperior/>
     <Resumo/>
    </div>
  );
}

export default App;
