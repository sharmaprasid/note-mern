import React from "react";
import LoginForm from "../Components/LoginForm";

const Login = () => {
  return (
    <div className="flex items-center justify-center flex-col mt-10 ">
      <h1 className="text-3xl my-5">Login</h1>
      <LoginForm />
    </div>
  );
};

export default Login;
