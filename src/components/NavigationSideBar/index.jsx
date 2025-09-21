import styles from "./navigationSidebar.module.scss";
import ProfileImage from "../../assets/images/navigationSideBarIcons/profile.png";
import { useDispatch, useSelector } from "react-redux";

import ArrowLineRight from "../../assets/images/navigationSideBarIcons/ArrowLineRight";
import { useState } from "react";
import Accordion from "../Accordian";
import { dashboardList, pageList } from "../../constants/navigationSideBar";
import { useNavigate } from "react-router-dom";
import { changeDashBoardIndex, closeSidebar } from "../../store/slices";
import Add from "../../assets/images/orderIcons/Add";

const NavigationSideBar = () => {
  const { uiTheme } = useSelector((state) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [selectedPage, setSelectedPage] = useState(null);

  return (
    <div
      className={`${styles.navigationSideBarContainer} ${
        uiTheme.mode === "light" ? styles.light : styles.dark
      }`}
    >
      <div
        className={`${styles.closeBtn} `}
        onClick={() => dispatch(closeSidebar())}
      >
        <Add
          fill={uiTheme?.mode === "light" ? "#1C1C1C" : "white"}
          height={30}
          width={30}
        />
      </div>
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
                ${
                  uiTheme?.selectedDashBoardIndex === index
                    ? styles.selected
                    : ""
                }`}
                onClick={() => {
                  if (index === 0) {
                    dispatch(closeSidebar());
                    navigate("/");
                    dispatch(changeDashBoardIndex(index));
                  }
                  if (index === 1) {
                    navigate("/order");
                    dispatch(changeDashBoardIndex(index));
                    dispatch(closeSidebar());
                  }
                }}
              >
                <div
                  className={`${styles.whiteLine} ${
                    uiTheme.mode === "light" ? styles.light : styles.dark
                  } ${
                    uiTheme?.selectedDashBoardIndex === index
                      ? styles.show
                      : styles.hide
                  }`}
                />
                <div
                  className={
                    uiTheme?.selectedDashBoardIndex !== index
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
