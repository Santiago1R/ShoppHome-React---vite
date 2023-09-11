import { useState, useEffect } from "react";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import Loading from "../../Components/Loading";
import ProductDetail from "../../Components/ProductDetail";

const Home = () => {
  const [items, setItems] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      // fetch("https://api.escuelajs.co/api/v1/products")
      //   .then((response) => response.json())
      //   .then((data) => setItems(data)); API de platzi pero no me gusto
      fetch("https://fakestoreapi.com/products") // API de Fake Store de un man en un comentario - de la clase 8
        .then((res) => res.json())
        .then((data) => setItems(data));
      setIsLoading(false);
    }, 2470);
  }, []);

  return (
    <Layout>
      {isLoading && <Loading />}
      come on buddy
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {items?.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
      <ProductDetail />
    </Layout>
  );
};

export default Home;
