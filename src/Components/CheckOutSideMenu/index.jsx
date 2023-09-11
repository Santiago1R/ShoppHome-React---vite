import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCardContext } from "../../Context";
import OrderCard from "../OrderCard";
import { totalPrices } from "../../Utils";
import "./styles.css";

const CheckOutSideMenu = () => {
  const context = useContext(ShoppingCardContext);

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(
      (product) => product.id != id
    );
    context.setCartProducts(filteredProducts);
  };

  const handleCheckOut = () => {
    const orderToAdd = {
      date: "01.02.23",
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrices: totalPrices(context.cartProducts),
    };
    context.setOrder([...context.order, orderToAdd]);
    context.setCartProducts([]);
  };

  return (
    <aside
      className={`${
        context.isCheckOutSideMenuOpen ? "flex" : "hidden"
      }  checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between item-center p-6">
        <h2 className="font-medium text-xl">My order</h2>
        <button onClick={context.closeCheckOutSideMenu}>
          <XMarkIcon className="h-6 w-6 text-black" />
        </button>
      </div>

      <div className="px-6 flex flex-col gap-5 overflow-y-auto flex-1">
        {context.cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.image}
            price={product.price}
            handleDelete={handleDelete}
          />
        ))}
      </div>

      <div className="px-6 mb-6">
        <p className="flex justify-between items-center mb-2">
          <span className="font-light">Total: </span>
          <span className="font-medium text-xl">
            ${totalPrices(context.cartProducts)}
          </span>
        </p>
        <button className='bg-black py-3 text-white w-full rounded-lg' onClick={() => handleCheckOut()}>Checkout</button>
      </div>
    </aside>
  );
};

export default CheckOutSideMenu;
