import React from "react";
import "./BarChart1.css";
import { BarChart, Bar, XAxis, YAxis } from "recharts";
const BarChart1 = () => {
  const data = [
    {
      name: "Entertainment",
      uv: 8000,
    },
    {
      name: "Food",
      uv: 3000,
    },
    {
      name: "Travel",
      uv: 2000,
    },
  ];
  return (
    <BarChart
      layout="vertical"
      width={600}
      height={400}
      data={data}
      margin={{
        top: 0,
        right: 30,
        left: 60,
        bottom: 1,
      }}
      barCategoryGap="50%"
    >
      <XAxis type="number" axisLine={false} tick={false} />
      <YAxis type="category" dataKey="name" axisLine={false} />
      <Bar dataKey="uv" fill="#8784D2" barSize={40} />
    </BarChart>
  );
};
export default BarChart1;
