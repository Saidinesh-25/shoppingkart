import {
  Box,
  Button,
  Flex,
  HStack,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
type paymentInfo = {
  address: string;
  zip: number;
  phone: number;
  sixteenDigitNumber: number;
  date: string;
  name: string;
  cvv: number;
};

const Payments = () => {
  const [paymentInfo, setPaymentInfo] = useState<paymentInfo>({
    address: "",
    zip: 0,
    phone: 0,
    sixteenDigitNumber: 0,
    date: "",
    name: "",
    cvv: 0,
  });
  const handleData = (e: any) => {
    e.preventDefault();
    const { name, value } = e.target;
    setPaymentInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(paymentInfo);
  };

  return (
    <form onSubmit={handleData}>
      <Box
        h="full"
        display="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
      >
        <Box p="5" w={{ base: "100%", md: "60%", lg: "40%" }}>
          <Box fontSize="xl" fontWeight="bold" mb="4">
            Delivery Address
          </Box>
          <Input
            type="text"
            name="address"
            value={paymentInfo.address}
            borderColor="gray.300"
            onChange={handleData}
            mb="4"
            placeholder="Enter your address"
          />
        </Box>

        <Box
          p="5"
          w={{ base: "100%", md: "60%", lg: "40%" }}
          display="flex"
          flexDir="row"
        >
          <Box w="50%" mr="2">
            <Box fontSize="xl" fontWeight="bold" mb="4">
              Phone Number
            </Box>
            <Input
              type="number"
              name="phone"
              value={paymentInfo.phone === 0 ? "" : paymentInfo.phone}
              borderColor="gray.300"
              onChange={handleData}
              placeholder="Enter phone number"
            />
          </Box>

          <Box w="50%" ml="2">
            <Box fontSize="xl" fontWeight="bold" mb="4">
              ZIP Code
            </Box>
            <Input
              type="number"
              name="zip"
              value={paymentInfo.zip === 0 ? "" : paymentInfo.zip}
              borderColor="gray.300"
              onChange={handleData}
              placeholder="Enter ZIP code"
            />
          </Box>
        </Box>

        <Box p="5" w={{ base: "100%", md: "60%", lg: "40%" }}>
          <Box fontSize="xl" fontWeight="bold" mb="4">
            Payment Details
          </Box>
          <Box mb="4" display="flex" flexDir="row">
            <Box w="50%" mr="2">
              <Box fontSize="md" fontWeight="bold" mb="2">
                Card Number
              </Box>
              <Input
                type="number"
                name="sixteenDigitNumber"
                value={
                  paymentInfo.sixteenDigitNumber === 0
                    ? ""
                    : paymentInfo.sixteenDigitNumber
                }
                borderColor="gray.300"
                onChange={handleData}
                placeholder="Enter 16 digit card number"
              />
            </Box>

            <Box w="50%" ml="2">
              <Box fontSize="md" fontWeight="bold" mb="2">
                Expiry Date
              </Box>
              <Input
                type="text"
                name="date"
                value={paymentInfo.date}
                borderColor="gray.300"
                onChange={handleData}
                placeholder="MM/YY"
              />
            </Box>
          </Box>

          <Box mb="4" display="flex" flexDir="row">
            <Box w="50%" mr="2">
              <Box fontSize="md" fontWeight="bold" mb="2">
                Card Holder Name
              </Box>
              <Input
                type="text"
                name="name"
                value={paymentInfo.name}
                borderColor="gray.300"
                onChange={handleData}
                placeholder="Enter card holder name"
              />
            </Box>

            <Box w="50%" ml="2">
              <Box fontSize="md" fontWeight="bold" mb="2">
                CVV
              </Box>
              <Input
                type="text"
                name="cvv"
                value={paymentInfo.cvv === 0 ? "" : paymentInfo.cvv}
                borderColor="gray.300"
                onChange={handleData}
                placeholder="Enter CVV"
              />
            </Box>
          </Box>
        </Box>

        <Flex
          p="5"
          w={{ base: "100%", md: "60%", lg: "40%" }}
          justifyContent="space-between"
        >
          <Button type="submit">Pay Now</Button>
          <Button>Cancel</Button>
        </Flex>
      </Box>
    </form>
  );
};

export default Payments;
