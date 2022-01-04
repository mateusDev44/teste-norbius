import React, { Component } from "react";
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home/Home";

class App extends Component {
  render() {
    return (
      <div>
        <Nav></Nav>
        <Home></Home>
      </div>
    );
  }
}

export default App;
