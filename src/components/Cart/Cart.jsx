import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cart, setCart }) => {
  const calculateSubtotal = () => {
    return cart.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
  };

  const removeFromCart = (item) => {
    const filteredProducts = cart.filter((product) => item.id !== product.id);
    setCart(filteredProducts);
  };

  return (
    <div className="mx-3">
      <h4>Cart</h4>
      {cart.length <= 0 ? (
        <h5>No Items in the Cart</h5>
      ) : (
        <div className="row">
          <div className="col-lg-8 col-md-12 col-12">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">S.N.</th>
                  <th scope="col">ITEM</th>
                  <th scope="col">UNIT PRICE</th>
                  <th scope="col">QUANTITY</th>
                  <th scope="col">TOTAL</th>
                  <th scope="col">REMOVE</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => {
                  return (
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>
                        <img
                          className="item-img"
                          src={item.image}
                          style={{ width: "20px" }}
                          alt={item.title}
                        />
                        <span className="mx-1"> {item.title}</span>
                      </td>
                      <td>${item.price}</td>
                      <td>{item.quantity}</td>
                      <td>${item.quantity * item.price}</td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => removeFromCart(item)}
                        >
                          X
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="col-lg-4 col-md-12">
            <div class="card" style={{ width: "80%" }}>
              <div class="card-body">
                <h4>SUMMARY</h4>
                <p>Subtotal : ${calculateSubtotal()}</p>
                <p>Shipping Fee : $10</p>
                <p>Total Price : ${calculateSubtotal() + 10} </p>
                <Link to="/" className="btn btn-dark">
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
