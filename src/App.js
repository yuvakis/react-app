import React, { Component } from 'react';
import {Route,Switch,BrowserRouter} from 'react-router-dom'
import Home from "./views/home"
import Contact from "./views/contact";
import About from "./views/aboutus";
import Info from "./views/info";


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
            <Switch>
                <Route exact path="/"  component={Home} />
                <Route  path="/contact"  component={Contact} />
                <Route  path="/aboutus"  component={About} />
                <Route  path="/info"  component={Info} />
            </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
