import { useContext, useEffect, useState } from "react";
import ApiContext from "../Context/apiContext";

const Api = () => {
  const context = useContext(ApiContext);

  const fetchAllProducts = async () => {
    const api = await fetch("https://fakestoreapi.com/products");
    const response = await api.json();
    context.setProductTerlaris(response);
  };

  useEffect(() => {
    fetchAllProducts();
  });

  return context;
};

export default Api;
