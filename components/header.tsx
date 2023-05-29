import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";
import { AiFillFilter, AiOutlineShoppingCart } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";

import { useContext } from "react";
import { AppContext } from "../pages/_app";
import { useRouter } from "next/router";
import { AppContextProps } from "../types/types";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { categoryState, setCategoryState } =
    useContext<AppContextProps>(AppContext);
  const router = useRouter();
  const handleRoute = () => {
    router.push("/users/products");
  };

  const handleCategoryFilterMen = () => {
    setCategoryState("men");
    console.log("selctedcate", categoryState);
    // Apply category filter logic here
  };
  const handleCategoryFilterWomen = () => {
    setCategoryState("women");
    console.log("selctedcate", categoryState);
    // Apply category filter logic here
  };
  const handleCategoryFilterKids = () => {
    setCategoryState("kids");
    console.log("selctedcate", categoryState);
    // Apply category filter logic here
  };

  const handleLogout = () => {
    router.push("/");
  };
  const handleCart = () => {
    router.push("/users/cart");
  };

  return (
    <Box w="full" h="40px" bg="blue.100" display={"flex"}>
      <Box>
        <Button
          onClick={onOpen}
          variant="outline"
          size="sm"
          aria-label="Open Category Filter"
          mt="3px"
        >
          <AiFillFilter />
        </Button>
        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
          <DrawerOverlay>
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Category Filter</DrawerHeader>
              <DrawerBody display={"block"}>
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

      <Box ml="auto" mr="2" display={"flex"}>
        <Box mr="5">
          {" "}
          <Button bg={"blue.100"} onClick={handleCart}>
            <AiOutlineShoppingCart />
          </Button>
        </Box>
        <Menu>
          <MenuButton
            as={Button}
            variant="outline"
            size="sm"
            aria-label="Open Profile Menu"
            mt="3px"
          >
            <CgProfile />
          </MenuButton>
          <MenuList>
            <MenuItem onClick={handleLogout} icon={<FiLogOut />}>
              Logout
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Box>
  );
};
export default Header;
