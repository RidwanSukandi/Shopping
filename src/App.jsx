import React, { createContext, useState } from "react";
import Product from "./Product/Product";
import Details from "./Details/Details";
import Home from "./Home/Home";
import Cart from "./Cart/Cart";
import ApiContext from "./Context/apiContext";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

export default function App() {
  let { idProduct } = useParams();
  const [id, setId] = useState(0);
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(0);
  const [productTerlaris, setProductTerlaris] = useState([]);
  const [title, setTitle] = useState("");

  return (
    <>
      <ApiContext.Provider value={{ productTerlaris, setProductTerlaris }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/products/:categoryProduct" Component={Product} />
            <Route path="/products-details/:idProduct" Component={Details} />
            <Route path="/cart-product" Component={Cart} />
          </Routes>
        </BrowserRouter>
      </ApiContext.Provider>
    </>
  );
}
