import { XMarkIcon } from "@heroicons/react/24/solid";
const OrdersCard = (props) => {
  const { totalPrice, totalProducts } = props;
  return (
    <div className="flex justify-between items-center mb-3 border border-black">
      <p>
        <span>01.02.23</span>
        <span className='text-red-800'>{totalProducts}</span>
        <span className="text-blue-800">{totalPrice}</span>
      </p>
    </div>
  );
};
export default OrdersCard;
