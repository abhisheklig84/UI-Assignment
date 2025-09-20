import styles from "./lineChart.module.scss";
import { useSelector } from "react-redux";
import {
  LineChart as ReLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { linChartData } from "../../constants/dashboard";

const LineChart = () => {
  const { uiTheme } = useSelector((state) => state);

  const strokeColor = uiTheme.mode === "light" ? "#1c1c1c" : "#A8C5DA";

  return (
    <div className={styles.lineChartContainer}>
      <div
        className={`${styles.toplabel} ${
          uiTheme.mode === "light" ? styles.light : styles.dark
        }`}
      >
        <h2>Revenue</h2>

        <div className={styles.line} />

        <div className={styles.legend}>
          <div className={styles.dot} />
          <p>
            Current Week <span>$58,211</span>
          </p>
        </div>

        <div className={styles.legend}>
          <div className={styles.lightDot} />
          <p>
            Previous Week <span>$68,768</span>
          </p>
        </div>
      </div>
      <div className={styles.lineChartSection}>
        <ResponsiveContainer width="100%" height={285}>
          <ReLineChart
            data={linChartData}
            margin={{ top: 20, right: 20, left: 0, bottom: 0 }}
          >
            <CartesianGrid
              stroke={
                uiTheme.mode === "light"
                  ? "rgba(149,149,149,0.1)"
                  : "rgba(65,64,64,0.4)"
              }
              vertical={false}
            />
            <XAxis
              dataKey="month"
              tick={{
                fill:
                  uiTheme.mode === "light"
                    ? "rgba(28,28,28,0.4)"
                    : "rgba(255,255,255,0.4)",
              }}
            />
            <YAxis
              domain={[0, 30]}
              tickFormatter={(value) => `${value}M `}
              tick={{
                fill:
                  uiTheme.mode === "light"
                    ? "rgba(28,28,28,0.4)"
                    : "rgba(255,255,255,0.4)",
              }}
            />
            {/* <Tooltip /> */}
            <Line
              type="monotone"
              dataKey="current"
              stroke="rgba(100,149,237,1)"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 5 }}
              fill="url(#colorCurrent)"
            />

            <Line
              type="monotone"
              dataKey="previous"
              stroke={strokeColor}
              strokeWidth={3}
              dot={false}
              strokeDasharray="6 6"
            />
            <Line
              type="monotone"
              dataKey="p"
              stroke={strokeColor}
              strokeWidth={4}
              dot={false}
              activeDot={{ r: 5 }}
              fill="url(#colorCurrent)"
            />
          </ReLineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LineChart;
