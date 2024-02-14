/* eslint-disable prettier/prettier */
import React from "react";
import ResourcePicto from "../../../assets/icons/resource-picto.svg";
import EventPicto from "../../../assets/icons/event-picto.svg";
import HomePicto from "../../../assets/icons/home-picto.svg";
import UserPicto from "../../../assets/icons/user-picto.svg";
import MessagePicto from "../../../assets/icons/message-picto.svg";

let isActive = true;

export const AppNav = () => {
    return (
        <nav className="pl-16">
            <ul className="h-full flex justify-center content-center">
                <li className="px-2">
                    <a className="" href="/">
                        <div className={isActive ? "flex justify-center content-center bg-gray-100 px-2 py-1 rounded-full mb-2" : "flex justify-center content-center py-1 bg-gray-100 px-2"}><img className="h-8 w-6" src={HomePicto} alt="" /></div>
                        <span>Accueil</span>
                    </a>
                </li>
                <li className="px-2">
                    <a className="" href="/">
                        <div className={isActive ? "flex justify-center content-center bg-gray-100 px-2 py-1 rounded-full mb-2" : "flex justify-center content-center py-1 bg-gray-100 px-2"}><img className="h-8 w-10" src={EventPicto} alt="" /></div>
                        <span>Évènements</span>
                    </a>
                </li>
                <li className="px-2">
                    <a className="" href="/">
                        <div className={isActive ? "flex justify-center content-center bg-gray-100 px-2 py-1 rounded-full mb-2" : "flex justify-center content-center py-1 bg-gray-100 px-2"}><img className="h-8 w-8" src={ResourcePicto} alt="" /></div>
                        <span>Ressources</span>
                    </a>
                </li>
                <li className="px-2">
                    <a className="" href="/">
                        <div className={isActive ? "flex justify-center content-center bg-gray-100 px-2 py-1 rounded-full mb-2" : "flex justify-center content-center py-1 bg-gray-100 px-2"}><img className="h-8 w-8" src={UserPicto} alt="" /></div>
                        <span>Compte</span>
                    </a>
                </li>
                <li className="px-2">
                    <a className="" href="/">
                        <div className={isActive ? "flex justify-center content-center bg-gray-100 px-2 py-1 rounded-full mb-2" : "flex justify-center content-center py-1 bg-gray-100 px-2"}><img className="h-8 w-10" src={MessagePicto} alt="" /></div>
                        <span>Messages</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
};
