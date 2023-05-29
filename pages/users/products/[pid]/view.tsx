/* eslint-disable @next/next/no-img-element */
import {
  Box,
  Flex,
  VStack,
  Text,
  Radio,
  RadioGroup,
  Select,
  HStack,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { products } from "../../../../types/types";

const View = ({ value }: { value: products }) => {
  console.log(typeof value.id, "what is in the value");

  const sizes = ["S", "M", "L", "XL", "XXL", "XXXL"];
  const colors = [
    "Red",
    "Blue",
    "Green",
    "Yellow",
    "Orange",
    "Purple",
    "Pink",
    "Teal",
    "Cyan",
    "Lime",
    "Indigo",
    "Brown",
    "Gray",
    "Black",
    "White",
  ];
  const router = useRouter();
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  console.log(selectedSize, "hola");

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
    setErrorMessage("");
  };
  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
    setErrorMessage("");
  };

  const handleClickCart = async () => {
    if (selectedColor === "" || selectedSize === "") {
      setErrorMessage("select a size and color");
    } else {
      const cartObject = {
        ...value,
        colour: selectedColor,
        size: selectedSize,
      };

      try {
        const response = await fetch(`https://pdata.onrender.com/cart`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(cartObject),
        });
        const success = await response.json();
        console.log(success, "sent successfully");

        router.push("/users/cart");
      } catch (error) {
        console.log(error, "error occured");
      }
    }
  };
  return (
    <Flex align="center" justify="center" height="full">
      <Box
        width="1100px"
        overflow="hidden"
        display={{ lg: "inline-block", base: "none" }}
      >
        <Flex>
          <Box w={{ lg: "25%", md: "30%", sm: "50%" }}>
            <img
              src={value.images}
              alt="Product Image"
              width="100%"
              height="100%"
            />
          </Box>
          <VStack align="start" spacing={7} mx="15%">
            <Text fontSize="xl" fontWeight="extrabold">
              {value.title}
            </Text>
            <Text fontSize="lg" fontWeight="bold">
              Price: {value.price}
            </Text>
            <Text fontSize="md">Category: {value.category}</Text>

            <RadioGroup colorScheme="blue">
              <HStack align="start" spacing={2}>
                <Text>Size:</Text>
                {sizes.map((size) => (
                  <Radio
                    key={size}
                    value={size}
                    onChange={() => handleSizeSelect(size)}
                  >
                    {size}
                  </Radio>
                ))}
              </HStack>
            </RadioGroup>
            <Menu>
              <MenuButton as={Button}>
                {selectedColor ? (
                  <Box
                    width="20px"
                    height="20px"
                    borderRadius="50%"
                    bg={selectedColor.toLowerCase()}
                    marginRight="10px"
                    display="inline-block"
                  />
                ) : null}
                {selectedColor || "Select a color"}
              </MenuButton>
              <MenuList maxHeight="150px" overflowY="auto">
                {colors.map((color) => (
                  <MenuItem
                    key={color}
                    onClick={() => handleColorSelect(color)}
                  >
                    <Box
                      width="20px"
                      height="20px"
                      borderRadius="50%"
                      bg={color.toLowerCase()}
                      marginRight="10px"
                      display="inline-block"
                    />
                    {color}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
            {errorMessage && (
              <Text color="red.500" mt={4} textAlign="center">
                {errorMessage}
              </Text>
            )}
            <Button onClick={handleClickCart}>ADD TO CART</Button>
          </VStack>
        </Flex>
      </Box>
      <Box
        width="100%"
        overflow="hidden"
        display={{ base: "block", lg: "none" }}
      >
        <Flex direction="column" align="center" mx="4">
          <img
            src={value.images}
            alt="Product Image"
            width="30%"
            height="auto"
          />
          <VStack align="start" spacing={4} mt={4} width="100%">
            <Text fontSize="xl" fontWeight="extrabold">
              {value.title}
            </Text>
            <Text fontSize="lg" fontWeight="bold">
              Price: {value.price}
            </Text>
            <Text fontSize="md">Category: {value.category}</Text>
            <RadioGroup colorScheme="blue" width="100%">
              <HStack align="start" spacing={2} width="100%">
                <Text>Size:</Text>
                {sizes.map((size) => (
                  <Radio
                    key={size}
                    value={size}
                    onChange={() => handleSizeSelect(size)}
                  >
                    {size}
                  </Radio>
                ))}
              </HStack>
            </RadioGroup>
            <Menu>
              <MenuButton as={Button}>
                {selectedColor ? (
                  <Box
                    width="20px"
                    height="20px"
                    borderRadius="50%"
                    bg={selectedColor.toLowerCase()}
                    marginRight="10px"
                    display="inline-block"
                  />
                ) : null}
                {selectedColor || "Select a color"}
              </MenuButton>
              <MenuList maxHeight="150px" overflowY="auto">
                {colors.map((color) => (
                  <MenuItem
                    key={color}
                    onClick={() => handleColorSelect(color)}
                  >
                    <Box
                      width="20px"
                      height="20px"
                      borderRadius="50%"
                      bg={color.toLowerCase()}
                      marginRight="10px"
                      display="inline-block"
                    />
                    {color}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
            {errorMessage && (
              <Text color="red.500" mt={4} textAlign="center">
                {errorMessage}
              </Text>
            )}
            <Button onClick={handleClickCart} width="100%">
              ADD TO CART
            </Button>
          </VStack>
        </Flex>
      </Box>
    </Flex>
  );
};
export default View;
export async function getServerSideProps(context: any) {
  const { pid } = context.query;
  const res = await fetch(`https://pdata.onrender.com/products/${pid}`);
  const value = await res.json();
  console.log(value, "viewpagefromserver");

  return {
    props: {
      value: value,
    },
  };
}
