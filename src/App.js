import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ContactPage from './ContactPage';
import EmployPage from './EmployPage';
import store from './mystore';
import {Provider} from 'react-redux';

window.store = store;


class App extends Component {
  render() {
    return (
	<Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
		<div>
			<button>one</button>
			<button>two</button>
			<button>three</button>
		</div>
		<ContactPage />
		<EmployPage />        
      </div>
	</Provider>
    );
  }
}

export default App;
