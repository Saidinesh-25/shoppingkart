import React from "react";

const Cart = ({ value }: any) => {
  console.log("cartpagedata", value);
  return <div>Cart</div>;
};

export default Cart;
export async function getServerSideProps() {
  const res = await fetch(`https://pdata.onrender.com/cart`);
  const value = await res.json();
  console.log(value, "cartpagefromserver");
  return {
    props: {
      value: value,
    },
  };
}
