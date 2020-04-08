import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Principal from './pages/Principal';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />}
        <Route path="/home" component={Home} />}
        <Route exact path="/" component={Principal} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
