import { createContext, useEffect, useState } from "react";

export const ShoppingCardContext = createContext();

export const initializedLocalStorage = () => {
  const accountInLocalStorage = localStorage.getItem("account");
  const signOutInLocalStorage = localStorage.getItem("sign-out");
  let parsedAccount;
  let parsedSignOut;
  if (!accountInLocalStorage) {
    localStorage.setItem("account", JSON.stringify({}));
    parsedAccount = {};
  } else {
    parsedAccount = JSON.parse(accountInLocalStorage);
  }

  if (!signOutInLocalStorage) {
    localStorage.setItem("sign-out", JSON.stringify(false));
    parsedSignOut = false;
  } else {
    parsedSignOut = JSON.parse(signOutInLocalStorage);
  }
};

export const ShoppingCardProvider = ({ children }) => {
  //My Count
  const [account, setAccount] = useState({});

  //Sign out
  const [signOut, setSignOut] = useState(false);

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
  const [filteredItems, setFilteredItems] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  //Get Products By Title
  const [searchByTitle, setSearchByTitle] = useState("");
  //Get Products By Category
  const [searchByCategory, setSearchByCategory] = useState("");

  useEffect(() => {
    setTimeout(() => {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => setItems(data));
      setIsLoading(false);
    }, 2470);
  }, []);

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter((item) =>
      item.title.toLowerCase().includes(searchByTitle.toLowerCase())
    );
  };

  const filteredItemsByCatergory = (items, searchByCategory) => {
    return items?.filter(
      (item) => item.category.toLowerCase() === searchByCategory.toLowerCase()
    );
  };

  const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
    if (searchType === "BY_TITLE") {
      return filteredItemsByTitle(items, searchByTitle);
    }
    if (searchType === "BY_CATEGORY") {
      return filteredItemsByCatergory(items, searchByCategory);
    }
    if (searchType === "BY_TITLE_AND_CATEGORY") {
      return filteredItemsByCatergory(items, searchByCategory).filter((item) =>
        item.title.toLowerCase().includes(searchByTitle.toLowerCase())
      );
    }
    if (!searchType) {
      return items;
    }
  };
  useEffect(() => {
    if (searchByTitle && searchByCategory)
      setFilteredItems(
        filterBy(
          "BY_TITLE_AND_CATEGORY",
          items,
          searchByTitle,
          searchByCategory
        )
      );
    if (searchByTitle && !searchByCategory)
      setFilteredItems(
        filterBy("BY_TITLE", items, searchByTitle, searchByCategory)
      );
    if (!searchByTitle && searchByCategory)
      setFilteredItems(
        filterBy("BY_CATEGORY", items, searchByTitle, searchByCategory)
      );
    if (!searchByTitle && !searchByCategory)
      setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory));
  }, [items, searchByTitle, searchByCategory]);

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
        setSearchByTitle,
        filteredItems,
        setSearchByCategory,
        account,
        setAccount,
        signOut,
        setSignOut,
      }}
    >
      {children}
    </ShoppingCardContext.Provider>
  );
};
