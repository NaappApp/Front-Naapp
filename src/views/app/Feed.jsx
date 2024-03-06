import React from "react";
// import { useLocation } from "react-router-dom";
import { PostComponent } from "../../components/app/mock/PostComponent";
import { SideBar } from "../../components/auth/layout/SideBarIntenalApp";
export const Feed = () => {
  return (
    <section className="FlexForApp">
      <SideBar />
      <PostComponent />
    </section>
  );
};
