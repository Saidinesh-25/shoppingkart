import {
  Box,
  Button,
  HStack,
  Input,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

type paymentInfo = {
  address: string;
  zip: number;
  phone: number;

  sixteendigitnumber: number;
  date: number;
  name: string;
  cvv: number;

  upi: string;
  cod: boolean;
};

const Payments = () => {
  const [paymentInfo, setPaymentInfo] = useState<paymentInfo>({
    address: "",
    zip: 0,
    phone: 0,
    sixteendigitnumber: 0,
    date: 0,
    name: "",
    cvv: 0,
    upi: "",
    cod: false,
  });
  const handleData = (e: any) => {
    const { name, value } = e.target;
    const updatedPayment: any = { ...paymentInfo };

    updatedPayment[name] = value;

    setPaymentInfo(updatedPayment);
    console.log(updatedPayment, "firstconsole");
  };
  return (
    <Box
      h="full"
     
      display={"flex"}
      flexDir={"column"}
      alignItems={"center"}
      justifyItems={"center"}
    >
      <Box
        display={"flex"}
        flexDir={"column"}
        p="5"
       
        w={{ base: "100%", sm: "100%", md: "60%", lg: "60%" }}
      >
        <Box>Delivery Address</Box>
        <Box>
          <Input
            type="text"
            name="address"
            value={paymentInfo.address}
            w={{ base: "100%", sm: "100%", md: "60%", lg: "40%" }}
            borderColor={"1px solid gray"}
            onChange={handleData}
          ></Input>
        </Box>
      </Box>
      <Box
        w={{ base: "100%", sm: "100%", md: "60%", lg: "60%" }}
        h="auto"
        bg="white"
        display={"flex"}
        flexDir={"row"}
        p="5"
      >
        <Box
          w={{ base: "100%", sm: "100%", md: "60%", lg: "60%" }}
          display={"flex"}
          flexDir={"column"}
        >
          <HStack>
            <VStack alignItems={"flex-start"}>
              <Box>ZIP Code</Box>
              <Box>
                <Input
                  type="text"
                  name="zip"
                  value={paymentInfo.zip}
                  w="100%"
                  borderColor={"1px solid gray"}
                  onChange={handleData}
                ></Input>
              </Box>
            </VStack>
            <VStack alignItems={"flex-start"}>
              <Text>Phone Number</Text>
              <Box>
                <Input
                  name="phone"
                  value={paymentInfo.phone}
                  type="text"
                  w="100%"
                  borderColor={"1px solid gray"}
                  onChange={handleData}
                ></Input>
              </Box>
            </VStack>
          </HStack>
        </Box>
      </Box>

      <Box
        w={{ base: "100%", sm: "100%", md: "60%", lg: "60%" }}
        h="350px"
        
        display={"flex"}
        flexDir={"row"}
        p="5"
      >
        <Box
          w={{ base: "100%", sm: "100%", md: "60%", lg: "60%" }}
          display={"flex"}
          flexDir={"column"}
          border={"1px solid red"}
        >
          <Tabs variant="enclosed">
            <TabList>
              <Tab>Credit Card</Tab>
              <Tab>UPI</Tab>
              <Tab>COD</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Box>CREDIT CARD</Box>
                <HStack>
                  <Input
                    type="text"
                    name="sixteendigitnumber"
                    value={paymentInfo.sixteendigitnumber}
                    w={{ base: "100%", sm: "100%", md: "60%", lg: "40%" }}
                    placeholder="16 digit number"
                    borderColor={"1px solid gray"}
                    onChange={handleData}
                  ></Input>

                  <Box w="15px"></Box>

                  <Input
                    type="text"
                    w={{ base: "50%", sm: "50%", md: "30%", lg: "20%" }}
                    placeholder="MM/YY"
                    borderColor={"1px solid gray"}
                    value={paymentInfo.date}
                    name="date"
                    onChange={handleData}
                  ></Input>
                </HStack>
                <HStack mt="5%">
                  <Input
                    type="text"
                    placeholder="Card Holder Name"
                    w={{ base: "100%", sm: "100%", md: "60%", lg: "40%" }}
                    borderColor={"1px solid gray"}
                    value={paymentInfo.name}
                    name="name"
                    onChange={handleData}
                  ></Input>

                  <Box w="15px"></Box>

                  <Input
                    type="text"
                    w={{ base: "50%", sm: "50%", md: "30%", lg: "20%" }}
                    placeholder="CVV"
                    value={paymentInfo.cvv}
                    name="cvv"
                    borderColor={"1px solid gray"}
                    onChange={handleData}
                  ></Input>
                </HStack>
              </TabPanel>
              <TabPanel>
                <HStack>
                  <Input
                    type="text"
                    w={{ base: "100%", sm: "100%", md: "60%", lg: "40%" }}
                    placeholder="UPI ID"
                    borderColor={"1px solid gray"}
                    value={paymentInfo.upi}
                    name="upi"
                    onChange={handleData}
                  ></Input>
                </HStack>
              </TabPanel>
              <TabPanel>
                <Button>Confirm COD</Button>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </Box>
  );
};

export default Payments;
