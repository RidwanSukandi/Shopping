import React, { useEffect, useState, useContext } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import ApiContext from "../Context/apiContext";
import Hero from "../Image/hero-1-new.png";

export default function Home() {
  const [search, setSearch] = useState("");

  const context = useContext(ApiContext);

  console.log(context);

  const [data, setData] = useState([]);

  const fetchProducts = async () => {
    const api = await fetch("https://fakestoreapi.com/products");
    const response = await api.json();
    setData(response);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSearch = (event) => {
    const { value } = event.target;
    setSearch(value);
    console.log(value);
  };

  return (
    <>
      <Navbar />

      <div className="max-w-full z-10 flex  justify-center my-3">
        <form class="flex items-center">
          <label for="simple-search" class="sr-only">
            Search
          </label>
          <div class="relative w-lg">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={handleSearch}
              value={search}
              placeholder="Search"
              required
            />
          </div>
          <button
            type="submit"
            class="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <span class="sr-only">Search</span>
          </button>
        </form>
      </div>

      <section className="px-4 flex lg:flex-nowrap flex-wrap gap-3">
        <div className=" w-full lg:w-6/12">
          <img
            className="w-[500px] h-[550px] sm:w-full rounded-lg "
            src={Hero}
            alt=""
          />
        </div>
        <div className="flex items-center flex-wrap lg:w-6/12 ">
          <h1 className="text-xl font-bold text-cyan-600 xl:mx-6 ">
            Selamat datang di toko kami toko kami siap melayani anda
          </h1>
        </div>
      </section>

      <section className=" ">
        <div className="px-4 py-7 mx-4 mt-8 bg-white shadow-md border-b border-gray-400">
          <h1 className="text-cyan-600 font-bold">Product terlaris</h1>
        </div>
        <div className="mx-4  bg-white px-2  py-7 flex flex-col md:flex-row items-center gap-4 justify-center  md:justify-evenly">
          {data.slice(11, 16).map((items) => (
            <Link to={`products-details/${items.id}`}>
              <div>
                <img
                  className="w-full md:w-20 md:h-20"
                  src={items.image}
                  alt=""
                />
                <h2 className="  md:w-full font-bold mt-3">
                  {items.title.slice(0, 15)}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
