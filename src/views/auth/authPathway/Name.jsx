import React from "react";
import { Sidebar } from "../../../components/auth/layout/Sidebar";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UserPersonals } from "../../../components/auth/forms/UserPersonals";
export const Name = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const previousPage = () => {
    navigate("/register");
  };

  const updatePersonals = (pseudo, firstName, lastName) => {
    state.account.Speudo = pseudo;
    state.account.Name = firstName;
    state.account.FamilyName = lastName;
    navigate("/register/type", { state: { account: state.account } });
  };

  return (
    <div className="login-form">
      <Sidebar />
      <UserPersonals updatePersonals={updatePersonals} previousPage={previousPage} />
    </div>
  );
};
