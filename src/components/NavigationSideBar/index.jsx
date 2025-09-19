import styles from "./navigationSidebar.module.scss";
import ProfileImage from "../../assets/images/navigationSideBarIcons/profile.png";
import { useSelector } from "react-redux";

import ArrowLineRight from "../../assets/images/navigationSideBarIcons/ArrowLineRight";
import { useState } from "react";
import Accordion from "../Accordian";
import { dashboardList, pageList } from "../../constants/navigationSideBar";

const NavigationSideBar = () => {
  const { uiTheme } = useSelector((state) => state);

  const [selectedDashboard, setSelectedDashboard] = useState(0);
  const [selectedPage, setSelectedPage] = useState(0);

  return (
    <div
      className={`${styles.navigationSideBarContainer} ${
        uiTheme.mode === "light" ? styles.light : styles.dark
      }`}
    >
      <div className={styles.profileSection}>
        <img src={ProfileImage} alt="ProfileImage" />
        <p
          className={
            uiTheme.mode === "light" ? styles.lightText : styles.darkText
          }
        >
          ByeWind
        </p>
      </div>

      <div className={styles.favouriteAndRecentContainer}>
        <div className={styles.topContainer}>
          <p
            className={` ${
              uiTheme.mode === "light" ? styles.light : styles.dark
            } ${styles.active}`}
          >
            Favorites
          </p>
          <p
            className={` ${
              uiTheme.mode === "light" ? styles.light : styles.dark
            }`}
          >
            Recently
          </p>
        </div>

        <div className={styles.bottomContainer}>
          <p className={uiTheme.mode === "light" ? styles.light : styles.dark}>
            <span />
            Overview
          </p>
          <p className={uiTheme.mode === "light" ? styles.light : styles.dark}>
            <span />
            Projects
          </p>
        </div>
      </div>

      <div className={styles.dashBoardSection}>
        <div className={styles.topSectiom}>
          <p className={uiTheme.mode === "light" ? styles.light : styles.dark}>
            Dashboards
          </p>
        </div>

        <div className={styles.dashboardListingSection}>
          {dashboardList(uiTheme)?.map((item, index) => {
            return (
              <div
                key={index}
                className={`${styles.individualItemInList} ${
                  uiTheme.mode === "light" ? styles.light : styles.dark
                }
                ${selectedDashboard === index ? styles.selected : ""}`}
                onClick={() => {
                  setSelectedDashboard(index);
                }}
              >
                <div
                  className={`${styles.whiteLine} ${
                    uiTheme.mode === "light" ? styles.light : styles.dark
                  } ${selectedDashboard === index ? styles.show : styles.hide}`}
                />
                <div
                  className={
                    selectedDashboard !== index
                      ? styles.showArrow
                      : styles.hideArrow
                  }
                >
                  <ArrowLineRight
                    fill={uiTheme.mode === "dark" ? "#fff" : "#1C1C1C"}
                  />
                </div>
                {item?.icon}
                <p>{item?.title}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.dashBoardSection}>
        <div className={styles.topSectiom}>
          <p className={uiTheme.mode === "light" ? styles.light : styles.dark}>
            Pages
          </p>
        </div>

        <div className={styles.pageListSection}>
          {pageList(uiTheme)?.map((item, index) => {
            return (
              <div key={index}>
                <Accordion
                  title={
                    <div
                      className={`${styles.individualPageListTitle} ${
                        uiTheme.mode === "light" ? styles.light : styles.dark
                      }`}
                    >
                      <div
                        className={
                          selectedPage === index
                            ? styles.rotateArrow
                            : styles.rotateReverse
                        }
                      >
                        <ArrowLineRight
                          fill={uiTheme.mode === "dark" ? "#fff" : "#1C1C1C"}
                        />
                      </div>
                      {item?.icon}
                      {item?.title}
                    </div>
                  }
                  isOpen={selectedPage === index}
                  setIsOpen={() => {
                    if (selectedPage === index) {
                      setSelectedPage(null);
                    } else {
                      setSelectedPage(index);
                    }
                  }}
                >
                  {pageList(uiTheme)?.[selectedPage]?.subCategories?.map(
                    (subItem, index) => {
                      return (
                        <div
                          key={index}
                          className={`${styles.subChild} ${
                            uiTheme.mode === "light"
                              ? styles.light
                              : styles.dark
                          }`}
                        >
                          {subItem}
                        </div>
                      );
                    }
                  )}
                </Accordion>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NavigationSideBar;
