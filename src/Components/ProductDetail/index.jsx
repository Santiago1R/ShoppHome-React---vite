import { useContext } from "react";
import "./styles.css";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCardContext } from "../../Context";
const ProductDetail = () => {
  const context = useContext(ShoppingCardContext);
  return (
    <aside
      className={`${
        context.isProductDetailOpen ? "flex" : "hidden"
      }  product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between item-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <button onClick={context.closeProductDetail}>
          <XMarkIcon className="h-6 w-6 text-black" />
        </button>
      </div>
      <div className="content-detail">
        <figure className="flex justify-center px-6">
          <img
            className="w-[180px] h-full rounden-lg"
            src={context.productToShow.image}
          />
        </figure>
        <p className="flex flex-col p-6">
          <span className="font-medium text-2xl">
            ${context.productToShow.price}
          </span>
          <span className="font-medium text-md">
            {context.productToShow.title}
          </span>
          <span className="font-light text-sm">
            {context.productToShow.description}
          </span>
        </p>
      </div>
    </aside>
  );
};

export default ProductDetail;
