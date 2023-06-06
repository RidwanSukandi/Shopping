import { useState, useEffect, Fragment, useContext } from "react";
import { useParams, NavLink } from "react-router-dom";
import Context from "../Context/apiContext";
import Navbar from "../Components/Navbar/Navbar";
import { useDispatch } from "react-redux";
import { update } from "../Features/productSlice";

export default function Details() {
  const [data, setData] = useState([]);
  const [counter, setCounter] = useState(1);

  const context = useContext(Context);
  const dispatch = useDispatch();

  const id = useParams();

  const fetchData = async () => {
    const api = await fetch(
      `https://fakestoreapi.com/products/${id.idProduct}`
    );
    const response = await api.json();

    setData(response);
  };

  //  {
  //   data.map(items => (
  //     console.log(items.rating)
  //   ))
  //  }

  useEffect(() => {
    fetchData();
  }, []);

  const handelChange = (id, counter, price, image, title) => {
    // context.setId(id);
    // context.setCount(count);
    // context.setPrice(price);
    // context.setImage(image);
    // context.setTitle(title);
    // localStorage.setItem('id',id);
    // localStorage.setItem('count',count);
    // localStorage.setItem('price',price);
    // localStorage.setItem('image',image);
    // localStorage.setItem('title',title);
    dispatch(update({ id, counter, price, image, title }));
  };

  return (
    <Fragment>
      <Navbar />

      <div className="max-w-full p-6 mx-2 my-2 shadow-xl md:mx-28 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
        <div className="flex md:items-center lg:items-center justify-between">
          <div className="w-6/12">
            <img className="w-sm" src={data.image} alt="" />
          </div>
          <div className="w-6/12 mx-5 my-4 ">
            <h5 className="font-bold text-sm md:text-xl lg:text-4xl">
              {data.title}
            </h5>
            <div className="flex flex-wrap lg:text-3xl lg:my-5 gap-1"></div>
            <h5 className="font-bold mt-3 text-sm md:text-lg lg:text-4xl text-red-600">
              ${data.price}
            </h5>

            <div className="count mt-3">
              <button
                type="button"
                className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900  focus:outline-none focus:ring-gray-300 font-medium rounded-sm text-sm px-2  text-center  mb-2  dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                onClick={() =>
                  counter > 1 ? setCounter(counter - 1) : setCounter(1)
                }
              >
                -
              </button>
              <h1 className="inline-block px-3">{counter}</h1>
              <button
                type="button"
                className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-gray-300 font-medium rounded-sm text-sm px-2 text-center mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                onClick={() => setCounter(counter + 1)}
              >
                +
              </button>
            </div>

            <div className="addToCard">
              <NavLink to="/cart-product">
                <button
                  onClick={handelChange(
                    data.id,
                    counter,
                    data.price,
                    data.image,
                    data.title
                  )}
                  type="button"
                  className="text-white bg-blue-700 mt-3 hover:bg-blue-800 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 mr-2 -ml-1 hidden sm:block"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                  </svg>
                  Add To Card
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-full p-6 px-3 mx-2  md:mx-28 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <p className="mb-3 text-lg font-medium text-gray-700 dark:text-gray-400">
          {data.description}
        </p>
      </div>
    </Fragment>
  );
}
