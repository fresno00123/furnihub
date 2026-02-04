import "./App.css";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Home from "./pages/Home/Home";
import Auth from "./pages/Auth/Auth";
import Login from "./pages/Auth/Login/Login";
import Register from "./pages/Auth/Register/Register";
import Error from "./pages/Error/Error";
import Authcheck from "./Authcheck/Authcheck";
import Cart from "./pages/cart/Cart";
import About from "./pages/About/About";
import Product from "./pages/product/Product";
import Shop from "./pages/shop/Shop";
import Faqs from "./component/Faqs";
import Support from "./component/Support";
import SearchResults from "./pages/SearchResults";
import Chair from "./categories/Chair";
import Table from "./categories/Table";
import Sofa from "./categories/Sofa";
import Bed from "./categories/Bed";
import Light from "./categories/Light";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <Authcheck>
                <Home />
              </Authcheck>
            }
          />
          <Route path="auth" element={<Auth />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/support" element={<Support />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/chair" element={<Chair />} />
          <Route path="/table" element={<Table />} />
          <Route path="/sofa" element={<Sofa />} />
          <Route path="/bed" element={<Bed />} />
          <Route path="/light" element={<Light />} />
          {/* not found routes  */}
          <Route path="*" element={<Error />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
