import React from "react";
// import { useLocation } from "react-router-dom";
import { News } from "../../components/app/mock/NewsComponent";
import { SideBar } from "../../components/auth/layout/SideBarIntenalApp";
import { Header } from "../../components/app/layout/Header";
import CirclePicto from "../../assets/icons/circle-info-picto.svg";
import { MobileSidebar } from "../../components/auth/layout/MobileSidebar";
export const NewsPage = () => {
  return (
    <section className="FlexForApp">
      <div className="w-[250px] hidden md:block">
        <SideBar />
      </div>
      <div className="w-full">
        <div className="flexPostContainer">
          <MobileSidebar link="/app" />
        </div>
        <div className="hidden md:block">
          <Header />
        </div>
        <News />
      </div>
    </section>
  );
};
