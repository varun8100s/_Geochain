import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import Home from "./Screen/Home";
import Features from "./Screen/Features";
import About from "./Screen/About";
import Animation from './Screen/Animation';
import "./App.css";
import NavBar from './Components/Navbar';

function App() {
  return (
    <div className="wrapper">
      {/* Commmon component */}
      <Animation />
      <NavBar />
      {/* Routing for screens */}
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/features" component={Features}></Route>
        <Route path="/about" component={About}></Route>
        
      </Switch>
      
	  </div>
  );
}

export default App;
