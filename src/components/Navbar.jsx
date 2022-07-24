import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
      <div class="container-fluid">
        <Link to="/" class="navbar-brand">
          ReactKart
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link to="/" class="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/cart" class="nav-link">
                Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
