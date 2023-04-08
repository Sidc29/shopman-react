import { useTitle } from "../hooks/useTitle";
import { CartCard } from "../components/";
import { useCart } from "../context/CartContext";

export const Cart = ({ title }) => {
  const { cartList, total } = useCart();
  const pageTitle = useTitle(
    cartList.length > 0 ? `${title} (${cartList.length})` : title
  );

  return (
    <div className="flex flex-col justify-center max-w-[80%] mx-auto my-12">
      {cartList.length > 0 ? (
        <h1 className="text-3xl font-bold text-center my-8 text-[#4D4D4D]">
          Cart Items: {cartList.length} / Total - $
          {Math.round(total * 100) / 100}
        </h1>
      ) : (
        <h1 className="text-3xl font-bold text-center my-8 text-[#4D4D4D]">
          Your cart is empty
        </h1>
      )}
      {cartList.map((product) => (
        <CartCard key={product.id} product={product} />
      ))}
    </div>
  );
};
