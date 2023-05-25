import React, { useContext, useState } from "react";
import { AppContext } from "../_app";
import {
  VStack,
  HStack,
  Button,
  Box,
  Text,
  Center,
  Flex,
} from "@chakra-ui/react";

const Cart = ({ value }: any) => {
  console.log(value, "cartdatafromserver");

  const [cartItems, setCartItems] = useState();

  return (
    <VStack>
      {" "}
      <Center>
        {" "}
        <Box
          w={{ sm: "100%", lg: "70%", base: "100%" }}
          h="40px"
          bg="rosybrown"
          textAlign={"center"}
          justifyItems={"center"}
          alignItems={"center"}
          alignContent={"center"}
          pt="6px"
        >
          My Cart
        </Box>
        <Center>
          <Box w="50px" h="50px" bg="yellow.100"></Box>
        </Center>
      </Center>
    </VStack>
  );
};

export default Cart;
export const getServerSideProps = async () => {
  const res = await fetch(`https://pdata.onrender.com/cart`);
  const value = await res.json();
  console.log(value, "fromserver");
  return {
    props: {
      value: value,
    },
  };
};
