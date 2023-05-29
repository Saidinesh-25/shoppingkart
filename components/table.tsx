/* eslint-disable @next/next/no-img-element */
import {
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Button,
  Text,
} from "@chakra-ui/react";
import { ProductListingPageProps, products } from "../types/types";

const ProductListingTable = ({
  handleRoute,
  filteredProducts,
}: ProductListingPageProps) => {
  return (
    <Table w={{ sm: "100%", lg: "70%", base: "100%" }} variant="simple">
      <Thead>
        <Tr>
          <Th w={{ sm: "20%", lg: "8%", base: "100%" }} textAlign={"center"}>
            Image
          </Th>
          <Th w={{ sm: "30%", lg: "10%", base: "100%" }} textAlign={"center"}>
            Title
          </Th>
          <Th w={{ sm: "30%", lg: "5%", base: "100%" }} textAlign={"center"}>
            Price
          </Th>
          <Th w={{ sm: "10%", lg: "3%", base: "100%" }} textAlign={"center"}>
            Actions
          </Th>
        </Tr>
      </Thead>
      <Tbody>
        {filteredProducts?.map((item: products) => (
          <Tr key={item.id}>
            <Td textAlign={"center"}>
              <img
                src={item.images}
                alt={item.title}
                width="100%"
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
  );
};
export default ProductListingTable;
