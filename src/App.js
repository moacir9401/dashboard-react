import React from 'react';
import logo from './logo.svg';
import './App.css';
import Resumo from './components/resumo/resumo';
import MenuSuperior from './components/menuSuperior/menuSuperior';
import Consulta from './components/consultas/consultas';
import Faturamento from './components/faturamento/faturamento';
import { Switch, Route } from 'react-router-dom';
function App() {
  return (
    <div>
      <MenuSuperior />
      <div className="container-fluid">
        <div className="row">
          <div className="col">

            <Switch>
              <Route exact path="/" component={Resumo} />
              <Route path="/consulta" component={Consulta} />
              <Route path="/faturamento" component={Faturamento} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
