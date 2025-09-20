import TopBar from "../../TopBar";
import styles from "./layout.module.scss";
import NavigationSideBar from "../../NavigationSideBar";
import NotificationSideBar from "../../NotificationSideBar";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import useWindowSize from "../../../hooks/useWindowSize";
import { closeNotificationBar, closeSidebar } from "../../../store/slices";
import { useEffect } from "react";

const Layout = ({ children }) => {
  const { width: windowSize } = useWindowSize();
  const { showNotificationBar, showSidebar, mode } = useSelector(
    (state) => state?.uiTheme
  );
  const dispatch = useDispatch();
  const sidebarFullWidth = 240;
  const notificationFullWidth = 280;
  const sidebarWidth = showSidebar ? sidebarFullWidth : 0;
  const notificationWidth = showNotificationBar ? notificationFullWidth : 0;

  const transitionSettings = {
    type: "spring",
    stiffness: 150,
    damping: 25,
  };

  useEffect(() => {
    if (windowSize < 991) {
      if (windowSize < 991) {
        dispatch(closeSidebar());
        dispatch(closeNotificationBar());
      }
    }
  }, [windowSize]);

  return (
    <div className={styles.layoutContainer}>
      <motion.div
        className={`${styles.sidebar} ${
          mode === "light" ? styles.light : styles.dark
        }`}
        animate={{ width: sidebarWidth }}
        transition={transitionSettings}
      >
        <NavigationSideBar />
      </motion.div>

      <motion.div
        className={styles.middleSection}
        animate={{
          width:
            windowSize > 991
              ? `calc(100vw - ${sidebarWidth + notificationWidth}px)`
              : "100%",
        }}
        transition={transitionSettings}
        onClick={() => {
          if (windowSize < 991) {
            dispatch(closeSidebar());
            dispatch(closeNotificationBar());
          }
        }}
      >
        <TopBar />
        <motion.div
          className={styles.child}
          animate={{
            width:
              windowSize > 991
                ? `calc(100vw - ${sidebarWidth + notificationWidth}px)`
                : "100%",
          }}
          transition={transitionSettings}
        >
          {children}
        </motion.div>
      </motion.div>

      <motion.div
        className={`${styles.notificationSidebar} ${
          mode === "light" ? styles.light : styles.dark
        }`}
        animate={{ width: notificationWidth }}
        transition={transitionSettings}
      >
        <NotificationSideBar />
      </motion.div>
    </div>
  );
};

export default Layout;
