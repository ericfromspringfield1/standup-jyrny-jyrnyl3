import React, { Component } from "react";
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews";
import "./Capstone.css";

class Capstone extends Component {
  render() {
    return (
      <>
        <NavBar />
        <ApplicationViews />
      </>
    );
  }
}

export default Capstone;
