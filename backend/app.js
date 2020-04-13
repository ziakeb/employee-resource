'use strict';

const express = require('express');
const employeeRoutes = require('./routes/employee.routes');
const dotenv = require('dotenv');
const cors = require('cors')
const app = express();

// Loading environmental variable
dotenv.config();

// Geting PORT from environmental variable
const port = parseInt(process.env.PORT || '3000');

// Enabling cors
app.use(cors())

// Parsing request body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Mounting routes
app.use(employeeRoutes);

// Fail over route
app.use(function(req, res, next) {
    res.status(404).send({ success: false, errMsg: 'Not found'});
});

// Fail over server
app.use(function (err, req, res, next){
    res.status(err.statusCode).send({
        success: false,
        errMsg: err.message
    })
})

// listen for requests
app.listen(port, function() {
    console.log(`Server is listening on port ${port}`);
});

module.exports = app;