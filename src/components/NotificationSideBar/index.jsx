import { useSelector } from "react-redux";
import styles from "./notificationSideBar.module.scss";
import {
  activitiesList,
  contactList,
  notificationsList,
} from "../../constants/notificationSidebar";

const NotificationSideBar = () => {
  const { uiTheme } = useSelector((state) => state);

  return (
    <div
      className={`${styles.notificationSidebarContainer} ${
        uiTheme.mode === "light" ? styles.light : styles.dark
      }`}
    >
      <div className={styles.notificationSection}>
        <p className={uiTheme.mode === "light" ? styles.light : styles.dark}>
          Notifications
        </p>

        {notificationsList?.map((item, index) => {
          return (
            <div className={styles.individualNotificationWrapper}>
              <div className={styles.iconWrapper}>{item?.icon}</div>
              <div className={styles.contentSection}>
                <p
                  className={
                    uiTheme.mode === "light" ? styles.light : styles.dark
                  }
                >
                  {item?.title}
                </p>
                <span
                  className={
                    uiTheme.mode === "light" ? styles.light : styles.dark
                  }
                >
                  {item?.desc}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className={styles.notificationSection}>
        <p className={uiTheme.mode === "light" ? styles.light : styles.dark}>
          Activities
        </p>

        {activitiesList?.map((item, index, arr) => {
          return (
            <div
              className={`${styles.individualNotificationWrapper} ${styles.activity}`}
              key={index}
            >
              <div className={styles.iconWrapper}>
                <img src={item?.icon} alt={`asd +${item?.icon}`} />

                {index !== arr.length - 1 ? (
                  <div
                    className={`${styles.line} ${
                      uiTheme.mode === "light" ? styles.light : styles.dark
                    }`}
                  />
                ) : (
                  ""
                )}
              </div>
              <div className={styles.contentSection}>
                <p
                  className={
                    uiTheme.mode === "light" ? styles.light : styles.dark
                  }
                >
                  {item?.title}
                </p>
                <span
                  className={
                    uiTheme.mode === "light" ? styles.light : styles.dark
                  }
                >
                  {item?.desc}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className={styles.notificationSection}>
        <p className={uiTheme.mode === "light" ? styles.light : styles.dark}>
          Contacts
        </p>

        {contactList?.map((item, index, arr) => {
          return (
            <div
              className={`${styles.individualNotificationWrapper} ${styles.contacts}`}
              key={index}
            >
              <div className={styles.iconWrapper}>
                <img src={item?.icon} alt={item?.title} />
              </div>
              <div className={styles.contentSection}>
                <p
                  className={
                    uiTheme.mode === "light" ? styles.light : styles.dark
                  }
                >
                  {item?.title}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NotificationSideBar;
