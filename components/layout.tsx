import { Box } from "@chakra-ui/react";
import Header from "./header";
import Footer from "./footer";
import { NextPage } from "next";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Box>
      <Header />
      <Box w="full" h="90vh" overflow={"scroll"}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
};
export default Layout;
