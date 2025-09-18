import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import DashBoard from "./pages/Dashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashBoard />} />
      </Routes>
    </Router>
  );
};

export default App;
