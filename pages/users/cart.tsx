import React, { useContext } from "react";
import { AppContext } from "../_app";

const Cart = ({ value }: any) => {
  const { cartItems, setCartItems }: any = useContext(AppContext);
  console.log(cartItems, "whatsincart");

  return <div>Cart</div>;
};

export default Cart;
