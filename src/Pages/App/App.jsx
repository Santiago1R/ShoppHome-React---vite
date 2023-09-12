import { useRoutes, BrowserRouter } from "react-router-dom";
import Home from "../Home/index";
import MyAccount from "../MyAccount/index";
import MyOrders from "../MyOrders/index";
import SignIn from "../SignIn/index";
import NotFound from "../NotFound/index";
import NavBar from "../../Components/NavBar";
import { ShoppingCardProvider } from "../../Context";
import "./App.css";
import CheckOutSideMenu from "../../Components/CheckOutSideMenu";
import MyOrder from "../MyOrder";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
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
