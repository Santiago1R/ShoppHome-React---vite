import { useContext } from "react";
import { useRoutes, BrowserRouter, Navigate } from "react-router-dom";
import Home from "../Home/index";
import MyAccount from "../MyAccount/index";
import MyOrders from "../MyOrders/index";
import SignIn from "../SignIn/index";
import NotFound from "../NotFound/index";
import NavBar from "../../Components/NavBar";
import { ShoppingCardContext, ShoppingCardProvider, initializedLocalStorage } from "../../Context";
import "./App.css";
import CheckOutSideMenu from "../../Components/CheckOutSideMenu";
import MyOrder from "../MyOrder";

const AppRoutes = () => {
  const context = useContext(ShoppingCardContext);

  // Account
  const account = localStorage.getItem("account");
  const parsedAccount = JSON.parse(account);
  // Sign Out
  const signOut = localStorage.getItem("sign-out");
  const parsedSignOut = JSON.parse(signOut);
  // Has an account
  const noAccountInLocalStorage = parsedAccount
    ? Object.keys(parsedAccount).length === 0
    : true;
  const noAccountInLocalState = context.account
    ? Object.keys(context.account).length === 0
    : true;
  const hasUserAnAccount = !noAccountInLocalState || !noAccountInLocalStorage;
  const isUserSignOut = context.signOut || parsedSignOut

  let routes = useRoutes([
    { path: "/", element:  hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate  replace to={'/sign-in'}/> },
    { path: "/:category", element:  hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate  replace to={'/sign-in'}/> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/my-orders/last", element: <MyOrder /> },
    { path: "/my-orders/:id", element: <MyOrder /> },
    { path: "/sign-in", element: <SignIn /> },
    { path: "/*", element: <NotFound /> }, //como es para un no encontrado se usa un /* para cualquier ruta diferente a las que están.
  ]);
  return routes;
};

const App = () => {
  initializedLocalStorage()
  return (
    //dentro del ShoppingCardProvider encierro toda la aplicación en pocas palabras para pasársela al contexto
    <ShoppingCardProvider>
      <BrowserRouter>
        <AppRoutes />
        <NavBar />
        <CheckOutSideMenu />
      </BrowserRouter>
    </ShoppingCardProvider>
  );
};

export default App;
