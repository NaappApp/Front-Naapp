import React from "react";
import { SideBar } from "../../components/auth/layout/SideBarIntenalApp";
import { Account } from "../../components/app/mock/Account";
import { useLocation } from "react-router-dom";

export const Accounts = () => {
  const { state } = useLocation();
  return (
    <section className="FlexForApp">
      <SideBar state={state}></SideBar>
      <Account info={state}></Account>
    </section>
  );
};
