import React, { Component } from "react";
import "./App.css";
import TestComponent from "../features/testarea/TestComponent";
import CountryDashboard from "../features/country/CountryDashboard/CountryDashboard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>LIST OF COUNTRIES AND FLAGS</h1>
        <TestComponent/>
        <CountryDashboard/>
      </div>
    );
  }
}

export default App;
