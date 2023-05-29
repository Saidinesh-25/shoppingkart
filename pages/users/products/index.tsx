import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Image,
  Button,
  Text,
  Center,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { AppContext } from "../../_app";
import { ListingPageProps, products } from "../../../types/types";

const Listing = ({ value }: { value: ListingPageProps }) => {
  const [products, setProducts] = useState(value);

  const router = useRouter();
  const handleRoute = (id: number) => {
    router.push(`/users/products/${id}/view`);
  };
  const { categoryState }: any = useContext(AppContext);

  const filteredProducts =
    categoryState === "All"
      ? products
      : products.filter((item: products) => item.category === categoryState);

  return (
    <Box height="auto" overflowX={"auto"}>
      <Center>
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
          {categoryState}
        </Box>
      </Center>
      <Center>
        <Table w={{ sm: "100%", lg: "70%", base: "100%" }} variant="simple">
          <Thead>
            <Tr>
              <Th
                w={{ sm: "20%", lg: "8%", base: "100%" }}
                textAlign={"center"}
              >
                Image
              </Th>
              <Th
                w={{ sm: "30%", lg: "10%", base: "100%" }}
                textAlign={"center"}
              >
                Title
              </Th>
              <Th
                w={{ sm: "30%", lg: "5%", base: "100%" }}
                textAlign={"center"}
              >
                Price
              </Th>
              <Th
                w={{ sm: "10%", lg: "3%", base: "100%" }}
                textAlign={"center"}
              >
                Actions
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredProducts?.map((item: products) => (
              <Tr key={item.id}>
                <Td textAlign={"center"}>
                  <Image
                    src={item.images}
                    alt={item.title}
                    w="100%"
                    height="auto"
                  />
                </Td>
                <Td
                  textAlign={"start"}
                  padding="8px"
                  fontSize={{ lg: "18px", sm: "14px", base: "10px" }}
                  fontWeight={600}
                >
                  {item.title}
                </Td>
                <Td
                  textAlign={"center"}
                  w="auto"
                  padding="8px"
                  fontWeight={{ lg: 500, sm: 400, base: 400 }}
                  fontSize={{ lg: "18px", sm: "14px", base: "12px" }}
                >
                  {item.price}
                </Td>

                <Td textAlign={"center"}>
                  <Button
                    colorScheme="blue"
                    w={"fit-content"}
                    onClick={() => handleRoute(item.id)}
                  >
                    <Text fontSize={{ base: "5px", md: "7px", lg: "16px" }}>
                      ADD TO CART
                    </Text>
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Center>
    </Box>
  );
};
export default Listing;
export async function getServerSideProps() {
  const res = await fetch(`https://pdata.onrender.com/products`);
  const value = await res.json();
  console.log(value, "fromserver");
  return {
    props: {
      value: value,
    },
  };
}
