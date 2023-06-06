import React, { useContext, useState, useEffect } from "react";
import Logo from "../../Image/logo.png";
import Context from "../../Context/apiContext";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [data, setData] = useState([]);

  const fetchApi = async () => {
    const api = await fetch("https://fakestoreapi.com/products/categories");
    const response = await api.json();
    setData(response);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img className="h-8 w-8" src={Logo} alt="Logo" />
              </div>
              <h1 className="text-white font-bold">Shopping</h1>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {data.map((items, index) => (
                    <Link
                      key={index}
                      to={`/products/${items}`}
                      className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      {items}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={toggleSidebar}
              >
                <span className="sr-only">Open main menu</span>
                {/* Icon saat navbar dikecilkan */}
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
                {/* Icon saat navbar diperluas */}
                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        {isSidebarOpen && (
          <div
            className="md:hidden w-full z-50 absolute bg-gray-800 "
            id="mobile-menu"
          >
            <div className="px-2 flex flex-col pt-2 pb-3 space-y-1 sm:px-3">
              {data.map((items) => (
                <Link
                  to={`/products/${items}`}
                  className="text-gray-300 font-semibold hover:text-white px-3 py-2 rounded-md text-sm "
                >
                  {items}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
