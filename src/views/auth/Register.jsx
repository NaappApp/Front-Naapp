import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "../../components/auth/layout/Sidebar";
import { RegisterForm } from "../../components/auth/forms/RegisterForm";
import { UserContext } from "../../components/auth/UserContext";

export const Register = () => {
  const userContext = useContext(UserContext);
  const navigate = useNavigate();
  let errorMessage = null;

  const createAccount = (email, password, checkPassword) => {
    console.log(UserContext);
    //TODO: Manage Errors
    if (password === checkPassword) {
      //TODO: Create the account in the API
      //fetch
      userContext.updateUser({ email: email });
      navigate("/register/name");
    } else {
      console.log("Passwords don't match");
      errorMessage = "Les mots de passe ne correspondent pas";
    }
  };

  return (
    <div className="Email-MDP-Page">
      <Sidebar />
      <RegisterForm errorMessage={errorMessage ?? false} createAccount={createAccount} />
    </div>
  );
};
