import React, { useState, useEffect } from "react";
import "./BarChart1.css";
import { BarChart, Bar, XAxis, YAxis } from "recharts";

const BarChart1 = () => {
  const [chartSize, setChartSize] = useState({
    width: window.innerWidth * 0.35,
    height: window.innerHeight * 0.4,
  });

  useEffect(() => {
    const handleResize = () => {
      setChartSize({
        width: window.innerWidth * 0.35,
        height: window.innerHeight * 0.4,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      width={chartSize.width}
      height={chartSize.height}
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
      <Bar dataKey="uv" fill="#8784D2" barSize={40} radius={[0, 20, 20, 0]} />
    </BarChart>
  );
};

export default BarChart1;
