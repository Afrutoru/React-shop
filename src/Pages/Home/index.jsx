import { useContext } from "react";
import Card from "../../Components/Card";
import Layout from "../../Components/Layout";
import LoadingCard from "../../Components/Loading";
import ProductDetail from "../../Components/ProductDetail";
import { ShoppingCardContext } from "../../Context";

export default function Home() {
  const context = useContext(ShoppingCardContext);
  const renderView = () => {
    if (context.filteredItems?.length > 0) {
      return context.filteredItems?.map((item) => (
        <Card key={item.id} data={item} />
      ));
    } else {
      return <p>No results found</p>;
    }
  };

  return (
    <Layout>
      <div className="flex items-center justify-center w-80 mb-4">
        <h1 className="font-medium text-xl">New Products</h1>
      </div>
      <input
        type="text"
        placeholder="Search products..."
        className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
        onChange={(event) => context.setSearchByTitle(event.target.value)}
      />
      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4 w-full max-w-screen-lg">
        {context.loading ? (
          Array.from({ length: 8 }).map((_, index) => (
            <LoadingCard key={index} />
          ))
        ) : context.error ? (
          <div>Error: {context.error}</div>
        ) : (
          renderView()
        )}
      </div>
      <ProductDetail />
    </Layout>
  );
}
