import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

export const ProductCard = ({ product }) => {
  const [isInCart, setIsInCart] = useState(false);

  const { cartList, addToCart, removeFromCart } = useCart();
  const { id, image, name, price } = product;

  useEffect(() => {
    const productIsInCart = cartList.find((cartItem) => cartItem.id === id);
    if (productIsInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [cartList, id]);

  return (
    <div className="w-full max-w-xs bg-white border border-gray-300 rounded-lg shadow-xl m-3">
      <img
        className="h-72 w-full rounded-t-lg"
        src={image}
        alt="product image"
      />
      <div className="px-5 pb-5">
        <h5 className="text-xl font-bold my-3 text-[#B46060]">{name}</h5>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-[#4D4D4D] ">${price}</span>
          {!isInCart ? (
            <button
              onClick={() => addToCart(product)}
              className="text-white bg-[#B46060] hover:bg-[#b45050] font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            >
              <AddShoppingCartIcon />
            </button>
          ) : (
            <button
              onClick={() => removeFromCart(product)}
              className="text-white bg-red-700 hover:bg-red-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            >
              <RemoveShoppingCartIcon />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
