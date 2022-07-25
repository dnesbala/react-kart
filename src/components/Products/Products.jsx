import React, { useState, useEffect } from "react";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
      setIsLoading(false);
    };

    fetchProducts();
  }, []);

  return isLoading ? (
    <h4>Loading...</h4>
  ) : (
    <div className="container">
      <h4>Products</h4>
      <div className="d-flex flex-wrap gap-3">
        {products.map((product, index) => {
          return <Product product={product} />;
        })}
      </div>
    </div>
  );
};

export default Products;
