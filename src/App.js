import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashBoard from "./pages/Dashboard";
import styles from "./app.module.scss";
import { useSelector } from "react-redux";
import Layout from "./components/UIElements/Layout";

const App = () => {
  const { uiTheme } = useSelector((state) => state);
  return (
    <Router>
      <div
        className={`${styles.app} ${
          uiTheme?.mode === "dark" ? styles.dark : styles.light
        }`}
      >
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <DashBoard />
              </Layout>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
