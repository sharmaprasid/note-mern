import React from "react";
import SignUpForm from "../Components/SignUpForm";

const SignUpPage = () => {
  return (
    <div className="flex items-center justify-center flex-col mt-10 ">
      <h1 className="text-3xl my-5">Signup</h1>
      <SignUpForm />
    </div>
  );
};

export default SignUpPage;
