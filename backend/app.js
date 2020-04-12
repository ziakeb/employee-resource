'use strict';

const express = require('express');
const employeeRoutes = require('./routes/employee');
const dotenv = require('dotenv');
const app = express();

// Loading environmental variable
dotenv.config();
const port = parseInt(process.env.PORT || '3000');

// Parsing request body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Mounting routes
app.use('/api/employees', employeeRoutes);

// Fail over route
app.use(function(req, res) {
    res.status(404).send('Not found');
});

// listen for requests
app.listen(port, function() {
    console.log(`Server is listening on port ${port}`);
});

module.exports = app;