import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./componet/Navbar";
import Home from "./componet/Home";
import ProductList from "./componet/ProductList";
import ProductPage from "./componet/ProductPage";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Profile from "./componet/Profile";
import SellPage from "./componet/SellPage";
// import LoginPage from "./componet/LoginPage";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/ProductPage" element={<ProductPage />} />
          <Route path="/ProductList" element={<ProductList />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/SellPage" element={<SellPage />} />
          {/* <Route path="/LoginPage" element={<LoginPage />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
