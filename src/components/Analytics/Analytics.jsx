import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Analytics = ({ data }) => {
  return (
    <div className="container mx-auto grid place-items-center">
      <div className="title text-center my-5">
        <h1 className="text-4xl my-4">Dish Analytics </h1>
        <p>Get you all the Analytics in the month</p>
      </div>
      <LineChart width={1200} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="price"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </div>
  );
};

export default Analytics;
