import React from "react";
import authStore from "../store/authstore";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const store = authStore();
  const navigate = useNavigate();
  const handleSignUpForm = async (e) => {
    e.preventDefault();
    await store.signup();
    navigate("/login");
  };
  return (
    <div
      className="  border border-3 border-black shadow-lg bg-yellow-50"
      style={{ width: "400px", height: "400px" }}
    >
      <form
        onSubmit={handleSignUpForm}
        className="flex flex-col justify-center items-center my-12"
      >
        <div className="flex  flex-col my-4 ">
          <label className="text-2xl">Email</label>
          <input
            type="email"
            name="email"
            value={store.SignUpForm.email}
            onChange={store.updateSignUpForm}
            className=" border-2 border-blue-100 hover:border-blue-300  h-12 pl-2"
            style={{ width: "200px" }}
            placeholder="johndoe@gmail.com"
          />
        </div>

        <div className="flex  flex-col my-4 ">
          <label className="text-2xl">Password</label>
          <input
            type="password"
            name="password"
            value={store.SignUpForm.password}
            onChange={store.updateSignUpForm}
            className=" border-2 border-blue-100 hover:border-blue-300  h-12 pl-2"
            style={{ width: "200px" }}
          />
        </div>
        <button
          type="submit"
          className="bg-[#1062FE] text-white  hover:bg-blue-400 text-2xl "
          style={{ width: "150px", height: "50px", marginRight: "50px" }}
        >
          Signup
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
