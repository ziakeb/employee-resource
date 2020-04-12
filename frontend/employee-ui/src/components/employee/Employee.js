import React from "react";

const Employee = (props) => {
  let employee = props.employee;

  return (
    <div key={employee._id} className="employee">
      <h5>First Name: {employee.firstName} </h5>
      <h5>Last Name: {employee.lastName} </h5>
      <p>Hired date: {employee.hireDate} </p>
      <p>Role : {employee.role} </p>
      <p>Favorite quote : {employee.favQuote} </p>
      <p>Favorite joke : {employee.favJoke} </p>
    </div>
  );
};

export default Employee;
