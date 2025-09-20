import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashBoard from "./pages/Dashboard";
import OrderList from "./pages/OrderList";
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
        <Layout>
          <Routes>
            <Route path="/" element={<DashBoard />} />
          </Routes>
          <Routes>
            <Route path="/order" element={<OrderList />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
};

export default App;
