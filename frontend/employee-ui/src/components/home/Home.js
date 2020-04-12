import React, { Component } from "react";
import './home.css';


export default class Home extends Component {
  render() {
    return (
      <div className="main container">
        {/* title div */}
        <div className="title">
          <h1 className="jumbotron">Employee Resource</h1>
        </div>
        <div className="actions">
          <button className="btn btn-secondary">List of Employees</button>
          <button className="btn btn-secondary">Add Employee</button>
        </div>
    <div className="content">content to view</div>
      </div>
    );
  }
}
