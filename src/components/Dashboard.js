import React, { useState } from "react";
import "../styles/Dashboard.css";
import { Area, AreaGraph } from "../charts/AreaGraph";
import { Line, LineGraph } from "../charts/LineGraph";
import { BarGraph } from "../charts/BarGraph";

const Dashboard = () => {
  const [chartName, setChartName] = useState("");
  return (
      <div className="dashboard__container">
        <div className="dashboard">
          <div className="parent">
            <div className="div1"> Revenue</div>
            <div className="div2"> Cost</div>
            <div className="div3"> Profit</div>
            <div className="div4"> Loss</div>
            <div className="div5"> <LineGraph /></div>
            <div className="div6"> <BarGraph /></div>
            <div className="div7"> Pie</div>
            <div className="div8"> <AreaGraph /> </div>
            <div className="div9"> group</div>
            <div className="div10"> map</div>
          </div>
        </div>
      </div>
  );
};

export default Dashboard;
