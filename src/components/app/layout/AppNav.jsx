import React from "react";
import ResourcePicto from "../../../assets/icons/resource-picto.svg";
import EventPicto from "../../../assets/icons/event-picto.svg";
import HomePicto from "../../../assets/icons/home-picto.svg";
import UserPicto from "../../../assets/icons/user-picto.svg";
import MessagePicto from "../../../assets/icons/message-picto.svg";
import { useLocation, Link } from "react-router-dom";

export const AppNav = () => {
  const location = useLocation();
  let isActive =
    location.pathname.split("/")[1] === "app"
      ? location.pathname.split("/")[1]
      : location.pathname.split("/")[2];

  return (
    <nav className="pl-64">
      <ul className="h-full flex justify-center content-center">
        <li className="px-8">
          <Link className="" to="/app">
            <div
              className={
                isActive === "app"
                  ? "flex justify-center content-center bg-gray-100 px-2 py-2 rounded-full mb-2"
                  : "flex justify-center hover:bg-gray-100 rounded-full transition-all content-center py-2 bg-transparent px-2 mb-2"
              }>
              <img className="h-8 w-6" src={HomePicto} alt="" />
            </div>
            <span>Accueil</span>
          </Link>
        </li>
        <li className="px-8">
          <Link className="" to="/app/event">
            <div
              className={
                isActive === "event"
                  ? "flex justify-center content-center bg-gray-100 px-2 py-2 rounded-full mb-2"
                  : "flex justify-center content-center hover:bg-gray-100 rounded-full transition-all py-2 bg-transparent px-2 mb-2"
              }>
              <img className="h-8 w-10" src={EventPicto} alt="" />
            </div>
            <span>Évènements</span>
          </Link>
        </li>
        <li className="px-8">
          <Link className="" to="/app/resources">
            <div
              className={
                isActive === "resources"
                  ? "flex justify-center content-center bg-gray-100 px-2 py-2 rounded-full mb-2"
                  : "flex justify-center content-center hover:bg-gray-100 rounded-full transition-all py-2 bg-transparent px-2 mb-2"
              }>
              <img className="h-8 w-8" src={ResourcePicto} alt="" />
            </div>
            <span>Ressources</span>
          </Link>
        </li>
        <li className="px-8">
          <Link className="" to="/app/account">
            <div
              className={
                isActive === "account"
                  ? "flex justify-center content-center bg-gray-100 px-2 py-2 rounded-full mb-2"
                  : "flex justify-center content-center py-2 hover:bg-gray-100 rounded-full transition-all bg-transparent px-2 mb-2"
              }>
              <img className="h-8 w-8" src={UserPicto} alt="" />
            </div>
            <span>Compte</span>
          </Link>
        </li>
        <li className="px-8">
          <Link className="" to="/app/messages">
            <div
              className={
                isActive === "messages"
                  ? "flex justify-center content-center bg-gray-100 px-2 py-2 rounded-full mb-2"
                  : "flex justify-center content-center py-2 hover:bg-gray-100 rounded-full transition-all bg-transparent px-2 mb-2"
              }>
              <img className="h-8 w-10" src={MessagePicto} alt="" />
            </div>
            <span>Messages</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
