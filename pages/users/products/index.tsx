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
import ProductListingTable from "../../../components/table";

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
        <ProductListingTable
          handleRoute={handleRoute}
          filteredProducts={filteredProducts}
        />
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
