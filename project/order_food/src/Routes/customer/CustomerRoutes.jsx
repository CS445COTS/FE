import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../../components/home/Home";
import Navigation from "../../components/navigation/Navigation";
import Footer from "../../components/footer/Footer";
import Article from "../../components/article/Article";
import Service from "../../components/serve/Service";
import Contact from "../../components/contact/Contact";
import Menu from "../../components/Menu/Menu";
import ProductDetail from "../../components/productdetail/ProductDetail";
import Cart from "../../components/cart/Cart";
import CheckOut from "../../components/checkOut.jsx/CheckOut";
import Order from "../../components/Order/Order";
import OrderDetail from "../../components/Order/OrderDetail";
import Account from "../../components/Pesonal/Account";

export default function CustomerRoutes() {
  return (
    <div>
      <Navigation />

      <Routes>
        <Route path="/login" element={<Home />} />
        <Route path="/register" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/article" element={<Article />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/account/order" element={<Order></Order>} />
        <Route path="/account/order/:orderId" element={<OrderDetail />} />
        <Route path="/account/personal" element={<Account />} />
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
}
