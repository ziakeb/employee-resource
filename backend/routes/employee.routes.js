'use strict';

const express = require('express');
const router = express.Router();

const employeeController = require('../controllers/employee.controllers')

// GET: Get employees list
router.get('/api/employees', employeeController.list);

// GET: Get employee by Id
router.get('/api/employees/:id', employeeController.getById);

// POST: Add a new Employee 
router.post('/api/employees', employeeController.add);

// PUT: Update an Employee
router.put('/api/employees/:id', employeeController.update);

// DELETE: Delete an Employee
router.delete('/api/employees/:id', employeeController.remove);


module.exports = router;