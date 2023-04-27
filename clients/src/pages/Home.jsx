import React from "react";
import { Link } from "react-router-dom";
import authStore from "../store/authstore";

const Home = () => {
  const store = authStore();
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        {store.loggedIn ? (
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        ) : (
          <>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Home;
