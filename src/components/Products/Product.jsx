import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <div class="card" style={{ width: "18rem" }}>
      <img src={product.image} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{product.title}</h5>
        <p class="card-text">{product.description.slice(0, 50)}</p>
        <Link to={`/products/${product.id}`} class="btn btn-primary">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default Product;
