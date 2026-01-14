import React from "react";

const CartItem = () => {
  return (
    <div>
      <h2>Shopping Cart</h2>

      <div className="cart-item">
        <img src="plant1.jpg" alt="Monstera" />
        <h4>Monstera</h4>
        <p>Unit Price: $20</p>
        <p>Total: $40</p>

        <button>-</button>
        <span>2</span>
        <button>+</button>

        <button>Remove</button>
      </div>

      <h3>Total Cart Amount: $40</h3>

      <button>Checkout (Coming Soon)</button>
      <br />
      <button>Continue Shopping</button>
    </div>
  );
};

export default CartItem;
