import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";

function App() {
  const [cart, setCart] = useState([]);

  console.log(cart);

  return (
    <BrowserRouter>
      <Navbar cart={cart} />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route
          path="/products/:id"
          element={<ProductDetail cart={cart} setCart={setCart} />}
        />
        <Route path="/cart" element={<Cart cart={cart} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
