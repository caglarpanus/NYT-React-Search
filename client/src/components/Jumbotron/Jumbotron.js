import React from "react";
import "./jumbotron.css";

const Jumbotron = () =>

  <div className="jumbotron jumbotron-fluid">
    <div className="container">
      <h1 className="display-4">New York Times Search</h1>
      <p className="lead">search and save your favorite NYT articles!</p>
      <span className="float-right"><a href="/">Search</a> | <a href="/saved">Saved</a></span>
    </div>
  </div>

export default Jumbotron;