import { useSelector } from "react-redux";
import styles from "./statusCard.module.scss";
import ArrowRise from "../../assets/images/statusCard/ArrowRise";

const StatusCard = ({ cardTitle, value, percentage, type, index }) => {
  const { uiTheme } = useSelector((state) => state);
  return (
    <div
      className={`${styles.statusCardContainer} ${
        uiTheme.mode === "light"
          ? styles[`light${index}`]
          : styles[`dark${index}`]
      }`}
    >
      <h2>{cardTitle}</h2>

      <div className={styles.bottomContainer}>
        <div className={styles.value}>{value}</div>
        <div
          className={`${styles.percentage} ${
            type === "decreament" ? styles.rotate : ""
          }`}
        >
          {percentage}
          <ArrowRise
            fill={
              uiTheme.mode === "dark"
                ? [1, 2].includes(index)
                  ? "#fff"
                  : "#1c1c1c"
                : "#1c1c1c"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default StatusCard;
