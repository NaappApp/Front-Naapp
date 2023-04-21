import React from "react";
import { useNavigate } from "react-router-dom";
import { UserPersonals } from "../../../components/auth/forms/UserPersonals";
import { Sidebar } from "../../../components/auth/layout/Sidebar";
import { useDispatch } from "react-redux";
import { updateUser } from "../../../store/user/userSlice";

export const Name = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const updatePersonals = (user) => {
    dispatch(updateUser(user));
    navigate("/register/type");
  };

  return (
    <div className="login-form">
      <Sidebar />
      <UserPersonals updatePersonals={updatePersonals} />
    </div>
  );
};
