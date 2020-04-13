const moment = require("moment");
const Employee = require("../models/employee.model");

const DATABASE = {
  employees: [],
};

// Fetchs employee list
exports.list = (req, res, next) => {
  try {
    res.status(200).json(DATABASE.employees);
  } catch (err) {
    err.statusCode = 500;
    next(err);
  }
};

// Fetch an employee by Id
exports.getById = (req, res, next) => {
  try {
    let empId = req.params.id;
    let foundEmp = DATABASE.employees.find((emp) => emp._id === empId);
    res.status(200).json(foundEmp);
  } catch (err) {
    err.statusCode = 500;
    next(err);
  }
};

// Add an employee
exports.add = (req, res, next) => {
  try {
    const date = moment().format("YYYY-MM-DD");

    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let hireDate = date;
    let role = req.body.role;
    let favJoke = req.body.favJoke || "joke";
    let favQuote = req.body.favQuote || "quote";

    let newEmploye = new Employee(
      firstName,
      lastName,
      hireDate,
      role,
      favJoke,
      favQuote
    );
    DATABASE.employees.push(newEmploye);

    res.status(201).json(newEmploye);
  } catch (err) {
    err.statusCode = 500;
    next(err);
  }
};

// Updates an employee by id
exports.update = (req, res, next) => {
  try {
    let empId = req.params.id;
    let foundEmpIndex = DATABASE.employees.findIndex(
      (emp) => emp._id === empId
    );

    for (const key in DATABASE.employees[foundEmpIndex]) {
      console.log("key: ", key);
      let value = req.body[key];
      if (value) {
        DATABASE.employees[foundEmpIndex][key] = value;
      }
    }

    res.status(200).json({
      sucess: true,
      data: DATABASE.employees[foundEmpIndex],
    });
  } catch (err) {
    err.statusCode = 500;
    next(err);
  }
};

// Removes and employee by Id
exports.remove = (req, res, next) => {
  try {
    let empId = req.params.id;
    let filteredEmployees = DATABASE.employees.filter(
      (emp) => emp._id !== empId
    );
    DATABASE.employees = filteredEmployees;

    res.status(200).json({ success: true });
  } catch (err) {
    err.statusCode = 500;
    next(err);
  }
};
