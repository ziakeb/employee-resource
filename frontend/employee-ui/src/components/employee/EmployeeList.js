import React from 'react';
import Employee from "./Employee";
import './employee.css';



const EmployeeList = (props) => {
    let employeeList = '';
    if(props.employeeList.length > 0){
        employeeList = props.employeeList.map(emp => <Employee key={emp._id} employee={emp}/> )
    }
    
    return (
        <div className="emoloyee-list">

            {employeeList}

        </div>
    )
}

export default EmployeeList;