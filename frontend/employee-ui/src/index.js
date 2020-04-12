import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import axios from 'axios';

axios.defaults.baseURL= 'http://localhost:4000/api/employees';

ReactDOM.render(<App />, document.getElementById("root"));
