import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authStore from "../store/authstore";

const Logoutpage = () => {
  const navigate = useNavigate();
  const Store = authStore();
  useEffect(() => {
    Store.logout();
    navigate("/login");
  }, []);
  return <div>Logoutpage</div>;
};

export default Logoutpage;
