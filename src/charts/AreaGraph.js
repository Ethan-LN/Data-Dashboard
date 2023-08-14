import React from "react";
import { AreaChart } from "recharts";
import { Area,XAxis, YAxis, Tooltip,ResponsiveContainer } from 'recharts';

export const AreaGraph = () => {
    const data = [
        {
          "name": "Mon",
          "Loss": 4000,
          "Profit": 2400,
          "amt": 2400
        },
        {
          "name": "Tue",
          "Loss": 3000,
          "Profit": 1398,
          "amt": 2210
        },
        {
          "name": "Wed",
          "Loss": 2000,
          "Profit": 9800,
          "amt": 2290
        },
        {
          "name": "Thur",
          "Loss": 2780,
          "Profit": 3908,
          "amt": 2000
        },
        {
          "name": "Fri",
          "Loss": 1890,
          "Profit": 4800,
          "amt": 2181
        },
        {
          "name": "Sat",
          "Loss": 2390,
          "Profit": 3800,
          "amt": 2500
        },
        {
          "name": "Sun",
          "Loss": 3490,
          "Profit": 4300,
          "amt": 2100
        }
      ];
  return (
    <div>
      <ResponsiveContainer width="100%" height={260}>
      <AreaChart
        data={data}
        margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorLoss" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <Tooltip />
        <Area
          type="monotone"
          dataKey="Loss"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorLoss)"
        />
        <Area
          type="monotone"
          dataKey="Profit"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorProfit)"
        />
      </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
