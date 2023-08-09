import React from "react";
import "../styles/ManageSection.css";
import { TableDisplay } from "./TableDisplay";

export const ManageSection = () => {
  
    const DisplayTable = () => {
    return <div><TableDisplay /></div>;
  };

  return (
    <div className="section">
      <div className="data__nav">Data </div>
      <div className="btns__group">
        <button onClick={DisplayTable}>Manage Staff</button>
        <button>CustomerContact</button>
        <button>Invoice Balance</button>
      </div>

      <div className="charts__nav">Charts </div>
      <div className="btns__group">
        <button>Line Chart</button>
        <button>Bar Chart</button>
        <button>Pie Chart</button>
        <button>Area Chart</button>
        <button>Map Chart</button>
      </div>
    </div>
  );
};
