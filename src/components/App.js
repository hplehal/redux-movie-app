import React, { Component } from "react";
import SearchBarContainer from "../containers/SearchBarContainer";
import MovieContainer from "../containers/MovieContainer";


import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>Movie App </h1>
          <SearchBarContainer />
          <MovieContainer/>
      </div>
    );
  }
}

export default App;
