/* eslint-disable @next/next/no-img-element */
import React, { useContext, useState } from "react";
import { AppContext } from "../_app";
import {
  VStack,
  HStack,
  Button,
  Box,
  Text,
  Flex,
  Input,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

const Cart = ({ value }: any) => {
  console.log(value, "cartdatafromserver");
  const router = useRouter();

  const [cartItems, setCartItems] = useState(value);
  const { setCartState }: any = useContext(AppContext);
  const [couponCode, setCouponCode] = useState<string>("");
  const defaultTotal = cartItems.reduce(
    (acc: any, obj: any) => acc + Number(obj.price),
    0
  );
 

  const [total, setTotal] = useState(defaultTotal);
  const shipping = 100;
  let finalTotal = total + shipping;

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
    setCartState(cartItems);

    router.push("/users/payments");
  };
  const handleCouponCode = (e: any) => {
    setCouponCode(e.target.value);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems={"center"}
      overflowX={"auto"}
      bg="#FAFBF4"
    >
      <VStack
        mt={10}
        spacing={10}
        w={{ sm: "90%", lg: "80%", base: "fit-content" }}
        bg={"white"}
      >
        <Box
          w="full"
          h="40px"
          bg="#FAFBF4"
          textAlign="center"
          justifyItems="center"
          alignItems="center"
          alignContent="center"
          pt="6px"
        >
          My Cart
        </Box>
        {cartItems.map((item: any) => (
          <Box
            display="flex"
            flexDirection="column"
            borderTop={"1px solid #D3D3D3"}
            key={item.id}
            p="2%"
            w={{ sm: "90%", lg: "80%", base: "100%" }}
          >
            <HStack gridGap={{ base: 2, sm: 5, lg: 10 }}>
              {" "}
              <Box
                w={{ sm: "100px", lg: "150px", base: "100px" }}
                border={"1px solid gray"}
                overflow={"hidden"}
                h={{ sm: "100px", lg: "150px", base: "100px" }}
              >
                <img src={item.images} width="100%" height="auto" alt="image" />
              </Box>
              <Box flex={{ base: 1, md: 2 }}>
                <VStack
                  w={{ sm: "90%", lg: "80%", base: "90%" }}
                  alignItems={"start"}
                  px={2}
                >
                  <Box
                    overflowX={"clip"}
                    fontSize={{ sm: "14px", lg: "16px", base: "10px" }}
                    fontWeight={800}
                    textOverflow={"ellipsis"}
                    w={{ base: "100px", sm: "100%", lg: "150%" }}
                    // h={{ base: "65px" }}
                  >
                    {item.title}
                  </Box>
                  <Box
                    fontWeight={700}
                    fontSize={{ sm: "14px", lg: "16px", base: "10px" }}
                    overflowX={"clip"}
                    textOverflow={"ellipsis"}
                    display={"flex"}
                  >
                    Price: <Text fontWeight={500}>₹{item.price}</Text>
                  </Box>
                  <Box
                    display={{ base: "none", sm: "none", lg: "flex" }}
                    fontSize={{ sm: "14px", lg: "16px", base: "10px" }}
                    fontWeight={700}
                  >
                    Category: <Text fontWeight={500}>{item.category}</Text>
                  </Box>
                  <Box
                    fontSize={{ sm: "14px", lg: "16px", base: "10px" }}
                    fontWeight={700}
                    display={"flex"}
                  >
                    Size: <Text fontWeight={500}>{item.size}</Text>
                  </Box>
                  <Box
                    display={{ base: "none", sm: "flex", lg: "flex" }}
                    fontSize={{ sm: "14px", lg: "16px", base: "10px" }}
                    fontWeight={700}
                  >
                    Colour: <Text fontWeight={500}>{item.colour}</Text>
                  </Box>
                </VStack>
              </Box>
              <Box alignSelf={"flex-end"}>
                <Flex align="center">
                  <Box
                    w="20px"
                    bg="blue.100"
                    h="20px"
                    borderRadius={"50%"}
                    cursor={"pointer"}
                    justifyContent="center"
                    display="flex"
                    alignItems="center"
                    onClick={() => decreaseCount(item.id, item.count, item)}
                  >
                    <Text fontSize={{ sm: "14px", lg: "16px", base: "10px" }}>
                      -
                    </Text>
                  </Box>
                  <Text
                    fontSize={{ sm: "14px", lg: "16px", base: "10px" }}
                    fontWeight="bold"
                    marginRight={0}
                    px={6}
                  >
                    {item.count}
                  </Text>
                  <Box
                    w="20px"
                    bg="blue.100"
                    h="20px"
                    borderRadius={"50%"}
                    cursor={"pointer"}
                    justifyContent="center"
                    display="flex"
                    alignItems="center"
                    onClick={() => increaseCount(item.id, item.count)}
                  >
                    <Text fontSize={{ sm: "14px", lg: "16px", base: "10px" }}>
                      {" "}
                      +
                    </Text>
                  </Box>
                </Flex>
              </Box>
            </HStack>
          </Box>
        ))}
      </VStack>

      <Box
        w={{ sm: "60%", lg: "30%", base: "calc(100%-30px)" }}
        bg="#D9E4EC"
        mt="50px"
        p={10}
        borderRadius={"10%"}
      >
        <Box display="flex" mt="3" w="100%">
          <HStack justifyContent="space-between" w="100%">
            <Input
              placeholder="Coupon code"
              type="text"
              border="1px solid gray"
              value={couponCode}
              onChange={handleCouponCode}
            />
            <Button>Apply</Button>
          </HStack>
        </Box>
        <Box>
          <HStack justifyContent="space-between">
            <Box
              textAlign={{ base: "left", lg: "right" }}
              fontSize={{ sm: "14px", lg: "16px", base: "10px" }}
              fontWeight={800}
            >
              Subtotal:
            </Box>
            <Box
              textAlign={{ base: "left", lg: "right" }}
              fontSize={{ sm: "14px", lg: "16px", base: "10px" }}
              fontWeight={500}
            >
              ₹{total}
            </Box>
          </HStack>

          <HStack justifyContent="space-between">
            <Box
              textAlign={{ base: "left", lg: "right" }}
              fontSize={{ sm: "14px", lg: "16px", base: "10px" }}
              fontWeight={800}
            >
              Shipping:
            </Box>
            <Box
              textAlign={{ base: "left", lg: "right" }}
              fontSize={{ sm: "14px", lg: "16px", base: "10px" }}
              fontWeight={500}
            >
              ₹{shipping}
            </Box>
          </HStack>
          <HStack
            justifyContent="space-between"
            borderTop="1px dotted black"
            mt="4"
          >
            <Box
              textAlign={{ base: "left", lg: "right" }}
              fontSize={{ sm: "14px", lg: "16px", base: "10px" }}
              fontWeight={900}
            >
              Total
            </Box>
            <Box
              textAlign={{ base: "left", lg: "right" }}
              fontSize={{ sm: "14px", lg: "16px", base: "10px" }}
              fontWeight={500}
            >
              ₹{finalTotal}
            </Box>
          </HStack>
          <Box mt={3}>
            <Button w="full" onClick={handleCheckout}>
              Checkout
            </Button>
          </Box>
        </Box>
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
