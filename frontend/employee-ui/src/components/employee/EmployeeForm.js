import React, { Component } from "react";

class EmployeeForm extends Component {
  render() {
    return (
      <form className="add-employee-from"
      onSubmit={(event) => this.props.onSubmitHandler(event)}
      >
        <h1>Add Employee</h1>
        <div>
          <label>First Name: </label>
          <input
            type="text"
            name="firstName"
            placeholder="first name"
            value={this.props.firstName}
            className="form-control"
            required
            onChange={(event) => this.props.onInputChange(event)}
          />
        </div>
        <div>
          <label>Last Name: </label>
          <input
            type="text"
            name="lastName"
            placeholder="last name"
            value={this.props.lastName}
            className="form-control"
            required
            onChange={(event) => this.props.onInputChange(event)}
          />
        </div>
        <div>
          <label>Hire date: </label>
          <input
            type="date"
            max={this.props.hireDate}
            placeholder="hire date"
            name="hireDate"
            value={this.props.hireDate}
            className="form-control"
            required
            onChange={(event) => this.props.onInputChange(event)}
          />
        </div>
        <div>
          <label>Role: </label>
          <select
            value={this.props.role}
            className="form-control"
            required
            name="role"
            onChange={(event) => this.props.onInputChange(event)}
          >
            <option value="CEO">CEO</option>
            <option value="VP">VP</option>
            <option value="MANAGER">MANAGER</option>
            <option value="LACKEY">LACKEY</option>
          </select>
        </div>
        <div>
          <input
            type="submit"
            value="Add"
            placeholder="hire date"
            className="btn btn-primary" />
          
        </div>
      </form>
    );
  }
}

export default EmployeeForm;
