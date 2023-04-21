import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "../../components/auth/layout/Sidebar";
import { RegisterForm } from "../../components/auth/forms/RegisterForm";
import { useDispatch } from "react-redux";
import { updateUser } from "../../store/user/userSlice";
import { registerAccount } from "../../store/user/userSlice";

export const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);
  const handleUpdateUser = (user) => {
    dispatch(updateUser(user));
    dispatch(registerAccount(user));
  };

  const createAccount = (email, password, checkPassword) => {
    if (password !== checkPassword) {
      const err = {
        property: "password",
        message: "Les mots de passe ne correspondent pas"
      };
      setErrorMessage(err);
      return;
    }
    if (!password) {
      const err = {
        property: "password",
        message: "Veuillez entrer un mot de passe"
      };
      setErrorMessage(err);
      return;
    }
    if (!email) {
      const err = {
        property: "email",
        message: "Veuillez entrer une adresse email"
      };
      setErrorMessage(err);
      return;
    }
    if (password.length < 8) {
      const err = {
        property: "password",
        message: "Le mot de passe doit contenir au moins 8 caractères"
      };
      setErrorMessage(err);
      return;
    }

    const user = {
      email: email,
      password: password
    };
    handleUpdateUser(user);
    navigate("/register/name");
  };

  return (
    <div className="Email-MDP-Page">
      <Sidebar />
      <RegisterForm errorMessage={errorMessage ?? false} createAccount={createAccount} />
    </div>
  );
};
