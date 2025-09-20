import { useSelector } from "react-redux";
import styles from "./dashboard.module.scss";
import StatusCard from "../../components/StatusCard";
import { columns, data, statusCardData } from "../../constants/dashboard";
import BarChart from "../../components/Barchart";
import LineChart from "../../components/LineChart";
import TableComponent from "../../components/TableComponent";
import DonutChart from "../../components/DonutChart";
import MapChart from "../../components/Mapchart";

const DashBoard = () => {
  const { uiTheme } = useSelector((state) => state);
  return (
    <div className={styles.dashboardContainer}>
      <h2 className={uiTheme.mode === "light" ? styles.light : styles.dark}>
        eCommerce
      </h2>

      <div className={styles.topAnalyticsSection}>
        <div className={styles.leftSection}>
          <div className={styles.topLeftSection}>
            {statusCardData?.slice(0, 2).map((item, index) => {
              return (
                <div key={index}>
                  <StatusCard
                    cardTitle={item?.cardTitle}
                    value={item?.value}
                    percentage={item?.percentage}
                    type={item?.type}
                    index={index}
                  />
                </div>
              );
            })}
          </div>
          <div className={styles.bottomLeftSection}>
            {statusCardData?.slice(2).map((item, index) => {
              return (
                <div key={index}>
                  <StatusCard
                    cardTitle={item?.cardTitle}
                    value={item?.value}
                    percentage={item?.percentage}
                    type={item?.type}
                    index={index + 2}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles.rightSection}>
          <BarChart />
        </div>
      </div>

      <div className={styles.salesSection}>
        <div className={styles.leftSalesSection}>
          <div
            className={`${styles.revenueLineChartContainer} ${
              uiTheme.mode === "light" ? styles.light : styles.dark
            }`}
          >
            <LineChart />
          </div>

          <div
            className={`${styles.salesTableContainer} ${
              uiTheme.mode === "light" ? styles.light : styles.dark
            }`}
          >
            <h2
              className={uiTheme.mode === "light" ? styles.light : styles.dark}
            >
              Top Selling Products
            </h2>
            <div
              className={`${styles.tableWrapper} ${
                uiTheme.mode === "light" ? styles.light : styles.dark
              }`}
            >
              <TableComponent columns={columns} data={data} className={""} />
            </div>
          </div>
        </div>

        <div className={styles.rightSalesSection}>
          <div className={styles.worldMap}>
            <MapChart />{" "}
          </div>
          <div className={styles.donut}>
            <DonutChart />
          </div>
        </div>
      </div>
    </div>
  );
};
export default DashBoard;
