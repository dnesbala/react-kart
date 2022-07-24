import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <div className="card text-center p-3" style={{ width: "18rem" }}>
      <img
        src={product.image}
        className="w-50 d-block mx-auto"
        alt={product.title}
      />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text fw-bold">${product.price}</p>
        <Link to={`/products/${product.id}`} className="btn btn-primary">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default Product;
