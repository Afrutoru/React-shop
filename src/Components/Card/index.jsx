import { useContext } from "react";
import { ShoppingCardContext } from "../../Context";
import { PlusIcon, CheckIcon } from "@heroicons/react/24/solid";

export default function Card(data) {
  const context = useContext(ShoppingCardContext);
  const showProduct = (productDetail) => {
    context.openProductDetail();
    context.setProductToShow(productDetail);
  };

  const addProductsToCart = (productData) => {
    context.setCartProducts([...context.cartProducts, productData]);
    context.openCheckoutSideMenu();
    context.closeProductDetail();
  };

  const renderIcon = (id) => {
    const isInCart =
      context.cartProducts.filter((product) => product.id === id).length > 0;
    return (
      <>
        {isInCart ? (
          <div className="absolute top-0 right-0 flex justify-center items-center bg-green-400 w-6 h-6 rounded-full m-2 p-1">
            <CheckIcon className="h-6 w-6 text-white " />
          </div>
        ) : (
          <div
            className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
            onClick={(e) => {
              e.stopPropagation();
              addProductsToCart(data.data);
            }}
          >
            <PlusIcon className="h-6 w-6 text-black" />
          </div>
        )}
      </>
    );
  };

  return (
    <div
      className="bg-white cursor-pointer w-56 h-60 rounded-lg"
      onClick={() => showProduct(data.data)}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-sm m-2 px-3 py-0.5">
          {data.data.category.name}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={data.data.images[0]}
          alt={data.data.title}
        />
        {renderIcon(data.data.id)}
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{data.data.title}</span>
        <span className="text-sm font-medium">{data.data.price}€</span>
      </p>
    </div>
  );
}
