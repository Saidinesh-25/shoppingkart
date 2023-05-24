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
  useBreakpointValue,
  useMediaQuery,
  Center,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { AppContext } from "../../_app";

const Listing = ({ value }: any) => {
  const [products, setProducts] = useState(value);
  //   const products = [
  //     {
  //       title:
  //         "Google Slate 12.3-Inch 2 in 1 Laptop Intel Core m3, 8GB RAM, 64GB, Aspect Ratio 3:2",
  //       images:
  //         "https://images-na.ssl-images-amazon.com/images/I/71k%2BKbTBn5L._SL1500_.jpg",
  //       id: 1,
  //     },
  //     {
  //       title: "GOOGLE PIXEL 4A (JUST BLACK, 6GB RAM, 128GB STORAGE)",
  //       images: "https://m.media-amazon.com/images/I/7199N-Uz2AL._SL1500_.jpg",
  //       id: 2,
  //     },
  //     {
  //       title:
  //         "Quick Charger For Google Pixel 2 XL,3,3a,3a XL,3XL,4,4 XL,4 XL,4a,4a 5G,5,XL Charger Original Like Charger Type-C Qualcomm QC 3.1 Quick Charge Adaptive Fast Charging, Rapid, Dash, VOOC, AFC Charger(3.1 Amp,OP2, WHITE)",
  //       images:
  //         "https://images-na.ssl-images-amazon.com/images/I/31nj8q6QKAL.jpg",
  //       id: 3,
  //     },
  //     {
  //       title: "macboook pro",
  //       images:
  //         "https://www.cnet.com/a/img/resize/bcae6ebae333efd053a1aad485a7bb54b6c2a584/hub/2021/10/23/b4e8daa4-d3c1-4f4c-9a15-d127246205d9/macbook-pro-2021-cnet-review-15.jpg?auto=webp&fit=crop&height=1200&width=1200",
  //       id: 4,
  //     },
  //   ];

  const router = useRouter();
  const handleRoute = (id: number) => {
    router.push(`/users/products/${id}/view`);
  };
  const { categoryState }: any = useContext(AppContext);

  return (
    <Box height="auto" overflowX={"auto"}>
      <Center>
        <Box
          w={{ sm: "100%", lg: "70%" }}
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
        <Table w={{ sm: "100%", lg: "70%" }} variant="simple">
          <Thead>
            <Tr>
              <Th w={{ sm: "20%", lg: "8%" }} textAlign={"center"}>
                Image
              </Th>
              <Th w={{ sm: "30%", lg: "10%" }} textAlign={"center"}>
                Title
              </Th>
              <Th w={{ sm: "30%", lg: "5%" }} textAlign={"center"}>
                Price
              </Th>
              <Th w={{ sm: "10%", lg: "3%" }} textAlign={"center"}>
                Actions
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {products?.map((item: any) => (
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
                  w="auto"
                  padding="8px"
                  fontSize={"18px"}
                  fontWeight={500}
                >
                  {item.title}
                </Td>
                <Td
                  textAlign={"center"}
                  w="auto"
                  padding="8px"
                  fontSize={"18px"}
                  fontWeight={500}
                >
                  {item.price}
                </Td>

                <Td textAlign={"center"}>
                  <Button
                    colorScheme="blue"
                    onClick={() => handleRoute(item.id)}
                  >
                    ADD TO CART
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
