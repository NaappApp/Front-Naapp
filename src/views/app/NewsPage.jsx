import React from "react";
// import { useLocation } from "react-router-dom";
import { News } from "../../components/app/mock/NewsComponent";
import { SideBar } from "../../components/auth/layout/SideBarIntenalApp";
import { Header } from "../../components/app/layout/Header";
export const NewsPage = () => {
  return (
    <section className="FlexForApp">
      <div className="w-[250px] hidden md:block">
        <SideBar />
      </div>
      <div className="w-full">
        <Header />
        <News />
      </div>
    </section>
  );
};
