/* eslint-disable @next/next/no-img-element */
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
  Spacer,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

const Cart = ({ value }: any) => {
  console.log(value, "cartdatafromserver");
  const router = useRouter();

  const [cartItems, setCartItems] = useState(value);
  const defaultTotal = cartItems.reduce(
    (acc: any, obj: any) => acc + Number(obj.price),
    0
  );
  const idsForDelete = value.map((item: any) => item.id);

  const [total, setTotal] = useState(defaultTotal);

  console.log(cartItems, "final");

  const increaseCount = (id: any, itemcount: any) => {
    const updatedItems = cartItems.map((item: any) => {
      if (item.id === id) {
        const updatedTotal = total + Number(item.price);
        setTotal(updatedTotal);
        return {
          ...item,
          count: itemcount + 1,
        };
      }
      return item;
    });

    setCartItems(updatedItems);
  };
  const decreaseCount = (id: any, itemcount: any, item: any) => {
    console.log(item.price, "omgitem");

    const updatedItems = cartItems.map((item: any) => {
      if (itemcount > 0) {
        if (item.id === id) {
          const updatedTotal = total - Number(item.price);
          setTotal(updatedTotal);
          return {
            ...item,
            count: itemcount - 1,
          };
        }
      }
      return item;
    });

    setCartItems(updatedItems);
  };
  console.log(cartItems, "afterset");

  const handleCheckout = async () => {
    const latestOrders = { cartItems };

    try {
      const res = await fetch(`https://pdata.onrender.com/orders`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(latestOrders),
      });
      const value = await res.json();
      console.log(value);
    } catch (error) {
      console.log(error);
    }
    for (let i = 0; i < idsForDelete.length; i++) {
      const id = idsForDelete[i];
      try {
        const res2 = await fetch(`https://pdata.onrender.com/cart/${id}`, {
          method: "DELETE",
        });
        const data = await res2.json();
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    }
    router.push("/users/payments");
  };

  return (
    <Box display="flex" flexDirection="column" alignItems={"center"}>
      <Box
        w={{ sm: "100%", lg: "70%", base: "100%" }}
        h="40px"
        bg="rosybrown"
        textAlign="center"
        justifyItems="center"
        alignItems="center"
        alignContent="center"
        pt="6px"
      >
        My Cart
      </Box>
      <VStack mt={10} spacing={10}>
        {cartItems.map((item: any, index: number) => (
          <Box
            display="flex"
            flexDirection="column"
            borderTop={"1px solid #D3D3D3"}
            key={item.id}
            p="2%"
          >
            <HStack gridGap={10}>
              {" "}
              <Box w="250px" h="250px" overflow={"hidden"}>
                <img src={item.images} width="100%" alt="image" />
              </Box>
              <Box w="550px" h="250px">
                <VStack alignItems={"self-start"} px={5}>
                  <Box>{item.title}</Box>
                  <Box>{item.price}</Box>
                  <Box>{item.category}</Box>
                  <Box>{item.size}</Box>
                  <Box>{item.colour}</Box>
                </VStack>
              </Box>
              <Box>
                <Flex align="center">
                  <Button
                    size="sm"
                    rounded="full"
                    marginRight={2}
                    onClick={() => decreaseCount(item.id, item.count, item)}
                  >
                    -
                  </Button>
                  <Text fontSize="xl" fontWeight="bold" marginRight={2}>
                    {item.count}
                  </Text>
                  <Button
                    size="sm"
                    rounded="full"
                    marginLeft={2}
                    onClick={() => increaseCount(item.id, item.count)}
                  >
                    +
                  </Button>
                </Flex>
              </Box>
            </HStack>
          </Box>
        ))}
        <Box
          borderTop={"1px dotted black"}
          w={{ sm: "100%", lg: "70%", base: "100%" }}
        >
          <Box>Total: {total}</Box>
          <Box>offers: </Box>
        </Box>
      </VStack>
      <Box>
        <Button onClick={handleCheckout}>Checkout</Button>
      </Box>
    </Box>
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
