import TopBar from "../../TopBar";
import styles from "./layout.module.scss";
import NavigationSideBar from "../../NavigationSideBar";
import NotificationSideBar from "../../NotificationSideBar";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const Layout = ({ children }) => {
  const { showNotificationBar, showSidebar } = useSelector(
    (state) => state?.uiTheme
  );

  const sidebarFullWidth = 240;
  const notificationFullWidth = 280;

  const sidebarWidth = showSidebar ? sidebarFullWidth : 0;
  const notificationWidth = showNotificationBar ? notificationFullWidth : 0;

  return (
    <div className={styles.layoutContainer}>
      <motion.div
        className={styles.sidebar}
        animate={{ width: sidebarWidth }}
        transition={{ type: "tween", duration: 0.3 }}
      >
        <NavigationSideBar />
      </motion.div>

      <motion.div
        className={styles.middleSection}
        animate={{
          width: `calc(100vw - ${sidebarWidth + notificationWidth}px)`,
        }}
        transition={{ type: "tween", duration: 0.3 }}
      >
        <TopBar />
        {children}
      </motion.div>

      <motion.div
        className={styles.notificationSidebar}
        animate={{ width: notificationWidth }}
        transition={{ type: "tween", duration: 0.3 }}
      >
        <NotificationSideBar />
      </motion.div>
    </div>
  );
};

export default Layout;
