'use strict';

const express = require('express');
const router = express.Router();

const employeeController = require('../controllers/employee.controllers')

// GET employees list
router.get('/api/employees', employeeController.list);

// Get Employee by Id
router.get('/api/employees/:id', employeeController.getById);

// Add a new Employee 
router.post('/api/employees', employeeController.add);

// Update an Employee
router.put('/api/employees/:id', employeeController.update);

// Delete an Employee
router.delete('/api/employees/:id', employeeController.remove);


module.exports = router;