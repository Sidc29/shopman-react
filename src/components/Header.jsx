import { Link, NavLink } from "react-router-dom";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCart } from "../context/CartContext";

export const Header = () => {
  const { cartList } = useCart();
  return (
    <header className="lg:max-w-[80%] lg:mx-auto">
      <nav className="flex flex-row justify-between items-center p-3 bg-[#4D4D4D] lg:rounded-b-lg shadow-lg">
        <Link to="/" className="flex flex-row items-center gap-3">
          <img
            src="https://static-00.iconduck.com/assets.00/cart-shopping-list-icon-493x512-fh2rzzxm.png"
            alt="shopping cart image"
            className="w-8 h-auto"
          />
          <span className="text-xl font-semibold text-slate-100">ShopMan</span>
        </Link>
        <ul className="flex flex-row gap-2 max-sm:hidden">
          <li className="text-lg text-slate-100 py-1.5 px-3 rounded-lg hover:bg-slate-400 hover:bg-opacity-10">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="text-lg text-slate-100 py-1.5 px-3 rounded-lg hover:bg-slate-400 hover:bg-opacity-10">
            <NavLink to="/cart">Cart</NavLink>
          </li>
        </ul>
        <Link to="/cart" className="text-lg text-slate-100">
          <ShoppingCartIcon />: {cartList.length}
        </Link>
      </nav>
    </header>
  );
};
