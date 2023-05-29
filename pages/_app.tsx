import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import { createContext, useState } from "react";
import { AppContextProps, cartItems } from "../types/types";

export const AppContext = createContext<AppContextProps | null>(null);

function MyApp({ Component, pageProps }: AppProps) {
  const [categoryState, setCategoryState] = useState<string>("All");
  const [cartState, setCartState] = useState<cartItems | undefined>();

  return (
    <ChakraProvider>
      <AppContext.Provider
        value={{ categoryState, setCategoryState, cartState, setCartState }}
      >
        <Layout>
          {" "}
          <Component {...pageProps} />
        </Layout>
      </AppContext.Provider>
    </ChakraProvider>
  );
}

export default MyApp;
