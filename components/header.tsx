import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { AppContext } from "../pages/_app";
import { useRouter } from "next/router";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const handleRoute = () => {
    router.push("/users/products");
  };

  const handleCategoryFilterMen = () => {
    setCategoryState("Men");
    console.log("selctedcate", categoryState);
    // Apply category filter logic here
  };
  const handleCategoryFilterWomen = () => {
    setCategoryState("Women");
    console.log("selctedcate", categoryState);
    // Apply category filter logic here
  };
  const handleCategoryFilterKids = () => {
    setCategoryState("Kids");
    console.log("selctedcate", categoryState);
    // Apply category filter logic here
  };
  const { categoryState, setCategoryState }: any = useContext(AppContext);
  return (
    <Box w="full" h="40px" bg="blue.100">
      <Box>
        <Button
          onClick={onOpen}
          variant="outline"
          size="sm"
          aria-label="Open Category Filter"
        >
          Filter
        </Button>
        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
          <DrawerOverlay>
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Category Filter</DrawerHeader>
              <DrawerBody display={"block"}>
                {/* Render your category filter options */}
                <Button
                  onClick={() => {
                    handleRoute();
                    handleCategoryFilterMen();
                    onClose();
                  }}
                  variant="outline"
                  size="sm"
                  mr={2}
                >
                  Men
                </Button>
                <Button
                  onClick={() => {
                    handleRoute();
                    handleCategoryFilterWomen();
                    onClose();
                  }}
                  variant="outline"
                  size="sm"
                  mr={2}
                >
                  Women
                </Button>
                <Button
                  onClick={() => {
                    handleRoute();
                    handleCategoryFilterKids();
                    onClose();
                  }}
                  variant="outline"
                  size="sm"
                >
                  Kids
                </Button>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </Box>
    </Box>
  );
};
export default Header;
