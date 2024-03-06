import React from "react";
// import { useLocation } from "react-router-dom";
import { PostComponent } from "../../components/app/mock/PostComponent";
import { SideBar } from "../../components/auth/layout/SideBarIntenalApp";
import { Header } from "../../components/app/layout/Header";
import { News } from "../../components/app/mock/NewsComponent";

export const Feed = () => {
  return (
    <section className="FlexForApp">
      <SideBar />
      <PostComponent />
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
