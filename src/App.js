import React from 'react';
import logo from './logo.svg';
import './App.css';

import Footer from "./components/Footer";
import AddTodo from "./containers/AddTodo";
import VisibleTodoList from "./containers/VisibleTodoList";


const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  </div>
);

export default App;
