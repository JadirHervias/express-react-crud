import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/index';
import EditPage from './components/editCourse';
import AddPage from './components/addCourse';
import { LoginPage } from './components/login';
import { RegisterPage } from './components/register';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/home" component={HomePage}></Route>
          <Route exact path="/edit" component={EditPage}></Route>
          <Route exact path="/add" component={AddPage}></Route>
          <Route exact path="/" component={LoginPage}></Route>
          <Route exact path="/register" component={RegisterPage}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
