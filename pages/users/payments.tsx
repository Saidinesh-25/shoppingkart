import { Box, Input } from "@chakra-ui/react";
import React, { useState } from "react";

const Payments = () => {
  const [address, setAddress] = useState<string>("");
  const handleAddress = (e: any) => {
    setAddress(e.target.value);
  };
  return (
    <Box
      h="full"
      bg="red.100"
      display={"flex"}
      flexDir={"column"}
      alignItems={"center"}
      justifyItems={"center"}
    >
      <Box
        display={"flex"}
        flexDir={"column"}
        p="5"
        bg="green.100"
        w={{ base: "100%", sm: "100%", md: "60%", lg: "60%" }}
      >
        <Box>Delivery Address</Box>
        <Box>
          <Input
            type="text"
            value={address}
            w={{ base: "100%", sm: "100%", md: "60%", lg: "40%" }}
            onChange={handleAddress}
            borderColor={"1px solid gray"}
          ></Input>
        </Box>
      </Box>
      <Box
        w={{ base: "100%", sm: "100%", md: "60%", lg: "60%" }}
        h="auto"
        bg="white"
      >
        HI
      </Box>
    </Box>
  );
};

export default Payments;
