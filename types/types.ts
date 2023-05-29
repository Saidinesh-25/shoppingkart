export type paymentInfo = {
  address: string;
  zip: number;
  phone: number;
  sixteenDigitNumber: number;
  date: string;
  name: string;
  cvv: number;
};
export type cartItems = {
  category: string;
  colour: string;
  count: number;
  id: number;
  images: string;
  price: string;
  size: string;
  title: string;
};
export type ProductListingPageProps = {
  handleRoute: (id: number) => void;
  filteredProducts: products[];
};
export type PaymentsPageProps = cartItems[];
export type AppContextProps = {
  categoryState: string;
  setCategoryState: React.Dispatch<React.SetStateAction<string>>;
  cartState: cartItems | undefined;
  setCartState: React.Dispatch<React.SetStateAction<cartItems | undefined>>;
};
export type products = {
  title: string;
  images: string;
  id: number;
  price: string;
  category: string;
  count: number;
};

export type ListingPageProps = products[];
