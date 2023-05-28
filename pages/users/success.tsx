import { Center, Heading, Button, Text, Box } from "@chakra-ui/react";
import { useRouter } from "next/router";

import React from "react";

const Success = () => {
  const router = useRouter();
  const handleRoute = () => {
    router.push("/users/products");
  };
  return (
    <Center h="full">
      <Box
        maxW="400px"
        p="4"
        bgGradient="linear(to-r, teal.500, cyan.500)"
        borderRadius="md"
        boxShadow="xl"
        textAlign="center"
        color="white"
      >
        <Heading as="h2" size="lg" mb="4">
          Your order is placed successfully!
        </Heading>
        <Text fontSize="lg" mb="6">
          Thank you for your purchase.
        </Text>
        <Button colorScheme="whiteAlpha" onClick={handleRoute}>
          Continue Shopping
        </Button>
      </Box>
    </Center>
  );
};

export default Success;
