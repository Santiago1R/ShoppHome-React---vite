import { useContext } from "react";
import { ShoppingCardContext } from "../../Context";
import Layout from "../../Components/Layout";
import OrderCard from "../../Components/OrderCard";
const MyOrder = () => {
  const context = useContext(ShoppingCardContext);
  console.log(context.order?.slice(-1)[0])
  return (
    <Layout>
      My Order
      <div className="flex flex-col w-80 gap-4">
        {context.order?.slice(-1)[0].products.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.image}
            price={product.price}
          />
        ))}
      </div>
    </Layout>
  );
};

export default MyOrder;
