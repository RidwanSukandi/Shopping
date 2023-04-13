import React, { useContext } from "react";
import Context from "../Context/apiContext";
import Navbar from "../Components/Navbar/Navbar";
import { useSelector } from "react-redux";

export default function Cart() {
  const context = useContext(Context);

  //  const image = localStorage.getItem('image');
  //  const title = localStorage.getItem('title');
  //  const price = localStorage.getItem('price');
  //  const count = localStorage.getItem('count');

  //  console.log(price * count);

  const { id, image, title, price, counter } = useSelector(
    (state) => state.product
  );

  return (
    <div>
      <Navbar />

      <div class="max-w-full p-6 mx-3 my-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center gap-5 flex-wrap">
          <div className="flex items-center gap-3">
            <img className="w-[50px]" src={image} alt="" />
            <h4 className="font-bold">{title}</h4>
          </div>
          <div className="flex gap-3">
            <span>{counter}</span>
            <span>X</span>
            <span>${price}</span>
            <span>=</span>
            <span>${price * counter}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
