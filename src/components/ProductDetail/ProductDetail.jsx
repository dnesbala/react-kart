import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = ({ cart, setCart }) => {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      // https://fakestoreapi.com/products/2
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
    };

    fetchProduct();
  });

  const addToCart = () => {
    setCart([...cart, product]);
  };

  return (
    <div className="row">
      <div className="col-md-4">
        <img src={product.image} className="w-75" alt="..." />
      </div>
      <div className="col-md-8">
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <p>
          Rating : {product.rating ? product.rating.rate : ""} ⭐ (
          {product.rating ? product.rating.count : ""} ratings)
        </p>
        <p>Price : ${product.price}</p>
        <div
          className="d-flex align-items-center justify-content-between my-3"
          style={{ width: "100px" }}
        >
          <button
            className="btn btn-secondary"
            onClick={() => {
              if (quantity > 0) {
                setQuantity(quantity - 1);
              }
            }}
          >
            -
          </button>
          <b>{quantity}</b>
          <button
            className="btn btn-secondary"
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </button>
        </div>
        <button className="btn btn-secondary" onClick={addToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
