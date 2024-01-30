import React from "react";
import { Sidebar } from "../../../components/auth/layout/Sidebar";
import { UserInterets } from "../../../components/auth/forms/UserInterets";

export const Interets = () => {
  return (
    <div className="login-form">
      <Sidebar />
      <UserInterets />
    </div>
  );
};
