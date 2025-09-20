import styles from "./topbar.module.scss";
import Sidebar from "../../assets/images/topBarIcons/Sidebar";
import Star from "../../assets/images/topBarIcons/Star";
import Sun from "../../assets/images/topBarIcons/Sun";
import ClockCounterClockwise from "../../assets/images/topBarIcons/ClockCounterClockwise";
import Bell from "../../assets/images/topBarIcons/Bell";
import { useDispatch, useSelector } from "react-redux";
import {
  toogleNotificationbar,
  toogleSidebar,
  toogleTheme,
} from "../../store/slices";
import Input from "../Input";

const TopBar = () => {
  const dispatch = useDispatch();
  const { uiTheme } = useSelector((state) => state);

  return (
    <div
      className={`${styles.topBarContainer} ${
        uiTheme.mode === "light" ? styles.light : styles.dark
      }`}
    >
      <div className={styles.leftSection}>
        <div
          onClick={(e) => {
            e.stopPropagation();
            dispatch(toogleSidebar());
          }}
          className={styles.svgContainer}
        >
          <Sidebar fill={uiTheme.mode !== "light" ? "#FFFFFF" : "#1c1c1c"} />
        </div>
        <Star fill={uiTheme.mode !== "light" ? "#FFFFFF" : "#1c1c1c"} />
        <p className={uiTheme.mode !== "light" ? styles.light : styles.dark}>
          Dashboards
        </p>
        <p className={uiTheme.mode !== "light" ? styles.light : styles.dark}>
          /
        </p>
        <p
          className={`${
            uiTheme.mode !== "light" ? styles.light : styles.dark
          } ${styles.active}`}
        >
          Default
        </p>
      </div>

      <div className={styles.rightSection}>
        <Input placeholder={"Search"} />
        <div className={styles.iconWrapper}>
          <div onClick={() => dispatch(toogleTheme())}>
            <Sun fill={uiTheme.mode !== "light" ? "#FFFFFF" : "#1c1c1c"} />
          </div>
          <ClockCounterClockwise
            fill={uiTheme.mode !== "light" ? "#FFFFFF" : "#1c1c1c"}
          />
          <Bell fill={uiTheme.mode !== "light" ? "#FFFFFF" : "#1c1c1c"} />
          <div
            onClick={(e) => {
              e.stopPropagation();
              dispatch(toogleNotificationbar());
            }}
            className={styles.svgContainer}
          >
            <Sidebar fill={uiTheme.mode !== "light" ? "#FFFFFF" : "#1c1c1c"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
