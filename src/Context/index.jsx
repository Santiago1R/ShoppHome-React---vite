import { createContext, useEffect, useState } from "react";

export const ShoppingCardContext = createContext();

export const ShoppingCardProvider = ({ children }) => {
  //Shopping cart . Increment quantity
  const [count, setCount] = useState(0);
  // Product Detail . Open/close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  // Check out side menu . Open/close
  const [isCheckOutSideMenuOpen, setIsCheckOutSideMenuOpen] = useState(false);
  const openCheckOutSideMenu = () => setIsCheckOutSideMenuOpen(true);
  const closeCheckOutSideMenu = () => setIsCheckOutSideMenuOpen(false);

  //Product Detail show product
  const [productToShow, setProductToShow] = useState({});
  // Shopping Cart . Add products to cart
  const [cartProducts, setCartProducts] = useState([]);

  // Shopping Cart . Order
  const [order, setOrder] = useState([]);

  //Get Products
  const [items, setItems] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  //Get Products By Title
  const [searchByTitle, setSearchByTitle] = useState(null);
console.log(searchByTitle)

  useEffect(() => {
    setTimeout(() => {
      fetch("https://fakestoreapi.com/products") 
        .then((res) => res.json())
        .then((data) => setItems(data));
      setIsLoading(false);
    }, 2470);
  }, []);
  return (
    <ShoppingCardContext.Provider
      value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        isCheckOutSideMenuOpen,
        openCheckOutSideMenu,
        closeCheckOutSideMenu,
        order,
        setOrder,
        items,
        setItems,
        isLoading,
        searchByTitle,
        setSearchByTitle
      }}
    >
      {children}
    </ShoppingCardContext.Provider>
  );
};
