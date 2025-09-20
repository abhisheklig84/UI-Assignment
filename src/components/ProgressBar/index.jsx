import React, { useEffect, useState } from "react";
import styles from "./progress.module.scss";
import { useSelector } from "react-redux";

const ProgressBar = ({ progress = 0 }) => {
  const { uiTheme } = useSelector((state) => state);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(progress);
  }, [progress]);

  console.log(progress);

  return (
    <div
      className={styles.container}
      style={{
        backgroundColor: uiTheme.mode === "light" ? "#CFDFEB" : "#687681",
      }}
    >
      <div
        className={styles.filler}
        style={{
          width: `${progress * 100}%`,
          backgroundColor: "#A8C5DA",
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;

//
