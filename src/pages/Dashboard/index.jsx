import { useSelector } from "react-redux";
import styles from "./dashboard.module.scss";
import StatusCard from "../../components/StatusCard";
import { statusCardData } from "../../constants/dashboard";

const DashBoard = () => {
  const { uiTheme } = useSelector((state) => state);
  return (
    <div className={styles.dashboardContainer}>
      <h2 className={uiTheme.mode === "light" ? styles.light : styles.dark}>
        eCommerce
      </h2>

      <div className={styles.topAnalyticsSection}>
        <div className={styles.leftSection}>
          {statusCardData?.map((item, index) => {
            return (
              <div key={index}>
                <StatusCard
                  cardTitle={item?.cardTitle}
                  value={item?.value}
                  percentage={item?.percentage}
                  type={item?.type}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default DashBoard;
