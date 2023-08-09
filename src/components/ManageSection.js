import React, { useState } from "react";
import "../styles/ManageSection.css";
import { TableDisplay } from "./TableDisplay";
import { Link } from "react-router-dom";
import { ManageStaff } from "../pages/ManageStaff/ManageStaff";

export const ManageSection = () => {
  const [group, setGroup] = useState("")


  return (
    <div className="section">
      <div className="data__nav">Data </div>
      <div className="btns__group">
        <Link to="/staff">
          <button>Manage Staff</button>
        </Link>
        <Link to="/customer">
          {" "}
          <button>CustomerContact</button>
        </Link>
        <Link to="/invoice">
          <button>Invoice Balance</button>
        </Link>
      </div>

      <div className="charts__nav">Charts </div>
      <div className="btns__group">
        <Link to="/line">
          <button>Line Chart</button>
        </Link>
        <Link to="/bar">
          <button>Bar Chart</button>
        </Link>
        <Link to="/pie">
          <button>Pie Chart</button>
        </Link>
        <Link to="/area">
          <button>Area Chart</button>
        </Link>
        <Link to="/map">
          <button>Map Chart</button>
        </Link>
      </div>
      <Link to="/">
          <button>Home Dashboard</button>
        </Link>
    </div>
  );
};
