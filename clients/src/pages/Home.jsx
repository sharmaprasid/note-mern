import React from "react";
import { Link } from "react-router-dom";
import authStore from "../store/authstore";

const Home = () => {
  const store = authStore();
  return (
    <div className="bg-slate-100">
      <ul
        className="flex  justify-end  items-center cursor-pointer py-4 text-lg gap-4"
        style={{ marginRight: "300px" }}
      >
        <li className=" text-gray-500 hover:text-black">
          <Link to="/">Home</Link>
        </li>

        {store.loggedIn ? (
          <li className=" text-gray-500 hover:text-black">
            <Link to="/logout">Logout</Link>
          </li>
        ) : (
          <>
            <li className=" text-gray-500 hover:text-black">
              <Link to="/signup">Signup</Link>
            </li>
            <li className=" text-gray-500 hover:text-black">
              <Link to="/login">Login</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Home;
