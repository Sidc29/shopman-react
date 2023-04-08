import { useTitle } from "../hooks/useTitle";
import { ProductCard } from "../components/";

import { products } from "../data/products";

export const ProductList = ({ title }) => {
  const pageTitle = useTitle(title);

  return (
    <div
      id="productlist"
      className="flex flex-wrap justify-center my-6 mx-auto"
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
