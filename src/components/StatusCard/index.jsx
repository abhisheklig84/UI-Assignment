import { useSelector } from "react-redux";
import styles from "./statusCard.module.scss";

const StatusCard = ({ cardTitle, value, percentage, type }) => {
  const { uiTheme } = useSelector((state) => state);
  return (
    <div
      className={`${styles.statusCardContainer} ${
        uiTheme.mode === "light" ? styles.light : styles.dark
      }`}
    >
      <h2>{cardTitle}</h2>

      <div className={styles.bottomContainer}>{value}</div>
      <div className={styles.bottomContainer}>{percentage}</div>
    </div>
  );
};

export default StatusCard;
