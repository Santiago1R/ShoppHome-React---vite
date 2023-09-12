import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { CalendarIcon } from "@heroicons/react/24/solid";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
const OrdersCard = (props) => {
  const { totalPrice, totalProducts } = props;
  return (
    <div className="flex justify-between items-center mb-3 border border-black p-4 w-80 rounded-lg">
      <div className=" flex justify-between w-full">
        <p className="flex flex-col">
          <span className="flex gap-1 items-center">
            <CalendarIcon className="w-5 h-5 text-black" /> 01.02.23
          </span>
          <span className="font-light flex items-center gap-1">
            <ShoppingBagIcon className="w-5 h-5 text-black" /> {totalProducts}{" "}
            articles
          </span>
        </p>
        <span className="font-medium text-2xl flex gap-1 items-center ">
          $ {totalPrice} <ChevronRightIcon className="w-5 h-5 text-black" />{" "}
        </span>
      </div>
    </div>
  );
};
export default OrdersCard;
