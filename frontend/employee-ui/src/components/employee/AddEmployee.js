import React, { Component } from "react";

class AddEmployee extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>Add Employee</h1>
          <div>
            <label>First Name: </label>
            <input type="text" name="firstName" placeholder="first name" />
          </div>
          <div>
            <label>Last Name: </label>
            <input type="text" name="lastName" placeholder="last name" />
          </div>
          <div>
            <label>Hire Date: </label>
            <input type="text" name="hireDate" placeholder="first name" />
          </div>
          <div>
            <label>Role: </label>
            <select type="text" name="role" placeholder="first name">
              <option value="CEO">CEO</option>
              <option value="VP">VP</option>
              <option value="MANAGER">MANAGER</option>
              <option value="LACKEY">LACKEY</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}

export default AddEmployee;
