import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "../../components/auth/layout/Sidebar";
import { RegisterForm } from "../../components/auth/forms/RegisterForm";
import { UserContext } from "../../components/auth/UserContext";

export const Register = () => {
  const user = useContext(UserContext);
  const navigate = useNavigate();

  const createAccount = (email, password, checkPassword) => {
    //TODO: Manage Errors
    if (password === checkPassword) {
      //TODO: Create the account in the API
      //fetch
      user.updateUser({ email: email });
      navigate("/register/name");
    }
  };

  return (
    <div className="Email-MDP-Page">
      <Sidebar />
      <RegisterForm createAccount={createAccount} />
    </div>
  );
};
