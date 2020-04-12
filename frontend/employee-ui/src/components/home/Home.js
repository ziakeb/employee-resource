import React, { Component } from "react";
import "./home.css";
import EmployeeList from "../employee/EmployeeList";
import AddEmployee from "../employee/AddEmployee";
import moment from "moment";
import axios from "axios";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showList: false,
      showAdd: false,
      employeeList: [],
      firstName: "",
      lastName: "",
      hireDate: moment().format("YYYY-MM-DD"),
      role: "",
      favQuote: "",
      favJoke: "",
    };
  }

  onInputChange = (event) => {
    // event.preventDefault();
    let val = event.target.value;
    let name = event.target.name;

    let stateCopy = { ...this.state };
    stateCopy[name] = val;
    this.setState({ ...stateCopy });
  };

  onAddClick = async (event) => {
    let quote,
      joke = "";
    let newEmployee = null;
    let response = await axios.get("https://quotes.rest/qod");
    quote = response.data.contents.quotes[0].quote;

    let option = {
      headers: {
        Accept: "application/json",
      },
    };
    response = await axios.get("https://icanhazdadjoke.com", option);
    console.log(response);
    joke = response.data.joke;

    console.log("quote: ", quote);
    console.log("joke: ", joke);

    newEmployee = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      hireDate: this.state.hireDate,
      role: this.state.role,
      favJoke: joke,
      favQuote: quote,
    };
    console.log(newEmployee);
    axios
      .post(axios.defaults.baseURL, newEmployee)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));

    // if successfuly added alert success message and set both shoList and showAdd to false
    alert("Employee successfuly added");
    console.log("newEmployee....", newEmployee);
    this.setState({ showList: false, showAdd: false });
  };

  onListEmployeeClick() {
    this.setState({
      showList: true,
      showAdd: false,
    });
  }
  onAddEmployeeClick() {
    this.setState({ showList: false, showAdd: true });
  }

  componentDidUpdate() {
    axios
      .get(axios.defaults.baseURL)
      .then((response) => this.setState({ employeeList: response.data }))
      .catch((err) => console.log(err));
  }

  render() {
    let contentToView = "";
    if (this.state.showList) {
      contentToView = <EmployeeList employeeList={this.state.employeeList} />;
    }
    if (this.state.showAdd) {
      contentToView = (
        <AddEmployee
          firstName={this.state.firstName}
          laststName={this.state.lastName}
          hireDate={this.state.hireDate}
          role={this.state.role}
          onInputChange={this.onInputChange}
          onAddClick={this.onAddClick}
        />
      );
    }

    return (
      <div className="main container">
        {/* title div */}
        <div className="title">
          <h1 className="jumbotron">Employee Resources</h1>
        </div>

        {/* buttons div */}
        <div className="actions">
          <button
            className="btn btn-secondary"
            onClick={() => this.onListEmployeeClick()}
          >
            List of Employees
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => this.onAddEmployeeClick()}
          >
            Add Employee
          </button>
        </div>

        {/* content div */}
        <div className="content">{contentToView}</div>
      </div>
    );
  }
}

export default Home;
