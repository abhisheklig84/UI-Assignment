import styles from "./mapchart.module.scss";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import ProgressBar from "../ProgressBar";
import { locations } from "../../constants/dashboard";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json";

const MapChart = () => {
  const { uiTheme } = useSelector((state) => state);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); // 1 sec delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`${styles.mapSection} ${
        uiTheme.mode === "light" ? styles.light : styles.dark
      }`}
    >
      <h2 className={uiTheme.mode === "light" ? styles.light : styles.dark}>
        Revenue by Location
      </h2>

      {loading ? (
        <div className={styles.loadingContainer}>Loading Map...</div>
      ) : (
        <div className={styles.mapContainer}>
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{ scale: 120, center: [0, 50] }}
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={uiTheme.mode === "light" ? "#CFDFEB" : "#687681"}
                    stroke="#374151"
                    strokeWidth={0.5}
                  />
                ))
              }
            </Geographies>

            {locations.map(({ name, coordinates }) => (
              <Marker key={name} coordinates={coordinates}>
                <circle
                  r={8}
                  fill={uiTheme.mode === "light" ? "#1c1c1c" : "#1e1e1e"}
                  stroke="#fff"
                  strokeWidth={3}
                />
              </Marker>
            ))}
          </ComposableMap>
        </div>
      )}

      <div className={styles.countryList}>
        {locations?.map((item, index) => {
          return (
            <div className={styles.individualList}>
              <div className={styles.topContainer}>
                <p
                  className={
                    uiTheme.mode === "light" ? styles.light : styles.dark
                  }
                >
                  {item?.name}
                </p>
                <p
                  className={
                    uiTheme.mode === "light" ? styles.light : styles.dark
                  }
                >
                  {item?.value / 1000}k
                </p>
              </div>
              <ProgressBar progress={+(item?.value / 100000)} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MapChart;
