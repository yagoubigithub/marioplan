import React, { Component } from "react";

import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/layout/NavBar";

class App extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
