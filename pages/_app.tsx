import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import { createContext, useState } from "react";

interface AppContextProps {
  categoryState: string;
  setCategoryState: React.Dispatch<React.SetStateAction<string>>;
  cartState: any;
  setCartState: any;
}

// const initialAppContext: AppContextProps = {
//   categoryState: "", // Set your initial category state value here
//   setCategoryState: () => {}, // Set an empty function for now
// };

export const AppContext = createContext<AppContextProps | null>(null);

function MyApp({ Component, pageProps }: AppProps) {
  const [categoryState, setCategoryState] = useState("All");
  const [cartState, setCartState] = useState();

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
