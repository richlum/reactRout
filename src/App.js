import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ContactPage from './ContactPage';
import EmployPage from './EmployPage';
import {Route, Link} from 'react-router-dom';
// import store from './mystore';
// import {Provider} from 'react-redux';
// import store from './mystore'

// window.store = store;


class App extends Component {
  render() {
    return (
	// <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
  		<div>
  			<Link to="/employ"> <button>Employer</button> </Link>
  			<Link to="/contact"> <button>Contact</button></Link>
  			<Link to="/"> <button>three</button></Link>
  		</div>
  		<Route path="/employ" component={EmployPage} />
      <Route path="/contact" component={ContactPage} />
    </div>
	// </Provider>
    );
  }
}

export default App;
