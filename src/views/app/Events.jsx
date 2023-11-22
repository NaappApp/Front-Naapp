import React from "react";
import { SideBar } from "../../components/auth/layout/SideBarIntenalApp";
import { Coming } from "../../components/app/mock/coming";
import { useLocation } from "react-router-dom";

export const Events = () => {
  const { state } = useLocation();
  return (
    <section className="FlexForApp">
      <SideBar state={state}></SideBar>
      <Coming></Coming>
    </section>
  );
};
