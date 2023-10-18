import React from "react";
import { UserType } from "../../../components/auth/forms/UserType";
import { Sidebar } from "../../../components/auth/layout/Sidebar";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateUser } from "../../../store/user/userSlice";

export const Type = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const updateType = (user) => {
    dispatch(updateUser(user));
    navigate("/register/bio");
  };

  return (
    <div className="login-form">
      <Sidebar />
      <UserType updateType={updateType} />
    </div>
  );
};
