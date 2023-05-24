/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";

const Home: NextPage = () => {
  const router = useRouter();
  const handleRoute = () => {
    router.push("/users/products");
  };
  return (
    <Box>
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        p={8}
      >
        <Box flex="1">
          <Heading size="xl" mb={4}>
            Welcome to our Shopping store
          </Heading>
          <Text fontSize="lg" mb={6}>
            Explore our wide range of apparels.
          </Text>
          <Button colorScheme="blue" size="lg" onClick={handleRoute}>
            Shop Now
          </Button>
        </Box>
        <Box flex="0.5" mt={{ base: 8, md: 0 }}>
          <img
            src="https://bestmediainfo.com/uploads/2022/08/1659421847.eKart.jpg"
            alt="Mobile Image"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Home;
