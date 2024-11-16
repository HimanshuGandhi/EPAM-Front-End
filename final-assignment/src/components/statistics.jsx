import React from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";
import students from "../studentgrade";

const COLORS = ["#4CAF50", "#F44336"];

const PieChartComponent = () => {
  const data = [
    { name: "Pass", value: students.filter((s) => s.overallGrade >= 4).length },
    { name: "Fail", value: students.filter((s) => s.overallGrade < 4).length },
  ];

  return (
    <PieChart width={400} height={400}>
      <Pie
        dataKey="value"
        isAnimationActive={true}
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={150}
        fill="#8884d8"
        label={({ name, value }) => `${name}: ${value}`}
        labelLine={false}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Legend />
    </PieChart>
  );
};

export default PieChartComponent;
