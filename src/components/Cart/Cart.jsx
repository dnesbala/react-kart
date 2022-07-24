import React from "react";

const Cart = ({ cart }) => {
  return (
    <div>
      Cart
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">S.N.</th>
            <th scope="col">Image</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => {
            return (
              <tr>
                <th scope="row">{item.id}</th>
                <td>
                  <img src={item.image} style={{ width: "30px" }} alt="" />
                </td>
                <td>{item.title}</td>
                <td>${item.price}</td>
                <td>X</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
