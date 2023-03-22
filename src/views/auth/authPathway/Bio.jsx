import React from "react";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "../../../components/layout/SideBar";
import { UserBio } from "../../../components/auth/forms/UserBio";
import { useLocation } from "react-router-dom";

export const FinalRoute = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  console.log(state.DataForTheAccount.NeuroBalises);
  const ReturnToPreviousPage = () => {
    if (state.DataForTheAccount.Role !== "Curieux") {
      navigate("/" + state.DataForTheAccount.Role, {
        state: { DataForTheAccount: state.DataForTheAccount }
      });
    } else {
      navigate("/type", { state: { DataForTheAccount: state.DataForTheAccount } });
    }
  };
  const BioPage = (BioEntry) => {
    //Todo check if the bio is ok with web rules
    state.DataForTheAccount.Bio = BioEntry;
    console.log(state.DataForTheAccount);
    navigate("/redirected", { state: { DataForTheAccount: state.DataForTheAccount } });
  };
  return (
    <div className="login-form">
      <Sidebar />
      <UserBio BioPage={BioPage} ReturnToPreviousPage={ReturnToPreviousPage} />
    </div>
  );
};
