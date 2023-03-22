import React from "react";
import PropTypes from "prop-types";
import { LoginForm } from "../../components/auth/forms/LoginForm";
import { Sidebar } from "../../components/auth/layout/Sidebar";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  let navigate = useNavigate();

  // eslint-disable-next-line no-unused-vars
  const handleSubmit = (email, psw) => {
    //TODO: Add Api
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

Login.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};
