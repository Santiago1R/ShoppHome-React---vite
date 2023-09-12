import { useContext } from "react";
import { Link } from "react-router-dom";
import Layout from "../../Components/Layout";
import OrdersCard from "../../Components/OrdersCard";
import { ShoppingCardContext } from "../../Context";
const MyOrders = () => {
  const context = useContext(ShoppingCardContext);
  return (
    <Layout>
      <div className="flex items-center justify-center w-80 relative">
        <h1>My Orders</h1>
      </div>
      {context.order.map((order, index) => (
        <Link key={index} to={`/my-orders/${index}`}>
          <OrdersCard
            totalPrice={order.totalPrices}
            totalProducts={order.totalProducts}
          />
        </Link>
      ))}
    </Layout>
  );
};

export default MyOrders;
