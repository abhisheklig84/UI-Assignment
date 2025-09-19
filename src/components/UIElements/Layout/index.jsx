import TopBar from "../../TopBar";
import styles from "./layout.module.scss";
import NavigationSideBar from "../../NavigationSideBar";
import NotificationSideBar from "../../NotificationSideBar";

const Layout = ({ children }) => {
  return (
    <div className={styles.layoutContainer}>
      <NavigationSideBar />
      <div className={styles.middleSection}>
        <TopBar />
        {children}
      </div>
      <NotificationSideBar />
    </div>
  );
};

export default Layout;
