import React from "react";
import { UserType } from "../../../components/auth/forms/UserType";
import { Sidebar } from "../../../components/auth/layout/Sidebar";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export const Type = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const ReturnToPreviousPage = () => {
    navigate("/name", { state: { DataForTheAccount: state.DataForTheAccount } });
  };
  const SaveRole = (role) => {
    state.DataForTheAccount.Role = role;
    switch (role) {
      case "NEUROATYPIQUE":
        navigate("/NEUROATYPIQUE", { state: { DataForTheAccount: state.DataForTheAccount } });
        break;
      case "Curieux":
        navigate("/FinalRoute", { state: { DataForTheAccount: state.DataForTheAccount } });
        break;
      case "Professionel":
        navigate("/Professionel", { state: { DataForTheAccount: state.DataForTheAccount } });
        break;
      default:
        console.log("Error : The role is not valid");
    }
  };
  //! Role
  return (
    <div className="login-form">
      <Sidebar />
      <UserType saveRole={SaveRole} ReturnToPreviousPage={ReturnToPreviousPage} />
    </div>
  );
};
