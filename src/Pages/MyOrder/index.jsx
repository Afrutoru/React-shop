import { useContext } from "react";
import Layout from "../../Components/Layout";
import { ShoppingCardContext } from "../../Context";
import OrderCard from "../../Components/OrderCard";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

export default function MyOrder() {
  const context = useContext(ShoppingCardContext);
  const currentPath = window.location.pathname; // lee la url donde esta
  // index corta la url para quedarse con la ultima parte del string solo, "last, 0, 1, 2..."
  let index = currentPath.substring(currentPath.lastIndexOf("/") + 1);
  //si index no es un numero y es "last" se le pone el numero
  if (index === "last") index = context.order?.length - 1;

  return (
    <Layout>
      <div className=" flex items-center justify-center relative w-80 mb-6">
        <Link to="/my-orders" className="absolute left-0">
          <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer" />
        </Link>
        <h1>My Order</h1>
      </div>
      <div className="flex flex-col w-80">
        {context.order?.[index]?.products.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.images[0]}
            price={`${product.price}€`}
          />
        ))}
      </div>
    </Layout>
  );
}
