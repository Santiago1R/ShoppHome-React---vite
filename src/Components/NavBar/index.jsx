import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCardContext } from "../../Context";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
const NavBar = () => {
  const context = useContext(ShoppingCardContext);
  const activeStyle = "underline underline-offset-4";

  const handleSignOut = () => {
    const stringifiedSignOut = JSON.stringify(true)
    localStorage.setItem('sign-out', stringifiedSignOut)
    context.setSignOut(true)
  }
  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-white">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink
            to="/"
            onClick={() => context.setSearchByCategory("")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            \shopHome/
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Electronics"
            onClick={() => context.setSearchByCategory("electronics")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Women's clothing"
            onClick={() => context.setSearchByCategory("women's clothing")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Women's clothing
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Men's clothing"
            onClick={() => context.setSearchByCategory("men's clothing")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Men's clothing
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Jewelery"
            onClick={() => context.setSearchByCategory("Jewelery")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Jewelery
          </NavLink>
        </li>
      </ul>
      {/* lado derecho -> */}
      <ul className="flex items-center gap-3">
        <li className="text-black/60">Santi@gmail.com</li>
        <li>
          <NavLink
            to="/my-orders"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/my-account"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sign-in"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => handleSignOut()}
          >
            Sign In
          </NavLink>
        </li>
        <li className="flex items-center gap-1">
          <ShoppingBagIcon className="h-6 w-6 text-black" />
          <div>{context.cartProducts.length}</div>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
