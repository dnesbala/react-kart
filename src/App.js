import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Products from "./components/Products/Products";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
