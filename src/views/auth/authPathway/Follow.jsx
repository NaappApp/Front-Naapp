import React from "react";
import { Sidebar } from "../../../components/auth/layout/Sidebar";
import {UserFollow} from "../../../components/auth/forms/userFollow";

export const Follow = () => {
  return (
    <div className="login-form">
      <Sidebar />
      <UserFollow />
    </div>
  );
};
