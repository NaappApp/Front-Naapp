import React from "react";
// import { useLocation } from "react-router-dom";
import { News } from "../../components/app/mock/NewsComponent";
import { SideBar } from "../../components/auth/layout/SideBarIntenalApp";
export const NewsPage = () => {
  return (
    <section className="FlexForApp">
      <SideBar />
      <News />
    </section>
  );
};
