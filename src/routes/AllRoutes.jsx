import { Routes, Route } from "react-router-dom";
import { Cart, ProductList } from "../pages/";

export const AllRoutes = () => {
  return (
    <main className="lg:max-w-[80%] min-h-[90vh] lg:mx-auto">
      <Routes>
        <Route path="" element={<ProductList title="Home" />} />
        <Route path="cart" element={<Cart title="Cart" />} />
      </Routes>
    </main>
  );
};
