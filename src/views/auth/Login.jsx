import React from "react";
import { LoginForm } from "../../components/auth/forms/LoginForm";
import { Sidebar } from "../../components/auth/layout/Sidebar";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  let navigate = useNavigate();

  // eslint-disable-next-line no-unused-vars
  const handleSubmit = (email, psw) => {
    //TODO: Add Api
    fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, psw })
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    onAuthenticationSucces();
    // Here check if the given email & password match any data in our api
  };

  const onAuthenticationSucces = () => {
    // Must redirect to the '/redirected url once user is loged
    navigate("/app");
  };

  return (
    <div className="login-form">
      <Sidebar />
      <LoginForm handleSubmit={handleSubmit} />
    </div>
  );
};
