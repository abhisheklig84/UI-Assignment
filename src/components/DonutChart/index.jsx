import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useSelector } from "react-redux";
import styles from "./donut.module.scss";

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = () => {
  const { uiTheme } = useSelector((state) => state);

  const data = {
    labels: ["Direct", "Affiliate", "Sponsored", "E-mail"],
    datasets: [
      {
        label: "Votes",
        data: [300.56, 135.18, 154.02, 48.96],
        backgroundColor: ["#95A4FC", "#C6C7F8", "#BAEDBD", "#B1E3FF"],
        borderWidth: 0,
        cutout: "70%",
        borderRadius: {
          outerStart: 50,
          outerEnd: 50,
          innerStart: 50,
          innerEnd: 50,
        },
        spacing: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div
      className={`${styles.donutContainer} ${
        uiTheme.mode === "light" ? styles.light : styles.dark
      }`}
    >
      <h2>Total Sales</h2>
      <div className={styles.chart}>
        <Doughnut data={data} options={options} />
      </div>

      <div className={styles.legendWrapper}>
        <div className={styles.legendContainer}>
          {data.labels.map((label, idx) => (
            <div key={label} className={styles.individualLegend}>
              <div className={styles.left}>
                <div
                  className={styles.color}
                  style={{
                    backgroundColor: data.datasets[0].backgroundColor[idx],
                  }}
                />
                <p
                  className={
                    uiTheme.mode === "light" ? styles.light : styles.dark
                  }
                >
                  {label}
                </p>
              </div>

              <div className={styles.right}>
                <p
                  className={
                    uiTheme.mode === "light" ? styles.light : styles.dark
                  }
                >
                  ${data.datasets[0].data[idx]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DonutChart;
