import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import axios from 'axios';

// replace with your local serer
axios.defaults.baseURL= 'http://localhost:4000/api/employees';

ReactDOM.render(<App />, document.getElementById("root"));
