import Header from "./Layout/Header";
import ProductCard from "./components/productCard";
import ProductDetail from "./components/ProductDetail";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header>
        <Routes>
          <Route path="/" element={<ProductCard />} />
          <Route path="/home" element={<ProductCard />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
        </Routes>
      </Header>
    </Router>
  );
}

export default App;
