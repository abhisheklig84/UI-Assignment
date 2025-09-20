import { useState, useEffect } from "react";
import styles from "./lineChart.module.scss";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const LineChart = () => {
  const { uiTheme } = useSelector((state) => state);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

  const data = {
    labels,
    datasets: [
      {
        label: "Blue Line",
        data: [8, 18, 15, 10, 14, 24],
        borderColor: "rgba(100, 149, 237, 1)",
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 400);
          gradient.addColorStop(0, "rgba(100, 149, 237, 0.2)");
          gradient.addColorStop(1, "rgba(100, 149, 237, 0)");
          return gradient;
        },
        fill: false,
        tension: 0.4,
        borderWidth: 3,
        pointRadius: 0,
      },
      {
        label: "Black Line",
        data: [12, 8, 9, 14, 20, 21],
        borderColor: uiTheme.mode === "light" ? " #1c1c1c" : "#C6C7F8",
        borderWidth: 3,
        tension: 0.4,
        pointRadius: 0,
        segment: {
          borderDash: (ctx) => (ctx.p0DataIndex >= 3 ? [6, 6] : undefined),
        },
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // makes chart fully responsive
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: {
          callback: (value) => value + "M",
          color:
            uiTheme.mode === "light"
              ? " rgba(28, 28, 28, 0.40)"
              : "rgba(255, 255, 255, 0.40)",
        },
      },

      y: {
        ticks: {
          callback: (value) => value + "M",
          padding: 20,
          color:
            uiTheme.mode === "light"
              ? " rgba(28, 28, 28, 0.40)"
              : "rgba(255, 255, 255, 0.40)",
        },
        min: 0,
        max: 30,
        grid: {
          color:
            uiTheme.mode === "light"
              ? " rgba(149, 149, 149, 0.1)"
              : "rgba(65, 64, 64, 0.4)",
          drawTicks: true, // keep tick marks if you want
          drawBorder: false, // <-- hide the Y-axis baseline
        },
      },
    },
  };

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
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default LineChart;
