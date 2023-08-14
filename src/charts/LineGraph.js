import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    // CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
  } from "recharts";



export const LineGraph = () => {
    const data = [
        {
          "name": "Jan",
          "Loss": 3080,
          "Profit": 4400,
          "amt": 2400
        },
        {
          "name": "Feb",
          "Loss": 4000,
          "Profit": 3398,
          "amt": 2210
        },
        {
          "name": "March",
          "Loss": 3000,
          "Profit": 6800,
          "amt": 2290
        },
        {
          "name": "April",
          "Loss": 2780,
          "Profit": 5908,
          "amt": 2000
        },
        {
          "name": "May",
          "Loss": 1890,
          "Profit": 4800,
          "amt": 2181
        },
        {
          "name": "June",
          "Loss": 2390,
          "Profit": 4800,
          "amt": 2500
        },
        {
          "name": "July",
          "Loss": 3490,
          "Profit": 4300,
          "amt": 2100
        }
      ]
  return (
    <div>
      <ResponsiveContainer width="98%" height={260}>
      <LineChart
        data={data}
        margin={{ top: 10, right: 0, left: 0, bottom: 5 }}
      >
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Profit" stroke="#8884d8" />
        <Line type="monotone" dataKey="Loss" stroke="#82ca9d" />
      </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
