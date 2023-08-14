import React from "react";
import ReactEcharts from "echarts-for-react";

export const PieGraph = () => {
  const darkTheme = {

    color: ["#3498db", "#e74c3c", "#2ecc71", "#f39c12"], // Series item colors
  };
  const option = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "5%",
      left: "center",
      textStyle: {
        color: '#708090', // Set text color for legend
      },
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 1048, name: "Retail" },
          { value: 735, name: "Stock" },
          { value: 580, name: "Share" },
          { value: 484, name: "Royalty" },
          { value: 300, name: "Membership" },
        ],
      },
    ],
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <ReactEcharts option={option} theme={darkTheme}/>
    </div>
  );
};
