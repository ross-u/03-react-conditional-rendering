// src/App.js
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import ImprovedMovieList from "./components/ImprovedMovieList";
import "./App.css";
import data from "./data";

import ConditionalExample from "./components/ConditionalExample";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar></Navbar>

        {/* <h1 style={{background: 'orange'}}>Conditional Example</h1> */}

        <ConditionalExample title="Hello Ironhackers" />

        <h1>Dynamic Movie List</h1>
        <ImprovedMovieList moviesArray={data}></ImprovedMovieList>
      </div>
    );
  }
}

export default App;
