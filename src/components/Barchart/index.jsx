"use client";
import { useSelector } from "react-redux";
import styles from "./barchart.module.scss";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", base: 15, extra: 5 },
  { name: "Feb", base: 20, extra: 6 },
  { name: "Mar", base: 18, extra: 4 },
  { name: "Apr", base: 22, extra: 7 },
  { name: "May", base: 12, extra: 5 },
  { name: "Jun", base: 20, extra: 6 },
];

const formatYAxis = (value) => `${value}M`;

const StackedBarChart = () => {
  const { uiTheme } = useSelector((state) => state);

  return (
    <div
      className={`${styles.barChartContainer} ${
        uiTheme.mode === "light" ? styles.light : styles.dark
      }`}
    >
      <h3>Projections vs Actuals</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          activeBar={false}
          margin={{
            top: 16,
            left: -30,
            bottom: 40,
          }}
        >
          <CartesianGrid
            vertical={false}
            horizontal={true}
            stroke={uiTheme.mode === "light" ? "#edeef0" : "#5e5a5aff"}
          />
          <XAxis
            dataKey="name"
            axisLine={true}
            tickLine={false}
            tick={{
              fill:
                uiTheme.mode === "light"
                  ? "#1c1c1c66"
                  : "rgba(255, 255, 255, 0.40)",
              textAnchor: "middle",
              fontFamily: "Inter",
              fontSize: 12,
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: 18,
              dy: 3,
            }}
          />
          <YAxis
            tickFormatter={formatYAxis}
            tick={{
              fill:
                uiTheme.mode === "light"
                  ? "#1c1c1c66"
                  : "rgba(255, 255, 255, 0.40)",
              textAnchor: "middle",
              fontFamily: "Inter",
              fontSize: 12,
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: 18,
              dx: -10,
            }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            formatter={(value) => `${value}M`}
            cursor={{ fill: "transparent" }}
            contentStyle={{
              backgroundColor: "#333",
              border: "none",
              color: "#ffffff66",
            }}
          />
          {/* stacked bars */}
          <Bar
            dataKey="base"
            stackId="a"
            fill="#A8C5DA"
            barSize={35}
            radius={[0, 0, 0, 0]}
          />
          <Bar
            dataKey="extra"
            stackId="a"
            fill="#5c6975"
            barSize={40}
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StackedBarChart;
