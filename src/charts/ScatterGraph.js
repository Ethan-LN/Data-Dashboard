import React from "react";
import data from "../data/house-price-area2.json";
import ReactEcharts from "echarts-for-react";


export const ScatterGraph = () => {
   const option = {
    visualMap: {
      min: 15202,
      max: 159980,
      dimension: 1,
      orient: "vertical",
      right: 10,
      top: "center",
      text: ["HIGH", "LOW"],
      calculable: true,
      inRange: {
        color: ['#009999','#0066cc'],
      },
    },
    tooltip: {
      trigger: "item",
      axisPointer: {
        type: "cross",
      },
    },
    xAxis: [
      {
        type: "value",
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: [
      {
        name: "price-area",
        type: "scatter",
        symbolSize: 5,
        data: data,
      },
    ],
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <ReactEcharts option={option} />
    </div>
  );
};
