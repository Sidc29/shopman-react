import { useCart } from "../context/CartContext";

export const CartCard = ({ product }) => {
  const { removeFromCart } = useCart();
  const { image, name, price } = product;
  return (
    <div
      id="cartCard"
      className="flex flex-wrap justify-between items-center bg-white p-3 border shadow-md my-3 rounded-md"
    >
      <img className="w-20 rounded-sm" src={image} alt="product image" />
      <p className="max-w-[25%] mx-3 font-medium">{name}</p>
      <p className="mx-3">${price}</p>
      <button
        onClick={() => removeFromCart(product)}
        className="p-2 bg-red-700 hover:bg-red-800 text-white rounded-md max-sm:mx-auto"
      >
        Remove
      </button>
    </div>
  );
};
