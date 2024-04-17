import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MainLogoImg from "../../../assets/icons/main-logo.png";
import { Sidebar } from "./Sidebar";
import { ReturnButton } from "../../UI/ReturnButton";
import { CloseButton } from "../../UI/CloseButton";

export const MobileSidebar = (props) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 767);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 767);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const closeSidebar = () => {
    setIsSidebarVisible(false);
  };

  return (
    <div className="sidebar-container-mobile">
      <div className="return-container">
        {isMobile && !props.returnHide && (
          <div className="absolute top-10 left-10">
            <ReturnButton link={props.link} />
          </div>
        )}
      </div>
      <Link to={props.link} className="returnContainer ">
        {isMobile && (
          <img
            src={MainLogoImg}
            alt="Logo Naapp"
            className="main-logo absolute top-5 right-35"
            title="Naapp"
          />
        )}
      </Link>
      <div>
        {isMobile && (
          <div onClick={toggleSidebar} className="info-logo absolute bottom-10">
            <div className="circle">
              <p>?</p>
            </div>
          </div>
        )}
        {isSidebarVisible && isMobile && (
          <div className="sidebar-popup">
            <div className="absolute close-button top-10 left-10" onClick={closeSidebar}>
              <CloseButton />
            </div>
            <Sidebar />
          </div>
        )}
      </div>
    </div>
  );
};
