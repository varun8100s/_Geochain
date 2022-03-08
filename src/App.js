import React from "react";
import Navbar from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import { Route, Switch } from "react-router-dom";
import Home from "./Screen/Home";
import Features from "./Screen/Features";
import About from "./Screen/About";
import "./App.css";
function App() {
  return (
    <>
      {/* Commmon component */}
      <Navbar />
      {/* Routing for screens */}
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/features" component={Features}></Route>
        <Route path="/about" component={About}></Route>
      </Switch>
    </>
  );
}

export default App;
